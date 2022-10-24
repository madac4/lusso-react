import React from 'react';
import Slider from './Slider';

function Modal({ product, openModal, loading, closeModal }) {
    return (
        <div className={openModal ? 'product-modal open' : 'product-modal'}>
            {loading ? <h2>Loading . . . </h2> : <Slider product={product} />}

            <button
                type="button"
                onClick={closeModal}
                className="product-modal__close icon-close"></button>
        </div>
    );
}

export default Modal;
