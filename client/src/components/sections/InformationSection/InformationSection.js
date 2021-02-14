import React from "react";
import "./InformationSection.scss";


const InformationSection = () => {
    return (
        <section className="information-section" id="first-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <img
                            src="https://preview.colorlib.com/theme/logis/images/img_3.jpg"
                            alt="man"
                            className="information-section__img"
                        />
                    </div>
                    <div className="col-lg-6">
                        <div className="information-section__title">
                            О нас
                        </div>
                        <div className="information-section__desc">
                            “Logis” c 2009 года выполняет ремонт мобильной техники. Опытные специалисты
                            с использованием новейших технологий и современного оборудования способны справиться с любой
                            проблемой программного или аппаратного уровня, которая мешает нормальному функционированию
                            вашего мобильного устройства.
                            <br/><br/>
                            Ваш любимый телефон сломался и его необходимо срочно отремонтировать? Вы нечаянно разбили
                            фотоаппарат, уронили планшет или может Ваш GPS навигатор попросту перестал включаться? Тогда
                            Вам необходимо обратиться в наш сервисный центр!
                        </div>
                        <ul className="information-section__list">
                            <li className="information-section__list-item">Бесплатная консультация</li>
                            <li className="information-section__list-item">Быстрая работа</li>
                            <li className="information-section__list-item">Заключение договора</li>
                            <li className="information-section__list-item">Гарантия</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default InformationSection;
