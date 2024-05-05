import { useEffect } from "react";
import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";


const Service = () => {

    const [services, setServices] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="my-14">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-orange-600">Service</h2>
                <h3 className="text-4xl">Our Service Area</h3>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service =>
                        <div key={service._id}>
                            <div className="card h-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={service.img} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="p-10">
                                    <h2 className="card-title">{service.title}</h2>
                                    <div className="flex justify-between text-orange-600 w-full">
                                        <p>Price : {service.price}</p>
                                        <p><GoArrowRight></GoArrowRight></p>
                                    </div>
                                </div>
                                <div className="mx-auto w-full px-10 mb-5">
                                    <Link to={`/checkout/${service._id}`}>
                                        <button className="btn btn-accent w-full">Book Now</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Service;