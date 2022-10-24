import React from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Products from '../components/Products';

function Catalog() {
    const [filters, setFilters] = React.useState(false);
    const [categories, setCategories] = React.useState([]);
    const [activeCategory, setActiveCategory] = React.useState(0);
    const [activeSubCategory, setActiveSubCategory] = React.useState('');
    const location = useLocation();
    const cat = location.pathname.split('/')[2];

    const getCategories = async () => {
        const res = await axios.get(`https://6343d71c2dadea1175ae4698.mockapi.io/categories`);
        setCategories(res.data);
    };

    React.useEffect(() => {
        getCategories();
    }, [categories]);

    const toggleFilters = () => {
        setFilters(!filters);
    };

    const handleFilters = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value,
        });
        e.target.name === 'categories' && setActiveCategory(e.target.value);
        e.target.name === 'subcategory' && setActiveSubCategory(e.target.value);
    };

    // console.log(filters);
    // const handleSubCategories = (e) => {
    //     const name = e.target.name;
    //     setFilters({
    //         ...filters,
    //         subcategory: name,
    //     });
    // };

    // const setCategory = (index) => {
    //     setActiveCategory(index);
    // };

    // const setSubCategory = (index) => {
    //     setActiveSubCategory(index);
    // };

    return (
        <div className="wrapper">
            <Header></Header>
            <main>
                <svg className="checkbox-symbol">
                    <symbol id="check" viewBox="0 0 12 10">
                        <polyline
                            points="1.5 6 4.5 9 10.5 1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"></polyline>
                    </symbol>
                </svg>
                <div className="page-introduction">
                    <img src="assets/img/catalog1.jpg" alt="" />
                    <img src="assets/img/catalog2.jpg" alt="" />
                </div>

                <div className="catalog">
                    <aside
                        className={
                            filters
                                ? 'catalog__sidebar catalog-sidebar open'
                                : 'catalog__sidebar catalog-sidebar'
                        }>
                        <div className="catalog-sidebar__filters filters-simple">
                            <h6>Категории</h6>
                            {categories.length > 0 &&
                                categories.map((item, i) => (
                                    <button
                                        key={`${item}_${i}`}
                                        name="categories"
                                        value={item.name}
                                        onClick={handleFilters}
                                        className={activeCategory === item.name ? 'current' : ''}>
                                        {item.name}
                                    </button>
                                ))}
                        </div>
                        {/* {categories.length > 0 &&
                            categories[activeCategory].subcategories.length > 0 && (
                                <div className="catalog-sidebar__filters filters-simple">
                                    <h6>Субкатегории</h6>
                                    {categories[activeCategory].subcategories.map((item, i) => (
                                        <button
                                            key={`${item.name}_${i}`}
                                            onClick={() => setSubCategory(i)}
                                            className={activeSubCategory === i ? 'current' : ''}>
                                            {item.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        {categories.length > 0 && categories[activeCategory].brands.length > 0 && (
                            <div className="catalog-sidebar__filters filters-checkbox">
                                <h6>Бренд</h6>

                                {categories[activeCategory].brands.map((item, i) => (
                                    <label key={`${item}_${i}`} className="checkbox-container">
                                        <input className="checkbox-input" type="checkbox" />
                                        <span className="checkbox">
                                            <span>
                                                <svg width="12px" height="10px">
                                                    <use xlinkHref="#check"></use>
                                                </svg>
                                            </span>
                                            <span>{item}</span>
                                        </span>
                                    </label>
                                ))}
                            </div>
                        )}
                        {categories.length > 0 &&
                            categories[activeCategory].subcategories.length > 0 &&
                            typeof activeSubCategory == 'number' &&
                            categories[activeCategory].subcategories[activeSubCategory].brands &&
                            categories[activeCategory].subcategories[activeSubCategory].brands
                                .length > 0 && (
                                <div className="catalog-sidebar__filters filters-checkbox">
                                    <h6>Бренд</h6>

                                    {categories[activeCategory].subcategories[
                                        activeSubCategory
                                    ].brands.map((item, i) => (
                                        <label key={`${item}_${i}`} className="checkbox-container">
                                            <input className="checkbox-input" type="checkbox" />
                                            <span className="checkbox">
                                                <span>
                                                    <svg width="12px" height="10px">
                                                        <use xlinkHref="#check"></use>
                                                    </svg>
                                                </span>
                                                <span>{item}</span>
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            )} */}
                        <button
                            className="icon-close close-filter"
                            onClick={toggleFilters}></button>
                    </aside>
                    <div className="catalog__container">
                        <button className="button button__dark open-filter" onClick={toggleFilters}>
                            Фильтры
                        </button>

                        <Products category={cat} filters={filters} />
                    </div>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Catalog;