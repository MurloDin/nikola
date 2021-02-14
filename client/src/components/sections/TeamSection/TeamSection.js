import React from "react";
import "./TeamSection.scss";
import TeamCard from "../../cards/TeamCard";


const TeamSection = () => {
    return (
        <section className="team-section" id="third-section">
            <div className="container" style={{textAlign: "center"}}>
                <div className="title">наша команда</div>
                <div className="row">
                    <div className="col-lg-4" >
                        <TeamCard desc="Занимается работйа на дому, мо"/>
                    </div>
                    <div className="col-lg-4" >
                        <TeamCard desc="
                         Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam
                at aut deleniti dicta doloremque in molestiae obcaecati odit pariatur perspiciatis quas quisquam quo
                ratione, sequi sint temporibus vitae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi aperiam
                at aut deleniti dicta doloremque in molestiae obcaecati odit pariatur perspiciatis quas quisquam quo
                ratione, sequi sint temporibus vitae."/>
                    </div>
                    <div className="col-lg-4" >
                        <TeamCard />
                    </div>
                </div>
            </div>
        </section>
    );
};


export default TeamSection;