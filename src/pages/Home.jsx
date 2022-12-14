import React from "react";
import Announcement from "../components/Announcement.jsx";
import Catergories from "../components/Categories.jsx";
import Slider from "../components/Slider.jsx";
import Products from "../components/Products.jsx";
import Newsletter from "../components/Newsletter.jsx";
import Footer from "../components/Footer.jsx";
import styled from "styled-components";
import { popularProducts } from "../data.js";

const Title = styled.h1`
    text-align:center;
`;

const Home = () => {
    
    return(
        <div>
            <Announcement/>
            <Slider/>
            <Catergories/>
            <Title>What's Your Need?</Title>
            <Products products={popularProducts}/>
            <Newsletter/>
            <Footer/>
        </div>
    );
};

export default Home;