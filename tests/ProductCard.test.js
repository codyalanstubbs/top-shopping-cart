import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductCard from '../components/ProductCard';


const defaultProductData = {
    id: "Ex2ods",
    name: "Example Product",
    cost: 100
}

const renderProductCardComponent = (productData) => {
    <ProductCard
        productData={productData}
        handleAdd={jest.fn()}
        handleIncreaseQnt={jest.fn()}
        handleDecreaseQnt={jest.fn()}
    />
}

describe('Product', () => {
    let queryByTestId;

    describe('Tests for all products', () => {
        test('Renders live preview with Apple as name', () => {
            ({ queryByTestId } = renderProductCardComponent({
                ...defaultProductData,
                name: "Apple",
            }));
    
            const productName = screen.queryByTestId('Apple');
            expect(productName).toBeInTheDocument(); 
         })

    });
    

});
