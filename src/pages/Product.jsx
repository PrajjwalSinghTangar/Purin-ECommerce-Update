import styled from "styled-components";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { mobile,tablet } from "../responsive";

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

const AmountContainer = styled.div`
    display: flex;
    align-items:center;
    font-weight: 700;
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius:10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
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
    return(
        <Container>
            <Announcement/>
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.postimg.cc/vTb9LTD8/Unisex-Florals.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>Unisex Floral</Title>
                    <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aspernatur neque commodi ratione quibusdam pariatur facilis enim id iusto, itaque saepe nobis repudiandae nesciunt dolorem, laborum velit! Obcaecati, maxime rem.</Desc>
                    <Price>$20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black"/>
                            <FilterColor color="darkblue"/>
                            <FilterColor color="gray"/>
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
                        <AmountContainer>
                            <MinusOutlined />
                            <Amount>1</Amount>
                            <PlusOutlined />
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default Product;