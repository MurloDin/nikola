import React from "react";
import "./PreviewSection.scss";
import {Link} from "react-scroll";


const PreviewSection = () => {
    return (
        <section className="preview-section">
            <div className="preview-section__parallax-img">
                <div className="parallax__dark-bg"></div>
                <div className="container" style={{zIndex: 1001}}>
                    <div className="preview-section__wrapper">
                        <div className="preview-section__title">Мы ремонтируем телефоны</div>
                        <div className="preview-section__subtitle">Лучший сервис в Гомеле</div>
                        <Link
                            to="seventh-section"
                            spy={true}
                            smooth={true} duration= {500}
                        >
                            <button className="preview-section__btn">Связаться</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default PreviewSection;
