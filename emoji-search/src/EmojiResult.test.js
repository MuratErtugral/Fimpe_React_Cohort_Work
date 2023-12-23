import React from "react";
import { render, screen } from "@testing-library/react";
import EmojiResultRow from "./EmojiResultRow";


describe("EmojiResultsRow component", () => {
  const emojiTitle = "Smile";
  const emojiSymbol = "😊";

  test("renders emoji row successfully", () => {
    render(<EmojiResultRow title={emojiTitle} symbol={emojiSymbol} />);

    // Check if the emoji image is present in the rendered component
    const emojiImage = screen.getByAltText(emojiTitle);
    expect(emojiImage).toBeDefined();

    // Check if the title is present in the rendered component
    const titleElement = screen.getByText(emojiTitle);
    expect(titleElement).toBeDefined();

    // Check if the info text is present in the rendered component
    const infoElement = screen.getByText("Click to copy emoji");
    expect(infoElement).toBeDefined();
  });
});
