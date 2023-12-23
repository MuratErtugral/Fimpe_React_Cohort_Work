import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput component", () => {
  const mockTextChange = jest.fn();

  test("filters emoji list successfully", () => {
    render(<SearchInput textChange={mockTextChange} />);

    // Simulate user input by changing the value of the input
    const inputElement = screen.getByRole("textbox");
    
    // Use event.persist() to persist the synthetic event
    fireEvent.change(inputElement, { target: { value: "smile" } });

    // Check if the textChange function is called with the correct value
    expect(mockTextChange).toHaveBeenCalledWith("smile");

    // You can add more assertions based on your component's behavior
  });
});
