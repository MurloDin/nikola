import React from "react";
import "./ContactSection.scss";
import ContactsForm from "../../ContactsForm";


const ContactSection = () => {
    return (
        <section className="contact-section" id="seventh-section">
            <div className="container">
                <div className="title">контакты</div>
                <div className="row">
                    <div className="col-lg-6">
                        <ContactsForm />
                    </div>
                    <div className="col-lg-6" style={{backgroundColor: "white", marginTop: "30px"}}>
                        <div className="contact-section__title">адреса</div>
                        <div className="">203 Fake St. Mountain View, San Francisco, California, USA</div>
                        <div className="contact-section__title">Телефон</div>
                        <div className="">+1 232 3235 324</div>
                        <div className="contact-section__title">Email</div>
                        <div className="">youremail@domain.com</div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default ContactSection;