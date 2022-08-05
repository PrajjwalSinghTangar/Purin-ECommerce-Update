import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { mobile,tablet } from "../responsive";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 20px;
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
    ${mobile({flexDirection: "column"})}
    ${tablet({flexDirection: "column"})}
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

`;

const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color:black;
    color:white;
`;

const Cart = ({currentUser}) => {
    return (
        <Container>
            <Announcement/>
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag (2)</TopText>
                        <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT NOW</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetails>
                                <Image src="https://i.postimg.cc/3xwwNxHQ/nike-black.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b> Unisex Floral</ProductName>
                                    <ProductId><b>ID:</b>7836383</ProductId>
                                    <ProductColor color="black"/>
                                    <ProductSize><b>Size:</b>36</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <PlusOutlined/>
                                    <ProductAmount>2</ProductAmount>
                                    <MinusOutlined/>
                                </ProductAmountContainer>
                                <ProductPrice>
                                    $30
                                </ProductPrice>
                            </PriceDetails>
                        </Product>
                        <Hr/>
                        <Product>
                            <ProductDetails>
                                <Image src="https://i.postimg.cc/Fztd8d1Q/61x-a-Gxc-O-L-UX679.jpg"/>
                                <Details>
                                    <ProductName><b>Product:</b> Unisex Floral</ProductName>
                                    <ProductId><b>ID:</b>7836383</ProductId>
                                    <ProductColor color="grey"/>
                                    <ProductSize><b>Size:</b>M</ProductSize>
                                </Details>
                            </ProductDetails>
                            <PriceDetails>
                                <ProductAmountContainer>
                                    <PlusOutlined/>
                                    <ProductAmount>1</ProductAmount>
                                    <MinusOutlined/>
                                </ProductAmountContainer>
                                <ProductPrice>
                                    $55
                                </ProductPrice>
                            </PriceDetails>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$85</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-$5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$85</SummaryItemPrice>
                        </SummaryItem>
                        <Button> CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    );
};

export default Cart;