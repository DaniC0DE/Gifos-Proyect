import { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Gallery from "./Gallery";

import "./Styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Gallery />
    </div>
  );
}

export default App;
