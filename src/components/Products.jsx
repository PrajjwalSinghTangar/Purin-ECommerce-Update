import styled from "styled-components";
import HomePageProduct from "./HomePageProduct";
import { ProductsContext } from "../contexts/products.context";
import { useContext } from "react";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    
    
`;

const Products = () => {
    const {products} = useContext(ProductsContext);
    return(
        <Container>
            
            {products.popularProducts.map((item) => (
                <HomePageProduct img={item} key={item.id} title={item.title} route={item.route}/>
            ))}
            
        </Container>
    )
}

export default Products;