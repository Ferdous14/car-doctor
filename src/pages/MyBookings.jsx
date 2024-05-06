import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/providers/AuthProvider";


const MyBookings = () => {

    const { user, loading } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, [])

    const handleDelete = id => {
        const proceed = confirm('Are you sure?')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted Success!')
                    }
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                })
        }

    }

    const handleUpdate = id => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Update success!')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBooking = [updated, ...remaining];
                    setBookings(newBooking)
                }
            })
    }

    console.log(user, bookings);

    return (
        <div className="my-10">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking =>
                                <tr key={booking._id}>
                                    <th>
                                        <button onClick={() => handleDelete(booking._id)} className="btn btn-sm btn-circle">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    </th>
                                    <td>
                                        <div className="avatar">
                                            <div className="rounded w-24 h-24">
                                                {booking.img && <img src={booking?.img ? booking.img : null} alt="Avatar Tailwind CSS Component" />}
                                            </div>
                                        </div>
                                    </td>
                                    <td>{booking.title}</td>
                                    <td>{booking.date}</td>
                                    <td>{booking.price}</td>
                                    <th>
                                        {booking.status === 'confirm' ? <p className="font-bold text-orange-600">Confirmed</p> 
                                        : 
                                        <button onClick={() => handleUpdate(booking._id)} className="btn btn-ghost btn-xs">Update</button>}
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;