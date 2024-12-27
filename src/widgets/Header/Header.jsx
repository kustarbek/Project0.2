
import './style.css'

import Logo from "./img/Logo Bagyt.jpg";
import FlagRussia from "./img/Flag_of_Russia.svg.png";
import FlagKyrgyzstan from "./img/Flag_of_Kyrgyzstan.svg.png";
export function Header() {
  return (

      <div className="container-fluid">
      <div className="ant"></div>
        <div className="logo">
                <img src={Logo} alt="" width="100" height="50"/>
        </div>
        <div className="container">
            <div className="nav-menu">
                <nav className="mainmenu mobile-menu">
                    <ul className="ul">
                        <li><a href="">Биз жонундо</a></li>
                        <li className="active"><a href="">Иш чара</a></li>
                        <li><a href="">Сбор</a></li>
                        <li><a href="">Галерея</a></li>
                        <li><a href="">Тур</a>
                        </li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </nav>
              
            </div>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="div">
          <span><img src={FlagRussia} alt="" width="30" height="15"/></span>
          <span><img src={FlagKyrgyzstan} alt="" width="30" height="15"/></span>
      </div>
      </div>
  )
}
