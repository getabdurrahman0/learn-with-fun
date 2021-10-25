import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    useEffect( () =>{
        fetch('./teachers.JSON')
        .then(res => res.json())
        .then(data => setTeachers(data))
    },[])
    return (
        <div>
            <Header></Header>
            <div className='container'>
                <h4 className="text-center p-5">Here is all Gentleman are our honourable teacher. They take class every sunday and monday. And a lot of skillful teacher are always prepared for taking live class everyday. So, Don't late to enrolled this course.</h4>

                <div class="row row-cols-1 row-cols-md-2 g-4">
                {
                    teachers.map(teacher =>
                        <div className="col mt-5" >
                        <div className="card border-dark round">
                            <img src={teacher.img} class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h4>Name: {teacher.name}</h4>
                            <h5>University: {teacher.university}</h5>  
                            <h5>Subject:{teacher.subject}</h5>                      
                            
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
export default Teachers;
