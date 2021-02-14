import React, {useState, useEffect} from "react";
import Slider from "react-slick";

import "./PhotoSection.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {getProjects} from "../../../services/fixservice-api";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
};


const PhotoSection = () => {

    const [data, setData] = useState([1, 1, 1])
    useEffect(() => {
        getProjects().then((data) => {
                setData(data);
            }
        )
    }, [])

    return (
        <section className="photo-section" id="fifth-section">
           <div className="title" style={{marginBottom: "50px"}}>Наш офис</div>
            <Slider {...settings}>
                {
                    data.map((item, idx) => {
                        return (
                            <img
                                src={`http://localhost:8000${item.photoLocation}`}
                                alt="image"
                                className="photo-section__img"
                            />
                        )
                    })
                }
            </Slider>
        </section>
    );
};


export default PhotoSection;