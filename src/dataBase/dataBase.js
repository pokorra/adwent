import konkurs_mis_pracus from "./files/konkurs_mis_pracus.jpg";
import pobranie_Wesole_swieta from "./files/pobranie_Wesole_swieta.pdf";
import kalendarz_adwent_emi from "./files/kalendarz_adwent_emi.pdf";
import EMI_ida_swieta_do_pobrania from "./files/EMI_ida_swieta_do_pobrania.pdf";
import konkurs_ania from "./files/konkurs_ania.jpg";

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
    >
      <p className="gift-anchor-content">wesołe święta</p>
    </a>
  </div>,
  <div className="gift-container">
    <iframe
      src="https://www.youtube.com/embed/dkgNQpeBy_g"
      title="Jak wykonać drewniane ozdoby"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="gift-container">
    <img
      src={konkurs_mis_pracus}
      alt="miś pracuś"
      className="gift-container__image"
    ></img>
  </div>,
  <div className="gift-container gift-container__primary gift-download gift-emi">
    <a
      href={kalendarz_adwent_emi}
      target="_blank"
      rel="noreferrer"
      download={kalendarz_adwent_emi}
    >
      <p className="gift-anchor-content">
        fragment książki o przygodach Emi w Szwecji
      </p>
    </a>
  </div>,
  <div className="gift-container gift-display">
    <div className="gift-container__display gift-mikolajki"></div>
  </div>,
  <div className="gift-container">
    <iframe
      src="https://www.youtube.com/embed/QaxzGy3I4Lo"
      title="Marcin Przewoźniak czyta Mamę w occie"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="gift-container">
    <iframe
      src="https://www.youtube.com/embed/Vp-KdQ_DlnU"
      title="Jak zrobić kartkę z bałwankiem"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="gift-container gift-container__primary gift-download gift-emi-download">
    <a
      href={EMI_ida_swieta_do_pobrania}
      target="_blank"
      rel="noreferrer"
      download={EMI_ida_swieta_do_pobrania}
    >
      <p className="gift-anchor-content">Emi - materiały do pobrania</p>
    </a>
  </div>,
  <div className="gift-container">
    <img
      src={konkurs_ania}
      alt="konkurs: Ania z Zielonego Wzgórza"
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
];
