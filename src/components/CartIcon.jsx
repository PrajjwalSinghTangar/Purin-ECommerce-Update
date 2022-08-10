import { ShoppingCartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const Container = styled.div`
    width: 45px;
    height: 45px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items:center;
    cursor: pointer;
`;

const Icon = styled.div`

`;

const ItemCount = styled.span`
    position:absolute;
    font-size:12px;
    font-weight:bold;
    top: 0px;
    right: 0px;
    min-height: 30%;
    min-width:30%;
    text-align:center;
    border-radius:99px;
    background-color: #5b5b5b9d;
    padding: 1px;
`;



const CartIcon = () => {
    const{isCartOpen,setIsCartOpen} = useContext(CartContext);


    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
    return(
        <Container onClick={toggleIsCartOpen}>
            <Icon>
                    <ShoppingCartOutlined style={{fontSize:'30px'}}/>
            </Icon>
            <ItemCount>{}</ItemCount>
        </Container>
    )
}

export default CartIcon;