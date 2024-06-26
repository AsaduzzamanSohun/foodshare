
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {

    ScrollRestoration('/');
    useEffect(() => {
        document.title = 'FoodSphere | Register'
    }, []);

    const navigate = useNavigate();
    const location = useLocation();

    const { user, createUser, setUser, updateUserProfile } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(true);

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])
    const from = location.state || '/'

    const handleSignUp = e => {

        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        e.target.reset();

        const user = { name, email, photo, password };
        console.log(user);

        if (password.length < 6) {
            toast.error("Password at least 6 characters.");
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error("Password must have an uppercase characters.");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error("Password must have an lower characters.");
            return;
        }
        else if (!/[0-9]/.test(password)) {
            toast.error("Password must have at least a number.");
            return;
        }

        createUser(email, password)
            .then(res => {
                const user = res.user;

                updateUserProfile(name, photo)
                    .then(() => {
                        setUser({ ...user, photoURL: photo, displayName: name })
                    })

                toast.success('User Create Successfully');
                navigate(from, { replace: true });

            })
            .catch(error => {
                const err = error.message;
                toast.error(err);
            })

    }


    return (
        <div className={` bg-no-repeat bg-cover `}>
            <div className="max-w-[1536px] mx-auto min-h-[calc(100vh-112px)] flex justify-center items-center">
                <div className="font-rubik bg-green-300 bg-opacity-40 p-10 lg:p-20">

                    <form onSubmit={handleSignUp}>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                            <div className='flex'>
                                <img src='https://i.ibb.co/5vQ4LNM/sign-up.png' alt="" />
                            </div>


                            <div className="max-w-full max-h-full  flex flex-col items-center justify-center">
                                <h1
                                    className="text-emerald-800 font-semibold text-center text-2xl my-4">
                                    Registration Form
                                </h1>


                                <div className="w-full">
                                    <div>
                                        <input
                                            className=" font-medium border-b-2 border-emerald-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-emerald-300 focus:border-emerald-700 w-full"
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            required />
                                    </div>
                                    <div>
                                        <input
                                            className=" font-medium border-b-2 border-emerald-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-emerald-300 focus:border-emerald-700 w-full"
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            required />
                                    </div>
                                    <div>
                                        <input
                                            className=" font-medium border-b-2 border-emerald-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-emerald-300 focus:border-emerald-700 w-full"
                                            type="text"
                                            name="photo"
                                            placeholder="photoURL"
                                            required />
                                    </div>
                                    <div className="relative">
                                        <input
                                            className=" font-medium border-b-2 border-emerald-300 py-3 px-4 my-3 focus:outline-none focus:border-b-2 placeholder-emerald-300 focus:border-emerald-700 w-full"
                                            type={showPassword ? 'password' : 'text'}
                                            name="password"
                                            placeholder="Password"
                                            required />

                                        <div
                                            onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-7">
                                            {
                                                showPassword ? <FaEye className="text-[#2ed9ff]"></FaEye> : <FaEyeSlash className="text-[#28d8ff]"></FaEyeSlash>
                                            }
                                        </div>

                                    </div>

                                    <div>
                                        <input
                                            className="w-full bg-emerald-700 font-semibold text-emerald-200 py-3 mt-3 border-2 border-emerald-700 hover:bg-transparent duration-500 hover:border-2 hover:text-emerald-700 hover:border-emerald-700 cursor-pointer"
                                            type="submit"
                                            value='Sign up' />
                                    </div>

                                    <div className="text-center text-sm mt-4  ">
                                        <p>Already have an account? <Link className="font-bold text-rose-500" to="/login">Login</Link> now!
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;