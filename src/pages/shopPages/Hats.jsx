import { useContext } from "react";
import styled from "styled-components";
import Announcement from '../../components/Announcement';
import Product from '../../components/Product';
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";
import { mobile } from "../../responsive";
import { ProductsContext } from "../../contexts/products.context";

const Container = styled.div`

`;

const Title = styled.h1`
    margin: 20px;
    text-align:center;

    ${mobile({fontSize: "30px"})}
`;


const ProductCategoryList = styled.div`

    display: flex;
    flex-wrap:wrap;
    justify-content: center;
`;




const Hats = () => {
    const {products} = useContext(ProductsContext)
    const hats = products.hats


    return(
        <Container>
            <Announcement/>
            <Title>Today's Wish?</Title>
            <ProductCategoryList>
                {
                    hats.map((item) => (
                        <Product img={item.img} key={item.id} name={item.name} price={item.price}/> 
                    ))
                }
            </ProductCategoryList>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default Hats;