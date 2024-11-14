import { useState } from "react";
import CustomBellIcon from "./CustomBellIcon";
import "./header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);  };

  return (
    <div className="header">
      <div className="header-wrapper">
        <header className="header-container">
          <div className="logo">
            <img src="/Logo.svg" alt="логотип" />
          </div>
          <div className="right-section">
            <div className="location">
              <img src="/location.svg" alt="локация" />
              <p>Москва и область</p>
            </div>
            {!menuOpen && <CustomBellIcon />}
            {!menuOpen ? (
              <div className="burger-menu" onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              <div className="close-menu" onClick={toggleMenu}>
                <img src="/Close.svg" alt="Закрыть меню" />
              </div>
            )}
          </div>
        </header>
      </div>
      <div className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
        <nav className="navigation-menu">
          <a href="#">Преимущества Tele2</a>
          <a href="#">Тарифы</a>
          <a href="#">Акции и спецпредложения</a>
          <a href="#">Промотариф Tele2</a>
          <a href="#">Технология eSIM</a>
          <a>Подключение нового абонента</a>
        </nav>
        {menuOpen && (
          <div className="location-in-menu">
            <img src="/location.svg" alt="локация" />
            <p>Москва и область</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
