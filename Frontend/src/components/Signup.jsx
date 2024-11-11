import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useState } from 'react';
import { useAuth } from "../context/Authprovider";
import { Link } from 'react-router-dom';
const Signup = () => {
    const [authUser,setAuthUser] = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formError, setFormError] = useState(""); 

    const onSubmit = async(data)=>{

        const password= data.password;
        const confirmPassword= data.confirmPassword;

        if(password!== confirmPassword){
            setFormError("Passwords do not match.");
            console.log("password do not match");
            return;
        }

        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password,
            confirmPassword : data.confirmPassword
        };

        
        await axios.post('http://localhost:8800/signup',userInfo)
         .then((response)=>{
            if(response.data){
                alert("Signup Successful");
             }
             localStorage.setItem("ChatApp",JSON.stringify(response.data));
             setAuthUser(response.data);
         }) 
        .catch ((error)=>{
        if(error.response){
         alert("Error", error.response.data.error);
        }
     });
    };

    return (
        <div className='text-white bg-black h-screen flex items-center justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} className='border border-white p-7 rounded-lg bg-black'>
                <div className='flex justify-center mb-4'>
                    <div className='text-2xl text-white'>Text</div>
                    <div className='text-green-400 text-2xl'>App</div>
                </div>
                <div className='text-center font-bold mb-6'>Sign Up</div>
                
                <div className='p-1'>
                    <label className="flex items-center gap-2">
                        <input
                            {...register("fullname", { required: "Full name is required" })}
                            type="text" className="text-white border bg-black rounded p-2 w-full" placeholder="Full Name" 
                        />
                    </label>
                    {errors.fullname && <span className='text-red-600'>{errors.fullname.message}</span>}
                </div>

                <div className='p-1'>
                    <label className="flex items-center gap-2">
                        <input
                            {...register("email", { required: "Email is required" })}
                            type="email" className="text-white border bg-black rounded p-2 w-full" placeholder="Email" 
                        />
                    </label>
                    {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
                </div>

                <div className='p-1'>
                    <label className="flex items-center gap-2">
                        <input
                            {...register("password", { required: "Password is required" })}
                            type="password" className="text-white border bg-black rounded p-2 w-full" placeholder="Password" 
                        />
                    </label>
                    {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
                </div>

                <div className='p-1'>
                    <label className="flex items-center gap-2">
                        <input
                            {...register("confirmPassword", { required: "Please confirm your password" })}
                            type="password" className="text-white border bg-black rounded p-2 w-full" placeholder="Confirm Password" 
                        />
                    </label>
                    {errors.confirmPassword && <span className='text-red-600'>{errors.confirmPassword.message}</span>}
                </div>

                {formError && <div className='text-red-600 text-center mt-4'>{formError}</div>}

                <div className='flex justify-between items-center p-1 mt-4'>
                    <p>Have an account? 
                     <Link to= "/login"><span 
                    className='underline text-blue-500 cursor-pointer'>Login</span></Link>
                        </p>
                    <div className='px-4'>
                        <input type="submit" className='bg-green-500 p-1 rounded-md text-black' value="Signup" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Signup;
