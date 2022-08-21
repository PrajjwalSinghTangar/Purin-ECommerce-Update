import styled from "styled-components";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile,tablet } from "../responsive";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/cart.context";

const Container = styled.div`

`;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: "column", padding: "20px"})}
    ${tablet({flexDirection: "column", padding: "20px"})}
`;

const ImgContainer = styled.div`
    flex:1;
`;

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit:cover;
    ${mobile({height:"45vh"})}
    ${tablet({height:"60vh"})}
`;

const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
    top: 0;
    bottom: 0;
    margin:auto;
    ${mobile({padding: "0px 0px", margin: "0px"})}
    ${tablet({padding: "0px 0px", margin: "0px"})}
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
    ${mobile({textAlign: "left"})}
    ${tablet({textAlign: "left"})}

`;

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    display: flex;
    align-items:center;
`;

const FilterTitle = styled.span`
    font-size:40px;
    font-weight: 200px;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius:50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
    cursor: pointer;
    border-color: 1px solid black;
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({
        display: "flex",
        flexDirection:"row", 
        width: "100%",
        justifyContent: "space-around"
        })}
    ${tablet({
        display: "flex",
        flexDirection:"row", 
        width: "100%",
        justifyContent: "space-around"
        })}
`;


const Button = styled.button`
    padding: 15px;
    bottom: 1px solid teal;
    background-color:white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #eeeded;
    }
`;

const Product = () => {
    const { addItemToCart } = useContext(CartContext);
    const location = useLocation();

    const id = location.state.id
    const img = location.state.img
    const name = location.state.name
    const price = location.state.price

    const addProductToCart = () => addItemToCart({id,img,name,price})

    return(
        <Container>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src={img}/>
                </ImgContainer>
                <InfoContainer>
                    <Title>{name}</Title>
                    <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aspernatur neque commodi ratione quibusdam pariatur facilis enim id iusto, itaque saepe nobis repudiandae nesciunt dolorem, laborum velit! Obcaecati, maxime rem.</Desc>
                    <Price>${price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Colors: Unavailable</FilterTitle>
                            <FilterColor color="none"/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <Button onClick={addProductToCart}>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default Product;