import React from 'react';
import axios from 'axios';
import { slice } from 'lodash';

import Product from './Product';

function Products() {
    const [products, setProducts] = React.useState([]);
    const [isCompleted, setIsCompleted] = React.useState(false);
    const [index, setIndex] = React.useState(12);
    const initialPosts = slice(products, 0, index);
    const [singleProduct, setSingleProduct] = React.useState([]);
    const [openModal, setOpenModal] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    const getProducts = async () => {};

    const loadMore = () => {
        setIndex(index + 6);
        if (index >= products.length) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };

    React.useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API}/products`)
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const getProductModal = (id) => {
        const getProduct = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API}/products/${id}`);
            setSingleProduct(res.data);
        };
        getProduct();
        setOpenModal(true);
        if (singleProduct.name) {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setSingleProduct([]);
        setOpenModal(false);
        setLoading(true);
    };
    return (
        <>
            <div className="catalog__body catalog-body catalog-grid">
                {initialPosts.map((product, i) => (
                    <Product get={getProductModal} key={`${product.name}_${i}`} product={product} />
                ))}
            </div>
            {isCompleted ? (
                <button onClick={loadMore} type="button" className="button button__dark">
                    Это все
                </button>
            ) : (
                <button onClick={loadMore} type="button" className="button button__dark">
                    Показать еще
                </button>
            )}
            <div className={openModal ? 'product-modal open' : 'product-modal'}>
                {loading ? (
                    <h2>Loading . . . </h2>
                ) : (
                    <div className="product-modal__body modal-body">
                        <div className="modal-body__slider">
                            <div className="page__product-slider product-slider">
                                <div className="product-slider__body">
                                    <div className="product-slider__slider">
                                        <div className="slider-product__body swiper">
                                            <div className="slider-product__slide">
                                                <img src="img/product1.jpg" alt="" />
                                            </div>
                                            <div className="slider-product__slide">
                                                <img src="img/product2.jpg" alt="" />
                                            </div>
                                        </div>

                                        <div className="slider-product-controls">
                                            <div className="slider-product-controls__arrows slider-arrows">
                                                <button
                                                    type="button"
                                                    className="slider-arrow slider-arrow__prev icon-chevron__left"></button>
                                                <button
                                                    type="button"
                                                    className="slider-arrow slider-arrow__next icon-chevron__right"></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="page__thumb-slider thumb-slider">
                                <div className="thumb-slider__body">
                                    <div className="thumb-slider__slider">
                                        <div className="slider-thumb__body swiper">
                                            <div className="slider-thumb__slide">
                                                <img src="img/product1.jpg" alt="" />
                                            </div>
                                            <div className="slider-thumb__slide">
                                                <img src="img/product2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-body__content">
                            <h4 className="product-name">{singleProduct.name}</h4>
                            <h4 className="product-price">{singleProduct.price} MDL</h4>

                            <p>{singleProduct.description}</p>
                            {/* <button className="add-cart button button__dark added">
                                <div className="icon-done"></div>
                                Добавить в корзину
                            </button> */}
                        </div>
                    </div>
                )}

                <button
                    type="button"
                    onClick={closeModal}
                    className="product-modal__close icon-close"></button>
            </div>
        </>
    );
}

export default Products;
