import mis_pracus from "./files/mis_pracus.jpg";
import Wesole_swieta_do_pobrania from "./files/Wesole_swieta_do_pobrania.pdf";

export const arrayOfGifts = [
  <div className="gift-container">
    <img
      src={mis_pracus}
      alt="miś pracuś"
      className="gift-container__image"
    ></img>
  </div>,
  <div className="gift-container">
    <a
      href={Wesole_swieta_do_pobrania}
      target="_blank"
      rel="noreferrer"
      download={Wesole_swieta_do_pobrania}
    >
      <h2 className="gift-container__info">Wesołe święta do pobrania </h2>
    </a>
  </div>,
  <div className="gift-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gbVDWdSwvbM" title="Merry Christmas" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
  <div className="gift-container"></div>,
];
