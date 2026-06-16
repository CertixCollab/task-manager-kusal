import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TaskItem from "../components/TaskItem";

const mockTask = { id: 1, title: "Test task", completed: false };

const renderItem = (overrides = {}) => {
  const props = {
    task: mockTask,
    toggleStatus: vi.fn(),
    deleteTask: vi.fn(),
    editTask: vi.fn(),
    ...overrides,
  };
  render(<TaskItem {...props} />);
  return props;
};

describe("TaskItem", () => {
  test("renders task title and pending status", () => {
    renderItem();
    expect(screen.getByText("Test task")).toBeInTheDocument();
    expect(screen.getByText(/pending/i)).toBeInTheDocument();
  });

  test("renders completed status", () => {
    renderItem({ task: { ...mockTask, completed: true } });
    expect(screen.getByText(/completed/i)).toBeInTheDocument();
  });

  test("calls toggleStatus when Toggle button clicked", async () => {
    const { toggleStatus } = renderItem();
    await userEvent.click(screen.getByRole("button", { name: /toggle/i }));
    expect(toggleStatus).toHaveBeenCalledWith(1);
  });

  test("calls deleteTask when Delete button clicked", async () => {
    const { deleteTask } = renderItem();
    await userEvent.click(screen.getByRole("button", { name: /delete/i }));
    expect(deleteTask).toHaveBeenCalledWith(1);
  });

  test("shows edit input when Edit button clicked", async () => {
    renderItem();
    await userEvent.click(screen.getByRole("button", { name: /edit/i }));
    expect(screen.getByDisplayValue("Test task")).toBeInTheDocument();
  });

  test("calls editTask with new value on Save", async () => {
    const { editTask } = renderItem();
    await userEvent.click(screen.getByRole("button", { name: /edit/i }));
    const input = screen.getByDisplayValue("Test task");
    await userEvent.clear(input);
    await userEvent.type(input, "Updated task");
    await userEvent.click(screen.getByRole("button", { name: /save/i }));
    expect(editTask).toHaveBeenCalledWith(1, "Updated task");
  });

  test("cancels edit and restores original title", async () => {
    renderItem();
    await userEvent.click(screen.getByRole("button", { name: /edit/i }));
    const input = screen.getByDisplayValue("Test task");
    await userEvent.clear(input);
    await userEvent.type(input, "Changed");
    await userEvent.click(screen.getByRole("button", { name: /cancel/i }));
    expect(screen.getByText("Test task")).toBeInTheDocument();
  });
});
