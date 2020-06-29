import React from "react";
import Layout from "../components/layout";
import Book from "../components/book";

const Books = props => {
  const tctbd = {
    author: "Ichiro Kishimi & Fumitake Yoga",
    title: "The Courage to Be Disliked",
    stars: 4,
    date: "29-06-2020",
  };
  return (
    <Layout>
      <div>
        <p>This is where you will be able to read some of my book reviews.</p>
        <Book book={tctbd} />
      </div>
    </Layout>
  );
};

export default Books;
