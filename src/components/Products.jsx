import { Fragment } from "react";
import styled from "styled-components";
import HomePageProduct from "./HomePageProduct";
const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap:wrap;
    justify-content: center;
    
    
`;

const Products = ({products}) => {
    return(
        <Fragment>
            <Container>
                {products.map((item) => (
                    <HomePageProduct img={item} key={item.id} title={item.title} route={item.route}/>
                ))}
                
            </Container>
        </Fragment>
    )
}

export default Products;