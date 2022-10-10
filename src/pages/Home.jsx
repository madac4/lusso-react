import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { hero } from '../assets/img/hero.jpg';
import olga from '../assets/img/olga.png';

function Home() {
    return (
        <div className="wrapper">
            <Header></Header>
            <main>
                {/* <div
                    className="hero"
                    style="background: url(@img/hero.jpg) 50% 50% / cover no-repeat">
                    <h1>LUSSO</h1>
                    <h2>Homeware & Gifts</h2>
                    <a href="te:+373 69 321 221">+373 69 321 221</a>
                    <a href="mailto:lussostore@email.com">lussostore@email.com</a>
                    <button className="go-bottom">
                        <span className="icon-chevron__down"></span>
                    </button>
                </div> */}
                <div className="products go-button__section">
                    <div className="products__container">
                        <p className="products__concept">
                            Наша основная концепция — совмещение уюта и autem impedit adipisci.
                            Magni corporis dolor consequuntur ipsam. Quis sit doloribus nihil
                            perspiciatis qui eaque molestias. Nesciunt excepturi et molestiae.
                            Voluptas aut deserunt ipsa ut repudiandae illum voluptas praesentium.
                        </p>
                        <div className="products__grid products-grid">
                            <article className="product">
                                <img src="@img/product1.jpg" alt="" />
                                <p>Repudiandae aperiam asperiores</p>
                                <h4>1200 MDL</h4>
                            </article>
                            <article className="product">
                                <img src="@img/product2.jpg" alt="" />
                                <p>Voluptatibus facilis voluptatibus</p>
                                <h4>16 000 MDL</h4>
                            </article>
                            <article className="product">
                                <img src="@img/product3.jpg" alt="" />
                                <p>Officiis aut quia</p>
                                <h4>800 MDL</h4>
                            </article>
                            <article className="product">
                                <img src="@img/product4.jpg" alt="" />
                                <p>Aliquid laborum praesentium</p>
                                <h4>4200 MDL</h4>
                            </article>
                            <article className="product">
                                <img src="@img/product2.jpg" alt="" />
                                <p>Voluptatibus facilis voluptatibus</p>
                                <h4>16 000 MDL</h4>
                            </article>
                            <article className="product">
                                <img src="@img/product1.jpg" alt="" />
                                <p>Repudiandae aperiam asperiores</p>
                                <h4>1200 MDL</h4>
                            </article>
                            <article className="product">
                                <img src="@img/product3.jpg" alt="" />
                                <p>Officiis aut quia</p>
                                <h4>800 MDL</h4>
                            </article>
                            <article className="product">
                                <img src="@img/product4.jpg" alt="" />
                                <p>Aliquid laborum praesentium</p>
                                <h4>16 000 MDL</h4>
                            </article>
                        </div>
                        <a href="catalog.html" className="products__button button button__dark">
                            Смотреть весь каталог
                        </a>
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
                                <a href="about.html" className="button button__dark">
                                    Узнать больше
                                </a>
                            </div>
                        </div>
                        <img src="@img/about-home.jpg" alt="" />
                    </div>
                </div>
                <div className="proud">
                    <div className="proud__container">
                        <h2>Мы гордимся нашими продуктами</h2>
                        <div className="proud__body">
                            <div className="proud__item">
                                <img src="@img/pride1.svg" alt="" />
                                <h4>Материалы</h4>
                                <p>
                                    Accusantium delectus ducimus nihil et sunt minima praesentium
                                    libero.
                                </p>
                            </div>
                            <div className="proud__item">
                                <img src="@img/pride2.svg" alt="" />
                                <h4>Дизайн</h4>
                                <p>Sed enim temporibus vitae saepe commodi officia eum sit.</p>
                            </div>
                            <div className="proud__item">
                                <img src="@img/pride3.svg" alt="" />
                                <h4>Качество</h4>
                                <p>
                                    Incidunt voluptates ipsa deserunt quia magnam quibusdam deserunt
                                    iure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="instagram">
                    <div className="instagram__container">
                        <h2>
                            Следите за нами в{' '}
                            <a
                                href="https://instagram.com/lusso.md?igshid=MDE2OWE1N2Q="
                                target="_blank">
                                instagram
                            </a>
                        </h2>
                        <div className="instagram__body">
                            <img src="@img/insta1.jpg" alt="insta" />
                            <img src="@img/insta2.jpg" alt="" />
                            <img src="@img/insta3.jpg" alt="" />
                            <img src="@img/insta4.jpg" alt="" />
                            <img src="@img/insta5.jpg" alt="" />
                        </div>
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
                            target="_blank">
                            <span className="icon-instagram"></span>
                        </a>
                        <a href="https://m.facebook.com/LussoHomewareGifts/" target="_blank">
                            <span className="icon-telegram"></span>
                        </a>
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Home;
