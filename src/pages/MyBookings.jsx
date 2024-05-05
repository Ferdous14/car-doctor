import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/providers/AuthProvider";


const MyBookings = () => {

    const {user, loading} = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/bookings?${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }, [])

    if(loading){
        return <p>coming</p>
    }

    return (
        <div>

        </div>
    );
};

export default MyBookings;