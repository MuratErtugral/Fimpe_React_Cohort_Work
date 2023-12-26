import React, { useState } from "react";

const Searchform = ({ searchText }) => {
  const [text, setText] = useState("");
  const [showValidTextModal, setShowValidTextModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "" || !text.trim()) {
      setShowValidTextModal(true);
      return;
    }
    searchText(text);
  };

  const onChangevalue = (e) => {
    e.preventDefault();
    setText(e.target.value);
    searchText(e.target.value);
    if (e.target.value === "") {
      setText("Jean-Christophe Grange");
      searchText("Jean-Christophe Grange");
    }
  };

  return (
    <div>
      <br />
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Search author, book name, etc..."
          onChange={onChangevalue}
        />
        <button
          className="search-button"
          type="submit"
        >
          Search
        </button>
      </form>
      <div
        id="popup1"
        className={showValidTextModal ? "overlay modal-active" : "overlay"}
      >
        <div className="popup">
          <div className="close" onClick={() => setShowValidTextModal(false)}>
            &times;
          </div>
          <h3 className="content">Please Enter the valid text</h3>
        </div>
      </div>
    </div>
  );
};

export default Searchform;
