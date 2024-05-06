import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Box sx={{ width: '100%' }}>
            <LinearProgress />
        </Box>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate to={'/login'} replace></Navigate>
};

export default PrivateRoute;