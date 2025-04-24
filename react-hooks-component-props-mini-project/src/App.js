import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import ArticleList from "./Components/ArticleList";
import blogData from "./data/blog";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;

