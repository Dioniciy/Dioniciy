import React from "react";
import { render, cleanup, screen } from "@testing-library/react";

import Card from "components/Card";

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}));

const defaultProps = {
    id: 0,
    title: '',
    images: [],
    rating: 0,
    price: 0,
    isWished: false,
    isCart: false,
    category: '',
    brand: ''
}
describe("Base <Card /> test group", function () {
    test('<Card /> render with default props', () => {
        render(< Card {...defaultProps}
        />);
        const { getByLabelText, getByText, getByAltText } = screen

        getByLabelText('add to wishlist')
        getByLabelText('add to cart')

        const wishlistBtnImg = getByAltText('heart')
        const cartBtnImg = getByAltText('cart')
        getByText("ADD TO CART")

        expect(cartBtnImg).toHaveAttribute('src', 'bag.svg');
        expect(wishlistBtnImg).toHaveAttribute('src', 'heart.svg')
    })

    test('<Card /> with new props', () => {
        render(< Card {...defaultProps}
            title={'Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black'}
            images={
                ['https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg']
            }
            rating={5}
            price={15000}
            isCart={true}
            isWished={true}
        />)

        const { getByLabelText, getByText, getByAltText } = screen; 
        getByLabelText('remove from wishlist')
        getByLabelText('remove from cart')

        getByText("DELETE FROM CART"); getByText("Ноутбук Acer Aspire 3 A315-57G-336G (NX.HZREU.01S) Charcoal Black"); 
        getByText("$15000")
        getByText("5");

        const productImg = getByAltText('product')
        const cartBtnImg = getByAltText('cart')
        const wishlistBtnImg = getByAltText('heart')
        
        expect(productImg).toHaveAttribute('src', 'https://content.rozetka.com.ua/goods/images/big_tile/163399633.jpg')
        expect(cartBtnImg).toHaveAttribute('src', 'delete-from-cart.svg')
        expect(wishlistBtnImg).toHaveAttribute('src', 'heart-painted.svg')
    });
})