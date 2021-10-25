import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import UseServices from '../UseServices/UseServices';

const Services = () => {
    const [moreServices, setMoreServices] = useState([]);
    useEffect( () => {
        fetch('./moreServices.JSON')
        .then(res => res.json())
        .then(data => setMoreServices(data))
    },[])

    const [services, setServices] = UseServices();
    return (
        <div>
            <Header></Header>
            <div className="container">
            <div class="row row-cols-1 row-cols-md-2 g-4 ">
                {
                    services.map(service =>
                        <div className="col mt-5" >
                            <div className="card border-dark round">
                                <img src={service.img} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                <h4>Course Name: {service.title}</h4>
                                <h5>Course Fee: {service.price}$</h5>                        
                                <p>{service.details}</p>
                                </div>
                            </div>
                        </div>
                        )
                }
           </div>
           
           <div class="row row-cols-1 row-cols-md-2 g-4">
                {
                 moreServices.map(moreService =>
                <div className="col mt-5" >
                    <div className="card border-dark round">
                        <img src={moreService.img} class="card-img-top" alt="..."/>
                        <div class="card-body">
                        <h4>Course Name: {moreService.title}</h4>
                        <h5>Course Fee: {moreService.price}$</h5>                        
                        <p>{moreService.details}</p>
                        </div>
                    </div>
                </div>
                    )
                }
            </div>
            </div>

        </div>
    );
};

export default Services;