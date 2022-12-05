import React from 'react'

function Founder() {
  return (
    <div className="founder">
        <img className="founder-image" src="assets/img/olga-big.jpg" alt="CEO" />
        <div className="founder-info">
            <p className="founder-info__quote">
                “ Debitis nihil illum dolor repellendus explicabo doloribus voluptatem. Provident vel nobis eligendi. Consequatur qui dolores nulla vel aut occaecati eos corrupti est. Aut rem eveniet. Ut corporis exercitationem pariatur sapiente. “
            </p>
            <div className="founder-info__details flex-gap-3">
                <div className="info-details__block">
                    <h6>Olga Rogovaya</h6>
                    <p>Creator & Founder</p>
                </div>
                <img src="assets/img/OlgaRogovaya.svg" alt="" />
            </div>
        </div>
    </div>
  );
}

export default Founder