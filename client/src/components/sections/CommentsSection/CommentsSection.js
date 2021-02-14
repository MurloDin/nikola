import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CommentsSection.scss";
import {getComments} from "../../../services/fixservice-api";

const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};


const CommentsSection = () => {
    const [comments, setComments] = useState([{author: 'qwe', rating: 3, comment: "asd"}]);
    useEffect(async () => {
        console.log("cc", comments)
        const data = await getComments()
        setComments(data)
    }, [])

    return (
        <section className="comments-section" id="sixth-section">
            <div className="container">
                <div className="title">Отзывы</div>
                <Link to='/new-comment' style={{color: "black"}}>
                    <button className="comments-section__btn">
                        Оставить отзыв
                    </button>
                </Link>
                <div className="row">
                    <div className="col-6 offset-3">
                        <Slider {...settings}>
                            {
                                comments.map((item, idx) => {
                                    return (
                                        <section className="slider-card">
                                            <div className="slider-card__comment">"{item.comment}"</div>
                                            <div className="slider-card__author">— {item.author}</div>
                                        </section>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </div>

        </section>
    );
};


export default CommentsSection;