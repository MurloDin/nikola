import React from "react";
import "./ServiceCard.scss";


const ServiceCard = ({item}) => {
    return (
        <section className="service-card">
            <img
                src={`http://localhost:8000${item.photoLocation}`}
                alt="card-img"
                className="service-card__img"
            />
            <div className="service-card__text-wrapper">
                <div className="service-card__title">{item.title}</div>
                <div className="service-card__desc">{item.desc}</div>
                <div className="service-card__title">{item.price}</div>
            </div>
        </section>
    );
};

export default ServiceCard;