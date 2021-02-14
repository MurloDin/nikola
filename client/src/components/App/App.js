import React, {useState, useEffect} from "react";
import { Switch, Route } from 'react-router-dom'

import "./App.scss";
import "../../styles/fontello/css/fontello.css"

import Header from "../Header";
import PreviewSection from "../sections/PreviewSection";
import InformationSection from "../sections/InformationSection";
import WorkSection from "../sections/WorkSection";
import TeamSection from "../sections/TeamSection";
import ServiceSection from "../sections/ServiceSection";
import PhotoSection from "../sections/PhotoSection";
import CommentsSection from "../sections/CommentsSection";
import ContactSection from "../sections/ContactSection";
import CommentForm from "../CommentForm";



const App = () => {
    const [styles, setStyles] = useState({backgroundColor: "rgba(255,255,255,0)", color: "white"});

    const listenScrollEvent = (e) => {
        if (window.scrollY > 200) {
            setStyles({backgroundColor: "rgba(255,255,255,1)", color: "black"})
        } else {
            setStyles({backgroundColor: "rgba(255,255,255,0)", color: "white"})
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])

    return (
        <Switch>
            <Route exact path="/">
                <Header styles={styles}/>
                <PreviewSection />
                <InformationSection />
                <WorkSection />
                <TeamSection />
                <ServiceSection />
                <PhotoSection />
                <CommentsSection />
                <ContactSection />
            </Route>
            <Route path="/new-comment" component={CommentForm} />
        </Switch>
    );
};


export default App;
