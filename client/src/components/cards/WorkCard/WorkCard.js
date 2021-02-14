import React from "react";
import "./WorkCard.scss";


const WorkCard = ({num, title, desc, list}) => {
    return (
        <section className="work-card">
            <div className="work-card__num center">{num}</div>
            <div className="work-card__title">{title}</div>
            <div className="work-card__desc">{desc}</div>
            <ul className="work-card__list">
                {
                    list.map((item, idx) => {
                        return <li className="work-card__list-item">{item}</li>
                    })
                }
            </ul>
        </section>
    );
};


export default WorkCard;