import styled from "styled-components";
import { Link } from "react-router-dom";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { mobile,tablet } from "../responsive";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    align-items:center; 
    flex-direction:column;
    ${mobile({padding: "10px"})}
    ${tablet({padding: "15px"})}
`;

const Title = styled.div`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    width:70vw;
    ${mobile({width: "90vw"})}
    ${tablet({width: "90vw"})}
`;

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=>props.type === "filled" && "none"};
    background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
    ${mobile({display:"none"})}
    ${tablet({display:"none"})}
`;

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const Bottom = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    width:70vw;
    ${mobile({flexDirection: "column",width:'90vw'})}
    ${tablet({flexDirection: "column",width:'90vw'})}
`;

const Info = styled.div`
    flex:3;
`;

const Product = styled.div`
    display: flex;
    justify-content: center;
    ${mobile({flexDirection: "column"})}
`;

const ProductDetails = styled.div`
    flex:2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;
`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
`;

const ProductName = styled.span`

`;

const ProductId = styled.span`

`;

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props=> props.color};
    cursor: pointer;
`;

const ProductSize = styled.span`

`;

const PriceDetails = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom:20px;
    ${mobile({marginBottom: "0px"})}
`;
const ProductAmount = styled.div`
    font-size: 24px;
    font-weight: 200;
    ${mobile({margin:"5px 15px"})}
    ${tablet({margin:"5px 15px"})}
`;
const ProductPrice = styled.div`
    font-size: 30px;
    ${mobile({margin:"20px"})}
`;

const Hr = styled.hr`
    background-color: white;
    border:none;
    height: 1px;
`

const Summary = styled.div`
    flex:1;
    border: 0.5px solid gray;
    border-radius:10px;
    padding: 20px;
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24"}px;
`;

const SummaryItemText = styled.span`

`;

const SummaryItemPrice = styled.span`
    text-align:right;
`;

const Button = styled.button`
    width:${props=> props.short ? "50%" : "100%"};
    padding: 10px;
    background-color:black;
    color:white;
    margin-top:10px;
    cursor:pointer;
`;

const CheckOut = () => {
    const {cartItems,cartCount,addItemToCart,removeItemFromCart, clearItemFromCart,cartTotal} = useContext(CartContext);
    

    const discount = () => { if(cartTotal > 50) {
        return(
            "$5.90 off! Yay!" 
        )
      }else{return(<div>
        {`Add $ ${50-cartTotal} worth items and save on delivery!`}
      </div>)}}
    const discountOff = () => { if(cartTotal > 50) {
        return(
            "-5.90!"
        )
      }else{return(<div>
        {`$5.90`}
      </div>)}}
    const grandSum = () => {
        if(cartTotal > 50 ){
            return cartTotal
        } if( cartTotal === 0) {
            return cartTotal
        }else{
            return cartTotal+5
        }
    }
    //console.log(cartItems);
    return (
        <Container>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton><Link to="/">CONTINUE SHOPPING</Link></TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag ({cartCount})</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {
                            cartTotal 
                            ?
                            (cartItems.map((items)=>{
                                const {id,img, name, price,quantity} = items
                                return(
                                    <div key={id}>
                                        <Product>
                                            <ProductDetails>
                                                <Image src={img} />
                                                <Details>
                                                    <ProductName><b>Product:</b> {name}</ProductName>
                                                    <ProductId><b>ID:</b>{id}</ProductId>
                                                    <ProductColor color="black"/>
                                                    <ProductSize><b>Size:</b>36</ProductSize>
                                                </Details>
                                            </ProductDetails>
                                            <PriceDetails>
                                                <ProductAmountContainer>
                                                    <PlusOutlined onClick={()=>addItemToCart(items)}/>
                                                    <ProductAmount>{" "+quantity+" "}</ProductAmount>
                                                    <MinusOutlined onClick={()=>removeItemFromCart(items)}/>
                                                </ProductAmountContainer>
                                                <ProductPrice>
                                                    {"$"+price}
                                                </ProductPrice>
                                                <Button short onClick={() => clearItemFromCart(items)}>
                                                    Remove Item
                                                </Button>
                                            </PriceDetails>
                                        </Product>
                                        <Hr/>
                                    </div>
                                )
                            }))
                            : (<Title><b>"You Have No Items"</b></Title>)
                        } 
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice> {"$"+cartTotal} </SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>{discount()}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>{discountOff()}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice> {"$"+grandSum()}</SummaryItemPrice>
                        </SummaryItem>
                        <Button> CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default CheckOut;