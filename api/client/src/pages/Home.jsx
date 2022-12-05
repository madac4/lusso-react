import React from 'react';
import { Link } from 'react-router-dom';
import { slice } from 'lodash';
import { axiosInstance } from '../config';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Proud from '../components/Proud';
import Product from '../components/Product';
import Modal from '../components/Modal';
import useScrollPosition from '../hooks/useScrollPosition';

import olga from '../assets/img/olga.png';
import hero from '../assets/img/hero.jpg';

function Home() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [advantages, setAdvantages] = React.useState([]);
    const [products, setProducts] = React.useState([]);
    const [heroHeight, setHeroHeight] = React.useState(0);
    const ref = React.useRef(null);
    const goBottom = React.useRef(null);
    const [hidden, setHidden] = React.useState(true);
    const scrollPosition = useScrollPosition();
    const [openModal, setOpenModal] = React.useState(false);
    const [singleProduct, setSingleProduct] = React.useState([]);

    React.useEffect(() => {
        const getProducts = async () => {
            try {
                const { data } = await axiosInstance.get(`/products`);
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    React.useEffect(() => {
        const getAdvantages = async () => {
            try {
                const { data } = await axiosInstance.get(`/advantages`);
                setAdvantages(data);
            } catch (error) {
                console.log(error);
            }
        };
        getAdvantages();
    }, []);

    const displayProducts = slice(products, 0, 8);

    React.useEffect(() => {
        setHeroHeight(ref.current.clientHeight);
    }, [setHeroHeight]);

    const handleGoBottomClick = () => {
        const pos = goBottom.current.offsetTop;
        window.scrollTo({
            top: pos - 149,
            behavior: 'smooth',
        });
    };

    React.useEffect(() => {
        window.addEventListener('scroll', headerHidden);
        return () => {
            window.removeEventListener('scroll', headerHidden);
        };
    });

    const headerHidden = () => {
        scrollPosition >= heroHeight ? setHidden(false) : setHidden(true);
    };

    // ? MODAL FUNCTIONS
    const getProductModal = async (id) => {
        const { data } = await axiosInstance.get(`/products/?id=${id}`);
        setSingleProduct(data);
        setOpenModal(true);
    };
    const closeModal = () => {
        setSingleProduct('');
        setOpenModal(false);
    };
    // ? MODAL FUNCTIONS

    return (
        <div className="wrapper">
            <Header isHidden={hidden} />
            <main>
                <div
                    className={isIOS ? 'hero ios' : 'hero'}
                    style={{
                        background: `url(${hero}) 50% 50% / cover no-repeat`,
                    }}
                    ref={ref}>
                    <h1>LUSSO</h1>
                    <h2>Homeware & Gifts</h2>
                    <a href="tel:+37369321221">+373 69 321 221</a>
                    <a href="mailto:lussostore@email.com">lussostore@email.com</a>
                    <button className="go-bottom" onClick={handleGoBottomClick}>
                        <span className="icon-chevron__down"></span>
                    </button>
                </div>
                <div className="products go-button__section" ref={goBottom}>
                    <div className="products__container">
                        <p className="products__concept">
                            Наша основная концепция — совмещение уюта и autem impedit adipisci.
                            Magni corporis dolor consequuntur ipsam. Quis sit doloribus nihil
                            perspiciatis qui eaque molestias. Nesciunt excepturi et molestiae.
                            Voluptas aut deserunt ipsa ut repudiandae illum voluptas praesentium.
                        </p>
                        <div className="products__grid products-grid">
                            {displayProducts &&
                                displayProducts.map((item, i) => (
                                    <Product
                                        get={getProductModal}
                                        key={`${item.name}_${i}`}
                                        product={item}
                                    />
                                ))}
                        </div>
                        <Link to="/catalog" className="products__button button button__dark">
                            Смотреть весь каталог
                        </Link>
                    </div>
                </div>
                <div className="about">
                    <div className="about__body">
                        <div className="about-left">
                            <div className="about-left__body">
                                <h2>О проекте</h2>
                                <p>
                                    Omnis maiores amet molestiae. Qui dolor natus doloribus
                                    doloribus laboriosam ut. Delectus officiis dolores non totam
                                    expedita et nisi velit. Dignissimos cum iusto mollitia quia enim
                                    eum consequatur enim. Nam neque itaque laborum laboriosam amet.
                                    Distinctio sapiente similique saepe impedit cumque dolor non.
                                </p>
                                <p>
                                    Iure et soluta temporibus et quo. Eligendi consequatur
                                    temporibus saepe vel quia et sit. Et consequatur quasi magni.
                                    Iusto omnis necessitatibus incidunt aliquid aliquam enim
                                    exercitationem eum. Distinctio et et nihil ea sequi fuga.
                                </p>
                                <Link to="/about" className="button button__dark">
                                    Узнать больше
                                </Link>
                            </div>
                        </div>
                        <img src="assets/img/about-home.jpg" alt="" />
                    </div>
                </div>
                <div className="proud">
                    <div className="proud__container">
                        <h2>Мы гордимся нашими продуктами</h2>
                        <div className="proud__body">
                            {advantages &&
                                advantages.map((advantage) => (
                                    <Proud key={advantage.title} item={advantage} />
                                ))}
                        </div>
                    </div>
                </div>
                <div className="instagram">
                    <div className="instagram__container">
                        <h2>
                            Следите за нами в{' '}
                            <a
                                href="https://instagram.com/lusso.md?igshid=MDE2OWE1N2Q="
                                target="_blank"
                                rel="noreferrer">
                                instagram
                            </a>
                        </h2>
                        {/* <div className="instagram__body">
                            {instagramFeed.map((data, index) => (
                                <img key={`${data.post}_${index}`} src={data.post} alt="" />
                            ))}
                        </div> */}
                    </div>
                </div>
                <div className="contact">
                    <h2>Свяжитесь со мной</h2>
                    <img src={olga} alt="" />
                    <h4>Роговая Ольга</h4>
                    <p>
                        Телефон: <a href="tel:+373 69 321 221">+373 69 321 221</a>
                    </p>
                    <p>
                        E-mail: <a href="mailto:lussostore@email.com">lussostore@email.com</a>
                    </p>
                    <div className="socials">
                        <a
                            href="https://instagram.com/lusso.md?igshid=MDE2OWE1N2Q="
                            target="_blank"
                            rel="noreferrer">
                            <span className="icon-instagram"></span>
                        </a>
                        <a
                            href="https://m.facebook.com/LussoHomewareGifts/"
                            target="_blank"
                            rel="noreferrer">
                            <svg
                                width="30"
                                height="30"
                                viewBox="0 0 30 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0ZM16.5635 15.6589V23.8197H13.1869V15.6592H11.5V12.8469H13.1869V11.1585C13.1869 8.86425 14.1395 7.5 16.8457 7.5H19.0988V10.3126H17.6905C16.637 10.3126 16.5673 10.7056 16.5673 11.4391L16.5635 12.8466H19.1147L18.8162 15.6589H16.5635Z"
                                    fill="black"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {singleProduct && singleProduct.length > 0 && (
                    <Modal
                        product={singleProduct[0]}
                        openModal={openModal}
                        closeModal={closeModal}
                    />
                )}
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Home;
