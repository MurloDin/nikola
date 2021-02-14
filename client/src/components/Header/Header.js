import React from "react";
import { Link } from "react-scroll";
import "./Header.scss";


const Header = ({styles}) => {
    const width  = window.innerWidth;

    return (
        <header className="page-header" style={{backgroundColor: styles.backgroundColor}}>
            <div className="container vertical-flex">
                <div className="page-header__logo" style={{color: styles.color}}>
                    Lo<span style={{color: "#F16821"}}>g</span>is
                </div>
                {
                    width > 1021 && (
                        <nav>
                            <ul className="page-header__nav">
                                <li className="page-header__nav-item" style={{color: styles.color}}>
                                    <Link
                                        to="first-section"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="page-header__link"
                                    >
                                        О нас
                                    </Link>
                                </li>
                                <li className="page-header__nav-item" style={{color: styles.color}}>
                                    <Link
                                        to="second-section"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="page-header__link"
                                    >
                                        Как работаем
                                    </Link>
                                </li>
                                <li className="page-header__nav-item" style={{color: styles.color}}>
                                    <Link
                                        to="third-section"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="page-header__link"
                                    >
                                        Команда
                                    </Link>
                                </li>
                                <li className="page-header__nav-item" style={{color: styles.color}}>
                                    <Link
                                        to="forth-section"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="page-header__link"
                                    >
                                        Услуги
                                    </Link>
                                </li>
                                <li className="page-header__nav-item" style={{color: styles.color}}>
                                    <Link
                                        to="fifth-section"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="page-header__link"
                                    >
                                        Офис
                                    </Link>
                                </li>
                                <li className="page-header__nav-item" style={{color: styles.color}}>
                                    <Link
                                        to="sixth-section"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="page-header__link"
                                    >
                                        Отзывы
                                    </Link>
                                </li>
                                <li className="page-header__nav-item" style={{color: styles.color}}>
                                    <Link
                                        to="seventh-section"
                                        spy={true}
                                        smooth={true} duration= {500}
                                        className="page-header__link"
                                    >
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    )
                }
            </div>
        </header>
    );
};


export default Header;
