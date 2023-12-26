import React from "react";
import Books from "./components/books";
import Header from "./components/header";
import ScrollToTop from "./components/scrolltotop";
import "./style.css";

const App = () => {
  return (
    <div>
      <Header />
      <Books />
      <ScrollToTop />
    </div>
  );
};

export default App;
