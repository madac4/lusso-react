import React from 'react';


const Client = ({client}) => {

    return (
        <div className="clients-card" > 
            <h5>{client.name}</h5>
            <span className="clients-card__instagram">{client.instagram}</span>
            <p>“{client.description}“</p>
            <div className="clients-card__images" key={client.images}>
                {client.images
                    .map(image => (<img key={image} src={image} alt="client-img" />))
                }
            </div>
        </div>
    );
}

export default Client;
