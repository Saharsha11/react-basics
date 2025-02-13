"use client";
import React, { useState } from 'react';
import { useFormik } from "formik";
import { object, string} from 'yup';

const schema = object({
    email: string().required("please enter the email").email("please enter the valid email")

})
const Form = () => {
    // const [fullname, setFullname] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConmfirmPassword] = useState("");
    // const [address, setAddress] = useState("");
    // const [country, setCountry] = useState("");
    // const [state, setStates] = useState("");
    // const [showValue, setShowValue] = useState("");
    // const [showPassword, setShowPassword] = useState(false);

    // const handlesubmit = (event) => {
    //     event.preventDefault();

    //         console.log(fullName, email, password, confirmPassword, country, state, street);
    //         if (password === confirmPassword) {
    //             setShow(true);
    //         } else {
    //             alert("Password don't match!!");
    //             setShow(false);
    //         }

    //     }

    const [showValue, setShowValue] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({

        initialValues :{
            name: "Saharsha",
            email:"",
            password:"",
            confirmPassword: "",
        },

        validationSchema: schema,
        onSubmit: (value) =>{
            if (value.name.length < 7){
                alert("Name must be of 7 character")
            }
            if (value.password === value.confirmPassword){
                setShowValue(true);
            }else{
                alert("password do not match");
                setShowValue(false);
            }
        }
    })
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }


    return (
        <div className='grid grid-cols-2'>
            <div>
                <h2>Registration Form</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input type='text' name="name" id='name' className='border border-green-400' onChange= {formik.handleChange} />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' name="email" id='email' className='border border-green-400' onChange= {formik.handleChange} />
                    </div>
                    <span className='text-red-600 text-sm'>{formik.errors.email}</span>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' name="password" id='password' className='border border-green-400' onChange= {formik.handleChange }/>
                    </div>
                    <div>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input type={showPassword ? "text" : "password"} name="confirmPassword" id='confirmaPssword' className='border border-green-400' onChange = {formik.handleChange} />
                        <button type="button" className="bg-black text-white px-1 py-1 rounded-sm" onClick={togglePasswordVisibility}>{showPassword ? "Hide" : "Show"}</button>

                    </div>
                    <div>
                        <div>Address</div>
                        <label htmlFor='country'>Country</label>
                        <input type='text' name="country" id='country' placeholder='country' className='border border-green-400' onChange= {formik.handleChange } />
                        <label htmlFor='address'>State</label>
                        <input type='text' name="state" id='state' placeholder="State" className='border border-green-400' onChange= {formik.handleChange} />
                        <label htmlFor='address'>Addresss</label>
                        <input type='text' name="address" id='address' placeholder='Address' className='border border-green-400' onChange= {formik.handleChange } />
                    </div>
                    <div>
                        <button type='submit' className='bg-blue-400 px-3 py-2'>Submit</button>
                    </div>
                </form>
            </div>
            <div>
                <h2>Form value</h2>
                {showValue && (
                    <div>
                        <p>Name = {formik.values.name}</p>
                        <p>Email = {formik.values.email}</p>
                        <p>Password = {formik.values.password}</p>
                        <p>Confirm Password = {formik.values.confirmPassword}</p>
                        <p>Country = {formik.values.country}</p>
                        <p>State = {formik.values.state}</p>
                        <p>Address = {formik.values.address}</p>
                    </div>
                )
                }
            </div>
        </div>
    );
}
export default Form;
