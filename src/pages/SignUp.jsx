import { Link } from "react-router-dom";
import img from "./../../public/assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result=>{
            if(result.user){
                alert('Sign Up success!')
            }
        })
        .catch(error=>{
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
                    <h1 className="text-2xl font-bold text-center">Sign up now!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
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
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <div className="flex gap-2 mb-5 justify-center">
                        <p>Already have an Account?</p>
                        <Link to={'/login'}><p className="text-orange-500">Login</p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;