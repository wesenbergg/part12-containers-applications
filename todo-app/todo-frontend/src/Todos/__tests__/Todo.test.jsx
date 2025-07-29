import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Todo from "../Todo";

describe("Todo Component", () => {
  const mockTodoCompleted = {
    text: "Complete task",
    done: true,
  };

  const mockTodoIncomplete = {
    text: "Incomplete task",
    done: false,
  };

  const mockOnClickDelete = vi.fn();
  const mockOnClickComplete = vi.fn();

  it("renders an incomplete todo correctly", () => {
    render(
      <Todo
        todo={mockTodoIncomplete}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    // Check if the todo text is displayed
    expect(screen.getByText("Incomplete task")).toBeInTheDocument();

    // Check if the status message is correct
    expect(screen.getByText("This todo is not done")).toBeInTheDocument();

    // Check if both buttons are displayed for incomplete todos
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Set as done")).toBeInTheDocument();
  });

  it("renders a completed todo correctly", () => {
    render(
      <Todo
        todo={mockTodoCompleted}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    // Check if the todo text is displayed
    expect(screen.getByText("Complete task")).toBeInTheDocument();

    // Check if the status message is correct
    expect(screen.getByText("This todo is done")).toBeInTheDocument();

    // Check if only delete button is displayed for completed todos
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.queryByText("Set as done")).not.toBeInTheDocument();
  });

  it("calls delete function when delete button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <Todo
        todo={mockTodoIncomplete}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    // Click the delete button
    await user.click(screen.getByText("Delete"));

    // Check if the delete function was called
    expect(mockOnClickDelete).toHaveBeenCalled();
  });

  it("calls complete function when set as done button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <Todo
        todo={mockTodoIncomplete}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    // Click the complete button
    await user.click(screen.getByText("Set as done"));

    // Check if the complete function was called
    expect(mockOnClickComplete).toHaveBeenCalled();
  });
});
