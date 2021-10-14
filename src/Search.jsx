import { useEffect } from "react";
import LostLogo from "./svg/lostLogo.svg";
import searchIcon from "./svg/search.svg";
import "./styles.css";

function Search({
  search,
  setSearch,
  setInfo,
  searchValue,
  setSearchValue,
  setError,
  setNoResults,
  setLoading,
  suggestion,
  setSuggestion,
  showSuggestion,
  setShowSuggestion,
  selectSuggest,
  setSelectSuggest,
  autocomplete,
  setAutocomplete,
}) {
  useEffect(() => {
    if (autocomplete === true) {
      fetch(
        `https://api.giphy.com/v1/gifs/search/tags?api_key=peRjucbI6Hh4TDwa5lvJLRsPV5qUHgV5&q=${searchValue}&limit=8`
      )
        .then((response) => response.json())
        .then((data) => {
          setSuggestion(data.data);
          setShowSuggestion(true);
          setAutocomplete(false);
        });
    } else {
      setShowSuggestion(false);
    }
  }, [searchValue]);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=peRjucbI6Hh4TDwa5lvJLRsPV5qUHgV5&q=${selectSuggest}&limit=15&offset=0&rating=g&lang=es`
    )
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.data);
        setLoading(false);
      });
  }, [selectSuggest]);

  useEffect(() => {
    fetch(
      "https://api.giphy.com/v1/gifs/trending?api_key=peRjucbI6Hh4TDwa5lvJLRsPV5qUHgV5&limit=15&rating=g"
    )
      .then((response) => response.json())
      .then((data) => {
        setInfo(data.data);
      });
  }, []);

  useEffect(() => {
    if (search === true) {
      setError(false);
      setNoResults(false);
      setLoading(true);
      if (searchValue.length > 0) {
        fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=peRjucbI6Hh4TDwa5lvJLRsPV5qUHgV5&q=${searchValue}&limit=15&offset=0&rating=g&lang=es`
        )
          .then((response) => response.json())
          .then((data) => {
            setInfo(data.data);
            setSearch(false);
            if (data.data.length === 0) {
              setNoResults(true);
              setLoading(false);
            }
          });
      } else {
        setNoResults(false);
        setInfo([]);
        setError(true);
        setSearch(false);
        setLoading(false);
      }
    }
  }, [search]);

  const manejadorInput = (e) => {
    setSearchValue(e.target.value);
    if (searchValue.length > 0) {
      setAutocomplete(true);
    }
  };

  const manejadorClick = (e) => {
    e.preventDefault();
    setSearch(true);
  };

  const manejadorSugerencia = (e) => {
    setSearchValue(e.target.innerText);
    setSelectSuggest(e.target.innerText);
    setShowSuggestion(false);
    setSuggestion([]);
  };

  return (
    <div>
      <img src={LostLogo} width="250px" alt="MainLogo" />
      <h2 className="Search-title">
        {" "}
        Atrévete a perderte entre los mejores GIFs de la Web!{" "}
      </h2>
      <div className="inputsContainer">
        <input
          className="Search-inputtext"
          type="text"
          value={searchValue}
          onChange={manejadorInput}
        />
        <button className="Search-submit" onClick={manejadorClick}>
          {" "}
          <img src={searchIcon} alt="searchIcon" />{" "}
        </button>
      </div>
      <div className={showSuggestion && "SuggestBar"}>
        {" "}
        {showSuggestion &&
          suggestion.map((suggest) => {
            return (
              <p className="suggest" onClick={manejadorSugerencia}>
                {suggest.name}
              </p>
            );
          })}
      </div>
    </div>
  );
}

export default Search;
