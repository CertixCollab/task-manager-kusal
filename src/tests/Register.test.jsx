import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import Register from "../pages/Register";

describe("Register Page", () => {
  test("allows user to enter a name", async () => {
    const setUserName = vi.fn();

    render(
      <BrowserRouter>
        <Register
          setUserName={setUserName}
        />
      </BrowserRouter>
    );

    const input =
      screen.getByPlaceholderText(
        /enter your name/i
      );

    await userEvent.type(
      input,
      "Kasun"
    );

    expect(input).toHaveValue(
      "Kasun"
    );
  });

  test("calls setUserName when register button is clicked", async () => {
    const setUserName = vi.fn();

    render(
      <BrowserRouter>
        <Register
          setUserName={setUserName}
        />
      </BrowserRouter>
    );

    const input =
      screen.getByPlaceholderText(
        /enter your name/i
      );

    await userEvent.type(
      input,
      "Kasun"
    );

    const button =
      screen.getByRole("button", {
        name: /register/i,
      });

    await userEvent.click(button);

    expect(
      setUserName
    ).toHaveBeenCalledWith(
      "Kasun"
    );
  });
});