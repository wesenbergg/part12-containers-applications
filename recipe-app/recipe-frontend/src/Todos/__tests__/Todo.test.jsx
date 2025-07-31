import {
  describe,
  it,
  expect,
  vi,
} from "../../../$node_modules/vitest/dist/index.js";
import {
  render,
  screen,
} from "../../../$node_modules/@testing-library/react/types/index.js";
import userEvent from "../../../$node_modules/@testing-library/user-event/dist/types/index.js";
import Recipe from "../Recipe.js";

describe("Recipe Component", () => {
  const mockRecipeCompleted = {
    text: "Complete task",
    done: true,
  };

  const mockRecipeIncomplete = {
    text: "Incomplete task",
    done: false,
  };

  const mockOnClickDelete = vi.fn();
  const mockOnClickComplete = vi.fn();

  it("renders an incomplete recipe correctly", () => {
    render(
      <Recipe
        recipe={mockRecipeIncomplete}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    // Check if the recipe text is displayed
    expect(screen.getByText("Incomplete task")).toBeInTheDocument();

    // Check if the status message is correct
    expect(screen.getByText("This recipe is not done")).toBeInTheDocument();

    // Check if both buttons are displayed for incomplete recipes
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Set as done")).toBeInTheDocument();
  });

  it("renders a completed recipe correctly", () => {
    render(
      <Recipe
        recipe={mockRecipeCompleted}
        onClickDelete={mockOnClickDelete}
        onClickComplete={mockOnClickComplete}
      />
    );

    // Check if the recipe text is displayed
    expect(screen.getByText("Complete task")).toBeInTheDocument();

    // Check if the status message is correct
    expect(screen.getByText("This recipe is done")).toBeInTheDocument();

    // Check if only delete button is displayed for completed recipes
    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.queryByText("Set as done")).not.toBeInTheDocument();
  });

  it("calls delete function when delete button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <Recipe
        recipe={mockRecipeIncomplete}
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
      <Recipe
        recipe={mockRecipeIncomplete}
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
