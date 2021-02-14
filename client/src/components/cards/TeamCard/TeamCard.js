import React from "react";
import "./TeamCard.scss";

const data = " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam\n" +
    "                at aut deleniti dicta doloremque in molestiae obcaecati odit pariatur perspiciatis quas quisquam quo\n" +
    "                ratione, sequi sint temporibus vitae."

const TeamCard = ({desc=data}) => {
    return (
        <section className="team-card">
            <img
                src="https://preview.colorlib.com/theme/logis/images/person_1.jpg"
                alt="man"
                className="team-card__img"
            />
            <div className="team-card__name">Jhon Fedor</div>
            <div className="team-card__job">engineer</div>
            <div className="team-card__desc">{desc}</div>
            <div className="team-card__btn-wrapper">
                <a href="vk.com" target="_blank">
                    <i className="icon-twitter-bird icon"/>
                </a>
                <a href="vk.com" target="_blank">
                    <i className="icon-facebook icon"/>
                </a>
                <a href="vk.com" target="_blank">
                    <i className="icon-odnoklassniki icon"/>
                </a>
            </div>
        </section>
    );
};


export default TeamCard;