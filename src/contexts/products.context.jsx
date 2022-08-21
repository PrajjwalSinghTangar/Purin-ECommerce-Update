import { useEffect } from "react";
import { createContext, useState } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils";
import { getSliderAndDocuments } from "../utils/firebase/firebase.utils";
import { getMaxSlideAndDocuments } from "../utils/firebase/firebase.utils";



export const ProductsContext = createContext({
    products: {},
    slider: {}
});


export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState({});
    const [slider , setSlider] = useState({});
    const [maxSlide, setMaxSlide] = useState({});

    useEffect(()=>{
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setProducts(categoryMap);
        }
        getCategoriesMap();
    },[])

    useEffect(()=>{
        const getSliderMap = async () => {
            const sliderMap = await getSliderAndDocuments();
            setSlider(sliderMap);
        }
        getSliderMap();
    },[])

    useEffect(()=>{
        const getMaxSlideMap = async () => {
            const slideMap = await getMaxSlideAndDocuments();
            setMaxSlide(slideMap);
        }
        getMaxSlideMap();
    },[])


    const value = { products, slider , maxSlide};
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}