import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";
import { mobile,tablet } from "../responsive";

const Container = styled.div`
    display: flex;
    padding:20px;
    justify-content: center;
    ${mobile({display: "flex",flexDirection: 'column',})}
    ${tablet({display: "flex",flexDirection: 'column',})}
`;

const Catergories = () => {
    return(
        <Container>
            {categories.map(item => (
                <CategoryItem item={item} key={item.id}/>
            ))}
        </Container>
    )
}

export default Catergories;