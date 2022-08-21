import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile,tablet } from "../responsive";

const Container = styled.div`
    flex:1;
    margin: 3px;
    height: 70vh;
    position:relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit:cover;
    border:none;
    border-radius: ${props=> props.border};
    ${mobile({height: "50vh", borderRadius:"59px 0px 59px 0px"})}
    ${tablet({height: "70vh", borderRadius:"59px 0px 222px 0px"})}
`;

const Info = styled.div`
    position:absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
`;

const Title = styled.h1`
    color:white;
    margin-bottom:20px;
    ${mobile({textAlign: "center", fontSize: "35px"})}
`;

const Button = styled.button`
    bottom: none;
    padding: 10px;
    background-color:white;
    color:gray;
    cursor:pointer;
    font-weight: 600;
`;

const CategoryItem = ({item}) => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate(`${item.route}`)
    }
    return(
        <Container>
            <Image border={item.border} src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    <Button onClick={navigateHandler}>SHOP NOW</Button>
                </Info>
        </Container>
    );
};

export default CategoryItem;