import React from 'react';
import axios from 'axios';
import { slice } from 'lodash';
import { useNavigate } from 'react-router-dom';

import Product from './Product';
import Modal from './Modal';

function Products() {
    const [products, setProducts] = React.useState([]);
    const [isCompleted, setIsCompleted] = React.useState(false);
    const [index, setIndex] = React.useState(12);
    const initialPosts = slice(products, 0, index);
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
        async function fetchProducts() {
            try {
                const { data } = await axios.get(`${process.env.REACT_APP_API}/products`);
                setProducts(data);
            } catch (error) {
                alert('Ошибка при получении каталога!');
                navigate('/');
            }
        }
        fetchProducts();
    }, [navigate]);

    if (!products) {
        return <>Загрузка...</>;
    }

    const getProductModal = (id) => {
        const getProduct = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API}/products/${id}`);
            setSingleProduct(res.data);
        };
        getProduct();
        setOpenModal(true);
        setLoading(false);
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

            <Modal
                product={singleProduct}
                loading={loading}
                openModal={openModal}
                closeModal={closeModal}
            />
        </>
    );
}

export default Products;
