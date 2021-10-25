// import React, { useEffect, useState } from 'react';
import './Home.css';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';

import Header from '../Header/Header';
import UseServices from '../UseServices/UseServices';



const Home = () => {
        const [subTopics, setSubTopics] = useState([]);
        useEffect( () => {
            fetch('./subTopic.JSON')
            .then(res => res.json())
            .then(data => setSubTopics(data))
        },[])

// useServices
const [services, setServices] = UseServices();
        
    

    return (
        <div>
          {/* header Part */}
          <div className='bg-container'>
              
              <Header></Header>
              <div className='text-center mt-5 quote'>
               
              <h2 className="me-5">" Education is what remains </h2>
              <h2 className="ms-5"> after one has forgotten</h2>
              <h2 className="me-5">what one has learned in school."</h2>
              <h1 className='quoter'> – Albert Einstein</h1>
              </div>

          </div>
          

          {/* subject topics start */}
          <h2 className='container-fluid mt-4 mb-4 p-2' id="topic">Science Topics</h2>
        <div className="container">
        <div class="row row-cols-1 row-cols-md-2 g-4  ">
                {
                subTopics.map(subTopic =>                             
                    <div className="col" >
                        <div className="card border-dark rounded h-100">
                            <img src={subTopic.img} class="card-img-top " alt="..."/>
                            <div class="card-body">                        
                            <p>{subTopic.explanation}</p>
                            </div>
                        </div>
                    </div>           
                )
                
                }               
            </div>
        </div>
            
           {/* subject topics end */}
            
           {/* total 4 Services start  */}
           <h2 className='container-fluid mt-4 mb-4 p-2' id="topic"> Our Services </h2>

                <div className="container">
                <div class="row row-cols-1 row-cols-md-2 g-4  ">
                {
                    services.map(service =>
                        <div className="col" >
                            <div className="card border-dark rounded h-100">
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
                </div>
           {/* t0tal 4 services end */}
        </div>
    );
    
};
<Footer></Footer>

export default Home;