import { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Gallery from "./Gallery";
import Loading from "./svg/loadingRings.svg";
import GifosL from "./svg/gifosLight.svg";
import GifosD from "./svg/gifosDark.svg";
import LostLogo from "./svg/lostLogo.svg";
import searchIcon from "./svg/search.svg";
import Blank from "./svg/Blank.svg";
import NotFound from "./svg/notFound.svg";

import "./Styles.css";

function App() {
  const [search, setSearch] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [info, setInfo] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [noResults, setNoResults] = useState(false);

  let sinResultados = [];

  return (
    <div className="App">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Search
        search={search}
        setSearch={setSearch}
        info={info}
        setInfo={setInfo}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        error={error}
        setError={setError}
        noResults={noResults}
        setNoResults={setNoResults}
        loading={loading}
        setLoading={setLoading}
      />
      <Gallery
        sinResultados={sinResultados}
        search={search}
        setSearch={setSearch}
        info={info}
        setInfo={setInfo}
        loading={loading}
        setLoading={setLoading}
        error={error}
        noResults={noResults}
      />
    </div>
  );
}

export default App;
