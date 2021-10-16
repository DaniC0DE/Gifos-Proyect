import Loading from "./svg/loadingRings.svg";
import Blank from "./svg/Blank.svg";
import NotFound from "./svg/notFound.svg";
import "./styles.css";

function Gallery({ info, loading, error, noResults }) {
  return (
    <div className="CC-gallery">
      <div className="GalleryContainer">
        {info.length > 0
          ? info.map((obj, index) => {
              return (
                <div className="GifsContainer" key={index}>
                  {
                    <a
                      href={obj.images.original.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      <img
                        className="Gifs"
                        src={obj.images.original.url}
                        alt={obj.title}
                      />{" "}
                    </a>
                  }
                </div>
              );
            })
          : loading && <img src={Loading} alt="loading" />}
        {noResults && (
          <div className="notfound-container">
            {" "}
            <h4 className="notfound-title">
              {" "}
              No se consiguieron resultados para la busqueda
            </h4>
            <img width="400px" src={NotFound} alt="notFound" />{" "}
          </div>
        )}{" "}
        {error && (
          <div className="blank-container">
            {" "}
            <h4 className="blank-title"> Introduce una busqueda </h4>{" "}
            <img width="400px" src={Blank} alt="blankIcon" />{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
