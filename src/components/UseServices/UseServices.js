import React, {useState, useEffect} from 'react';

const UseServices = () => {
    const [services, setServices] = useState([])
    useEffect( () => {
        fetch('./services.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return[services, setServices]
       
};

export default UseServices;