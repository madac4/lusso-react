import React from 'react';
import axios from 'axios';
import { filter, slice, values } from 'lodash';
import { useNavigate } from 'react-router-dom';

import Product from './Product';
import Modal from './Modal';

function Products({ filters }) {
    const [products, setProducts] = React.useState([]);
    const [filteredProducts, setFilteredProducts] = React.useState([]);

    const [isCompleted, setIsCompleted] = React.useState(false);
    const [index, setIndex] = React.useState(12);
    const initialPosts = slice(filteredProducts.length > 0 ? filteredProducts : products, 0, index);
    const [singleProduct, setSingleProduct] = React.useState([]);
    const [openModal, setOpenModal] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const navigate = useNavigate();

    const loadMore = () => {
        setIndex(index + 6);
        if (index >= products.length) {
            setIsCompleted(true);
        } else {
            setIsCompleted(false);
        }
    };

    React.useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API}/products`);
                setProducts(data);
            } catch (error) {
                alert('Ошибка при получении каталога!');
                navigate('/');
            }
        };
        getProducts();
    });

    React.useEffect(() => {
        filters &&
            setFilteredProducts(
                products.filter((item) =>
                    Object.entries(filters).every(([key, value]) => item[key].includes(value)),
                ),
            );
    }, [products, filters]);

    const getProductModal = async (id) => {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/products/?id=${id}`);
        setSingleProduct(data);
        setOpenModal(true);
        setLoading(false);
    };

    const closeModal = () => {
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
            {products.length > 12 ? (
                isCompleted ? (
                    <button onClick={loadMore} type="button" className="button button__dark">
                        Это все
                    </button>
                ) : (
                    <button onClick={loadMore} type="button" className="button button__dark">
                        Показать еще
                    </button>
                )
            ) : (
                ''
            )}

            <Modal
                product={singleProduct[0]}
                loading={loading}
                openModal={openModal}
                closeModal={closeModal}
            />
        </>
    );
}

export default Products;
