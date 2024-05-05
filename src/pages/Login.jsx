import { Link } from "react-router-dom";
import img from "./../../public/assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";

const Login = () => {

    const { signIn } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="hero min-h-screen mb-14">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm border h-full">
                    <h1 className="text-2xl font-bold text-center">Login now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="flex gap-2 mb-5 justify-center">
                        <p>New to Card Doctor? </p>
                        <Link to={'/signup'}><p className="text-orange-500">Sign up</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;