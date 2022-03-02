import konkurs_mis_pracus from "./files/konkurs_mis_pracus.jpg";
import pobranie_Wesoleswieta from "./files/pobranie_Wesoleswieta.pdf";
import kalendarz_adwent_emi from "./files/kalendarz_adwent_emi.pdf";
import EMI_ida_swieta_do_pobrania from "./files/EMI_ida_swieta_do_pobrania.pdf";
import konkurs_ania from "./files/konkurs_ania.jpg";
import pobranie_rysowanie_krok from "./files/pobranie_rysowanie_krok.pdf";
import konkurs_swiateczny_21 from "./files/konkurs_swiateczny_21.jpg";
import rabat from "./files/rabat.jpg";
import pobranie_Wesole_elfy from "./files/pobranie_Wesole_elfy.pdf";
import kalendarz_adwent_smocza_straz from "./files/kalendarz_adwent_smocza_straz.pdf";
import konkurs_noworoczny_21 from "./files/konkurs_noworoczny_21.jpg";

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
  <div className="gift-container gift-container__primary gift-download gift-rysowanie">
    <a
      href={pobranie_rysowanie_krok}
      target="_blank"
      rel="noreferrer"
      download={pobranie_rysowanie_krok}
    >
      <p className="gift-anchor-content">wesołe święta</p>
    </a>
  </div>,
  <div className="gift-container">
    <iframe
      src="https://www.youtube.com/embed/MBlXTikqQJw"
      title="Jak wykonać drewniane ozdoby"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="gift-container">
    <img
      src={konkurs_mis_pracus} //4.12
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
      src={konkurs_ania} // 10.12
      alt="konkurs: Ania z Zielonego Wzgórza"
      className="gift-container__image"
    ></img>
  </div>,
  <div className="gift-container">
    <img
      src={rabat}
      alt="Specjalny kod rabatowy!"
      className="gift-container__image image__sale"
    ></img>
  </div>,
  <div className="gift-container">
    <img
      src={konkurs_swiateczny_21} // 12
      alt="konkurs świąteczny"
      className="gift-container__image"
    ></img>
  </div>,
  <div className="gift-container gift-display">
    <div className="gift-container__display gift-renifer"></div>
  </div>,
  <div className="gift-container">
    <iframe
      src="https://www.youtube.com/embed/mK8EEQ41KN8" //14
      title="Zrób to sam - pachnące kule do kąpieli | Sylwia Majcher"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="gift-container">
    <iframe
      src="https://www.youtube.com/embed/HqYWCRXmwQw" //15
      title="Autorzy składają Wam świąteczne życzenia!"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="gift-container gift-container__primary gift-download gift-wesoleswieta">
    <a
      href={pobranie_Wesoleswieta} //16
      target="_blank"
      rel="noreferrer"
      download={pobranie_Wesoleswieta}
    >
      <p className="gift-anchor-content">wesołe święta</p>
    </a>
  </div>,
  <div className="gift-container">
    <iframe
      src="https://www.youtube.com/embed/xxZVyK7fsmk" //17
      title="Beata Sarnowska czyta Koci Zaułek"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="gift-container gift-display"> 
    <div className="gift-container__display gift-piernik"></div>
  </div>,
  <div className="gift-container gift-container__primary gift-download gift-smocza">
    <a
      href={kalendarz_adwent_smocza_straz} //19
      target="_blank"
      rel="noreferrer"
      download={kalendarz_adwent_smocza_straz}
    >
      <p className="gift-anchor-content">
        fragment ostatniej części cyklu Smocza Straż
      </p>
    </a>
  </div>,
  <div className="gift-container gift-container__primary gift-download gift-wesole-elfy">
    <a
      href={pobranie_Wesole_elfy} //20
      target="_blank"
      rel="noreferrer"
      download={pobranie_Wesole_elfy}
    >
      <p className="gift-anchor-content">wesołe elfy</p>
    </a>
  </div>,
  <div className="gift-container">
    <iframe
      src="https://www.youtube.com/embed/MpYifQTmovc" //21
      title="Zrób to sam - ciasteczka zero waste | Sylwia Majcher"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="gift-container">
    <iframe
      src="https://www.youtube.com/embed/dFeTbDx1Y10" //22
      title="Zrób to sam - renifer"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="gift-container">
    <img
      src={konkurs_noworoczny_21} // 23
      alt="konkurs noworoczny"
      className="gift-container__image"
    ></img>
  </div>,
  <div className="gift-container">
    <iframe
      src="https://www.youtube.com/embed/l8HFC_Uq_Yk"
      title="Wesołych Świąt życzy wydawnictwo Wilga!"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>,
];
