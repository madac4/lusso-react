import React from 'react';

function Product({ product, get }) {
    return (
        <article onClick={() => get && get(product.id)} className="catalog-body__item product">
            <img src={product.images} alt="" />
            <p>{product.name}</p>
            <h4>{product.price} MDL</h4>
        </article>
    );
}

export default Product;
