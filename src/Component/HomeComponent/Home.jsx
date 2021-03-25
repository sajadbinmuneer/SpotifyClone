import React, { Fragment } from 'react'
import SpotifySlider from '../SliderComponent/SpotifySlider'
import FooterComponent from "../FooterComponent/FooterComponent"
import "./Home.css";

const Home = () => {
    return (
        <div>
        <SpotifySlider/>
       
        <FooterComponent/>
        </div>
    )
}

export default Home
