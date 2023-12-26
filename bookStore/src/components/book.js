import React, { useState } from "react";
import Modal from "react-modal";
import { BiLinkExternal } from "react-icons/bi";
import defaultBook from "../img/defaultBook.png";
import "../style.css";
import { motion } from "framer-motion";

const Book = ({ id, volumeInfo }) => {
  const imageVariants = {
    hover: {
      scale: 1.7,
      boxShadow: "0px 0px 8px #000",
      transition: {
        duration: 0.5,
        type: "spring",
        delay: 0.15,
      },
    },
  };
  let { title, authors, publisher, previewLink, imageLinks } = volumeInfo;
  const [isModalOpen, setIsModalOpen] = useState(false);

  //setting up default values for volume info data
  title = title || "Title is not available";
  authors = authors || "-";
  publisher = publisher || "-";
  previewLink = previewLink || "https://books.google.co.in/";

  return (
    <section key={id} className="loading-card">
      <div>
        <div>
          <motion.img
            src={imageLinks ? imageLinks.thumbnail : defaultBook}
            width="100px"
            alt="Book-cover"
            variants={imageVariants}
            whileHover="hover"
          />
        </div>
        <div>
          {title && (
            <div>
              <h3 className="inline">{title}</h3>
            </div>
          )}
        </div>

        <div>
          {authors && (
            <h4 style={{ paddingBottom: "1rem", color: "black" }}>
              {" "}
              Author:{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "#3B3B3B",
                }}
              >
                {" "}
                {authors}{" "}
              </span>
            </h4>
          )}
        </div>

        <div>
          {publisher && (
            <h5 style={{ paddingBottom: "1rem", color: "black" }}>
              {" "}
              Published by:{" "}
              <span
                style={{
                  fontWeight: "bold",
                  color: "#3B3B3B",
                }}
              >
                {" "}
                {publisher}{" "}
              </span>
            </h5>
          )}
        </div>

        <div>
          {previewLink && (
            <h5
              style={{
                fontWeight: "bold",
                color: "black",
                paddingBottom: "1rem",
              }}
            >
              Read more :{" "}
              <a href={previewLink} target="_blank" rel="noreferrer">
                {" "}
                Google Books <BiLinkExternal />{" "}
              </a>
            </h5>
          )}
        </div>

        <div className="more-details" onClick={() => setIsModalOpen(true)}>
          Click to see more details
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="detail-modal"
      >
        <h2>{title}</h2>
        <button className="close-button" onClick={() => setIsModalOpen(false)}>
          <span aria-hidden="true">&times;</span>
        </button>

        <p>
          <strong>Published Date:</strong> {volumeInfo?.publishedDate}
        </p>
        <p>
          <strong>Description:</strong> {volumeInfo?.description}
        </p>
        <p>
          <strong>Page Count:</strong> {volumeInfo?.pageCount}
        </p>
        <p>
          <strong>Categories:</strong> {volumeInfo?.categories?.join(", ")}
        </p>
        <p>
          <strong>Maturity Rating:</strong> {volumeInfo?.maturityRating}
        </p>
        <p>
          <strong>Language:</strong> {volumeInfo?.language}
        </p>
      </Modal>
    </section>
  );
};

export default Book;
