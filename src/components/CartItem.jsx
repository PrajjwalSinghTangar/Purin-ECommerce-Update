import styled from "styled-components";

const Container = styled.div`
    margin:5px;
    display: flex;
    align-items:center;

`;

const Title = styled.h2`
    margin:5px 0px;
`;

const Quantity = styled.span`

`;

const Info = styled.div`

`;

const Image = styled.img`
    max-height:50px;
    max-width: 50px;
`;

const Calc = styled.div`

`;

const ItemPrice = styled.span`

`;
const Total = styled.span`

`;

const CartItem = ({cartItem}) => {
    const {name,quantity,img,price} = cartItem;
    return(
        <Container>
            <Image src={img}/>
            <Info>
            <Title>{name}</Title>
            <Calc>
            <Quantity>{quantity}</Quantity>
            <ItemPrice>{" x $"+price}</ItemPrice>
            <Total>{` (${quantity*price})`}</Total>
            </Calc>
            </Info>
        </Container>
    )
};

export default CartItem;