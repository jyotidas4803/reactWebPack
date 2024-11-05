import React from "react";
import Card from "./Card";

function App() {
  const styles = {
    display: "flex",
    gap: "30px",
    margin: "20px",
    flexWrap: "wrap",
  };

  return (
<div>
    <h1 id="header_first">Some Popular Programming Languages</h1>
    <div style={styles}>
      <Card
        imgLink="https://cdn.worldvectorlogo.com/logos/java.svg"
        name="Java"
        description="Commonly used in enterprise applications, Android development, and backend."
      />

      <Card
        imgLink="https://cdn.worldvectorlogo.com/logos/ruby.svg"
        name="Ruby"
        description="Often used in web development with the Ruby on Rails framework."
      />

      <Card
        imgLink="https://cdn.worldvectorlogo.com/logos/c.svg"
        name="C++"
        description="Known for system software, game development, and high-performance applications."
      />

      <Card
        imgLink="https://cdn.worldvectorlogo.com/logos/logo-javascript.svg"
        name="Javascript"
        description="Essential for web development, especially for front-end"
      />

      <Card
        imgLink="https://wallpapercg.com/media/ts_orig/22914.webp"
        name="Python"
        description="Great for web development, data analysis, AI, and more"
      />

      <Card
        imgLink="https://cdn.worldvectorlogo.com/logos/swift-15.svg"
        name="Swift"
        description="Primary language for iOS and macOS development."
      />

      <Card
        imgLink="https://cdn.worldvectorlogo.com/logos/kotlin-1.svg"
        name="Kotlin"
        description="Often used for Android development as an alternative to Java."
      />


      <Card
        imgLink="https://cdn.worldvectorlogo.com/logos/r-lang.svg"
        name="R"
        description="Mainly used for data analysis and statistics"
      />

      <Card
        imgLink="https://cdn.worldvectorlogo.com/logos/typescript.svg"
        name="Typescript"
        description="A superset of JavaScript that adds static typing, often used in large-scale web applications."
      />

      <Card
        imgLink="https://cdn.worldvectorlogo.com/logos/rust.svg"
        name="Rust"
        description="Known for memory safety and performance, used in systems programming."
      />
    </div>

    </div>
  );
}

export default App;
// <img src="" alt="" />
// <Card chintu="" /> {}
// properties props object