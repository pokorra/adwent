import konkurs_mis_pracus from "./files/konkurs_mis_pracus.jpg";
import pobranie_Wesole_swieta from "./files/pobranie_Wesole_swieta.pdf";

export const arrayOfGifts = [
  <div className="gift-container">
    <iframe
      src="https://www.youtube.com/embed/dkgNQpeBy_g"
      title="DIY torebki na prezenty"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="gift-container gift-container__primary gift-download gift-wesole">
    <a
      href={pobranie_Wesole_swieta}
      target="_blank"
      rel="noreferrer"
      download={pobranie_Wesole_swieta}
    > <p className="gift-anchor-content"> "wesołe święta"</p></a>
  </div>,
  <div className="gift-container">
    <div>DZIEŃ 3 DZIKIE DZIECI</div>
  </div>,
  <div className="gift-container">
    <img
      src={konkurs_mis_pracus}
      alt="miś pracuś"
      className="gift-container__image"
    ></img>
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
];
