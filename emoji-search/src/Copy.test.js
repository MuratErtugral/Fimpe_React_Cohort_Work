import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EmojiResults from "./EmojiResults";

describe("EmojiResults component", () => {
  const emojiData = [
    { title: "Smile", symbol: "😊" },
    { title: "Heart Eyes", symbol: "😍" },
    // ... diğer emoji verileri
  ];

  test("copies emoji when clicked", () => {
    render(<EmojiResults emojiData={emojiData} />);

    // Simulate clicking on an emoji row
    const emojiRow = screen.getByText("Smile"); // İlgili emojiyi seç
    fireEvent.click(emojiRow);

    // Check if the clipboard functionality has been triggered
    // You may need to adjust this part based on your application's actual behavior
    // Here, we're assuming that the Clipboard library is being used to copy to clipboard
    // and the copied text is stored in the clipboard's 'text' property
    expect(document.execCommand).toHaveBeenCalledWith("copy");

    // You can add more assertions based on your component's behavior
  });
});
