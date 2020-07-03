import React from "react";
import Layout from "../components/layout";
import Book from "../components/book";

const Books = () => {
  const books = [
    {
      author: "Ichiro Kishimi & Fumitake Yoga",
      title: "The Courage to Be Disliked",
      stars: 4,
      date: "29-06-2020",
    },
    {
      author: "Richard Hamming",
      title: "The Art of Doing Science and Engineering",
      stars: 3,
      date: "01-07-2020",
    },
  ];
  return (
    <Layout>
      <div className="books-container">
        <p>
          Some books I've read recently. Later I'll expand this to include
          reviews of some of them.
        </p>
        {books.map(book => (
          <Book book={book} />
        ))}
      </div>
    </Layout>
  );
};

export default Books;
