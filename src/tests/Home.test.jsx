import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

beforeEach(() => {
  localStorage.clear();
});

const renderHome = () =>
  render(
    <BrowserRouter>
      <Home userName="Kasun" />
    </BrowserRouter>
  );

describe("Home Page", () => {
  test("shows welcome message with user name", () => {
    renderHome();
    expect(screen.getByText(/welcome, kasun/i)).toBeInTheDocument();
  });

  test("shows empty state when no tasks", () => {
    renderHome();
    expect(screen.getByText(/no tasks available/i)).toBeInTheDocument();
  });

  test("adds a task", async () => {
    renderHome();
    await userEvent.type(screen.getByPlaceholderText(/enter task/i), "Buy milk");
    await userEvent.click(screen.getByRole("button", { name: /add task/i }));
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
  });

  test("total task count updates after adding", async () => {
    renderHome();
    await userEvent.type(screen.getByPlaceholderText(/enter task/i), "Task A");
    await userEvent.click(screen.getByRole("button", { name: /add task/i }));
    expect(screen.getByText(/total tasks: 1/i)).toBeInTheDocument();
  });

  test("deletes a task", async () => {
    renderHome();
    await userEvent.type(screen.getByPlaceholderText(/enter task/i), "Delete me");
    await userEvent.click(screen.getByRole("button", { name: /add task/i }));
    await userEvent.click(screen.getByRole("button", { name: /delete/i }));
    expect(screen.queryByText("Delete me")).not.toBeInTheDocument();
  });

  test("searches and filters tasks", async () => {
    renderHome();
    await userEvent.type(screen.getByPlaceholderText(/enter task/i), "Buy milk");
    await userEvent.click(screen.getByRole("button", { name: /add task/i }));
    await userEvent.type(screen.getByPlaceholderText(/enter task/i), "Walk dog");
    await userEvent.click(screen.getByRole("button", { name: /add task/i }));

    await userEvent.type(screen.getByPlaceholderText(/search tasks/i), "milk");

    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.queryByText("Walk dog")).not.toBeInTheDocument();
  });

  test("shows no match message when search has no results", async () => {
    renderHome();
    await userEvent.type(screen.getByPlaceholderText(/enter task/i), "Buy milk");
    await userEvent.click(screen.getByRole("button", { name: /add task/i }));
    await userEvent.type(screen.getByPlaceholderText(/search tasks/i), "xyz");
    expect(screen.getByText(/no tasks match your search/i)).toBeInTheDocument();
  });

  test("persists tasks to localStorage", async () => {
    renderHome();
    await userEvent.type(screen.getByPlaceholderText(/enter task/i), "Saved task");
    await userEvent.click(screen.getByRole("button", { name: /add task/i }));
    const stored = JSON.parse(localStorage.getItem("tasks"));
    expect(stored[0].title).toBe("Saved task");
  });

  test("loads tasks from localStorage on mount", () => {
    localStorage.setItem(
      "tasks",
      JSON.stringify([{ id: 1, title: "Preloaded task", completed: false }])
    );
    renderHome();
    expect(screen.getByText("Preloaded task")).toBeInTheDocument();
  });
});
