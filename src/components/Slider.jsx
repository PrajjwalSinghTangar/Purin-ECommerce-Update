import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { useState,useContext,Fragment } from "react";
import styled from "styled-components";
import { mobile,tablet } from "../responsive";
import {useNavigate} from 'react-router-dom';
import { ProductsContext } from "../contexts/products.context";

const Container = styled.div`
    width:100%;
    height:90vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
    ${tablet({height:"50vh"})}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #b6b6b6;
    border-radius:50%;
    display: flex;
    align-items:center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform:translateX(${props => props.slideIndex * -100}vw);
    ${tablet({height:"60%"})}
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=> props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    ${tablet({position: 'relative'})}
`;

const Image = styled.img`
    height: 80%;
    vertical-align:middle;
    ${tablet({width:"100vw", height:"50%"})}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    ${tablet({
        position:'absolute', 
        top:"0",
        bottom: "0", 
        margin: "auto"})}
`;

const Title = styled.h1`
    font-size: 70px;
    ${tablet({fontSize: "35px", textAlign:"center"})}
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
    ${tablet({fontSize: "15px", width: "80vw", textAlign: "center"})}
`;

const Button = styled.button`
    padding: 10px;
    font-size:20px;
    background-color:transparent;
    cursor:pointer;
    ${tablet()}
`;

const Slider = () => {
    const {slider,maxSlide}= useContext(ProductsContext);

    const [slideIndex,setSlideIndex] = useState(0);

    const handleClick = (direction) => {

        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }   else    {
            setSlideIndex(slideIndex < maxSlide.slide  ? slideIndex +1 : 0)
        }

    };
    
    const navigate = useNavigate();
    

    return(
        <Fragment>
            <Container>
                <Arrow direction="left" onClick={()=>handleClick("left")}>
                    <CaretLeftOutlined />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>{
                    Object.keys(slider).map(item=> {
                        return <Fragment key={item}>
                            {slider[item].map((items) => {
                                return <Slide bg={items.bg} key={items.id}>
                                    <ImgContainer>
                                        <Image src={`${items.img}`}/>
                                    </ImgContainer>
                                    <InfoContainer>
                                    <Title>{items.name}</Title>
                                        <Desc>{items.desc}</Desc>
                                        <Button onClick={(e)=>navigate('/product',{
                                            state: {
                                                id: items.id,
                                                img : items.img, 
                                                name :items.name,
                                                price : items.price
                                            }})}>SHOP NOW</Button>
                                    </InfoContainer>
                                </Slide>
                            })}
                        </Fragment>
                    })
                }
                </Wrapper>
                <Arrow direction="right" onClick={()=>handleClick("right")}>
                    <CaretRightOutlined />
                </Arrow>
            </Container>
        </Fragment>
    )
}

export default Slider;