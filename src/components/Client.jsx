import axios from 'axios';
import React from 'react';

const Client = () => {
    const src = 'https://6343d71c2dadea1175ae4698.mockapi.io/clients';
    const [clients, setClients] = React.useState([]);
    React.useEffect(() => {
        const getClients = async () => {
            try {
                const res = await axios.get(src);
                setClients(res.data);
                console.log(clients);
            } catch (error) {
                console.log(error);
            }
        };
        getClients();
    }, [clients]);
    return (
        <div className="clients">
            <div className="clients__body">
                <div className="clients-card">
                    <h5>Vlada Gurduza</h5>
                    <span className="clients-card__instagram">@example.instagram</span>
                    <p>
                        “ Consequatur laborum nulla blanditiis earum fuga eum autem quae at. Quaerat
                        esse molestiae eligendi et officiis fugit accusantium dolorem. Autem rem
                        quas delectus ab aut. Quos placeat esse vel sed veritatis sit. Perferendis
                        necessitatibus libero. Vel autem voluptates in ut sunt molestiae excepturi
                        est minima. “
                    </p>
                    <div className="clients-card__images">
                        <img src="assets/img/client1.jpg" alt="client-img" />
                        <img src="assets/img/client2.jpg" alt="client-img" />
                        <img src="assets/img/client3.jpg" alt="client-img" />
                        <img src="assets/img/client4.jpg" alt="client-img" />
                        <img src="assets/img/client5.jpg" alt="client-img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;
