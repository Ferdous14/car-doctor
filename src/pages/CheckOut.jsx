import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../components/providers/AuthProvider";


const CheckOut = () => {

    const service = useLoaderData();
    const { user, loading } = useContext(AuthContext);
    const { price, title, _id, img } = service;

    if (loading) {
        return <p>Coming</p>
    }

    const handleBooking = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;

        const order = {
            customerName : name, email, date, price, serviceId : _id, img, title
        }
        
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {'content-type' : 'application/json'},
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('Booking successful')
            }
        })
    }



    return (
        <div className="card-body">
            <h2 className="text-4xl text-center font-semibold mb-5">Service Name : {title} </h2>
            <form onSubmit={handleBooking} className="border p-3">
                <div className="grid grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" defaultValue={user.name} name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={user.email} name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={'$ ' + price} name="price" placeholder="price" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Book" />
            </div>
            </form>
        </div>
    );
};

export default CheckOut;