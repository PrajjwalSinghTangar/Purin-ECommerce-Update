import styled from "styled-components";
import CartItem from "./CartItem";
import { CartContext } from "../contexts/cart.context";
import { useContext } from "react";

const Container = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 60px;
    right: 0px;
    z-index: 5;

    .empty-message {
        font-size:18px;
        margin:50px auto;
    }
`;

const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

const Button = styled.button`
    width: 100%;
    border:none;
    padding: 15px 20px;
    background-color:teal;
    color:white;
    cursor: pointer;
    margin-top: auto;
    margin-bottom:5px;

    &:hover{
        background-Color: white;
        border:  teal solid;
        color:teal;
    }
`;

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    return(
        <Container>
            <CartItems>
                {
                    cartItems.map((item) => (
                    <CartItem cartItem={item} key={item.id}/>
                    ))
                }
            </CartItems>
            <Button>
                GO TO CHECKOUT
            </Button>
        </Container>
    )
}

export default CartDropDown;