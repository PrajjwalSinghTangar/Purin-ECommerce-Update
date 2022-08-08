import { ShoppingCartOutlined } from "@ant-design/icons";
import { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "../contexts/cart.context";

const Info = styled.div`
    opacity:0;
    width: 100%;
    height: 100%;
    position:absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index:3;
    display: flex;
    align-items:center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const Container = styled.div`
    flex:1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: #ddedf7;
    position:relative;

    &:hover ${Info}{
        opacity:1;
    };
`;

const Circle = styled.div`
    width: 80%;
    height: 80%;
    border-radius:99px;
    background-color:white;
    position:absolute;
`;

const Image = styled.img`
    max-height: 80%;
    max-width: 80%;
    background:center;  
    z-index:2;
    border-radius:99px;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    background-color:white;
    display: flex;
    align-items:center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;


    &:hover{
        background-color: white;
        transform: scale(1.1);
    };
`;

const Title = styled.h3`
    color:white;
    font-size:130%;
`;

const Product = ({id,img,name,price}) => {
    const {addItemToCart } = useContext(CartContext)
    const addProductToCart = () => addItemToCart({id,img,name,price})
    
    return(
        <Container>
            <Circle/>
            <Image src={img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined onClick={addProductToCart}/>
                </Icon>
                <Title>
                    <div>{name}</div>
                    <div>{'$'+ price}</div>
                </Title>            
            </Info>
            
            
        </Container>
    );
};

export default Product;