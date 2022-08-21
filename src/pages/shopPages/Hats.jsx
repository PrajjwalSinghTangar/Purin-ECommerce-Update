import { Fragment, useContext } from "react";
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
    
    
    return(
        <Fragment>
            <Container >
            <Announcement/>
            <Title>Hats</Title>
            {
                Object.keys(products).map(title => {
                    return <Fragment key={title}>
                        <ProductCategoryList>
                                {
                                    products[title].filter((item) => item.type === "hat").map((item) => {
                                        return <div  key={item.id}>
                                            <Product img={item.img} name={item.name} price={item.price} id={item.id}/> 
                                        </div>    
                                    })
                                }                                
                                </ProductCategoryList>
                    </Fragment>
                })
            }        
            <Newsletter/>
            <Footer/>
        </Container>
        </Fragment>
    );
};

export default Hats;