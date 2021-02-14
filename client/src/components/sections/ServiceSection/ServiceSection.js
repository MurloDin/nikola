import React, {useEffect, useState} from "react";
import "./ServiceSection.scss";
import ServiceCard from "../../cards/ServiceCard";
import {getServices} from "../../../services/fixservice-api";


const ServiceSection = () => {
    const [services, setService] = useState([{}]);
    useEffect(async () => {
        const data = await getServices()
        setService(data)
    }, [])

    return (
        <section className="service-section" id="forth-section">
            <div className="container">
                <div className="title" style={{textAlign: "center"}}>наш сервис</div>
                <div className="row" style={{marginTop: "60px"}}>
                    {
                        services.map((item) => {
                            return (
                                <div className="col-lg-4">
                                    <ServiceCard item={item}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
};


export default ServiceSection;