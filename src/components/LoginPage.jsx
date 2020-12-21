import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { signUpUserRequest, loginUserRequest } from '../redux/action/actions';
import { useDispatch } from 'react-redux';


const LoginPage = () => {
    const [signUpSelected, setSignUpSelected] = useState(false);

    const dispatch = useDispatch();

    const { register, handleSubmit, errors, watch, reset } = useForm();

    const onSubmit = (data) => {
        if (signUpSelected) {
            dispatch(signUpUserRequest({
                userData: data
            }));

        }
        else {
            dispatch(loginUserRequest({
                userData: data
            }));
        }
    }

    function toggleSignUpSelected() {
        reset();
        setSignUpSelected(!signUpSelected);
    }

    return (
        <div className="login-container d-flex justify-content-center">
            <div className="login-box">
                <h3 className="text-muted"> Book Appointments within a minute </h3>

                <label className="text-info"> Email </label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="E-mail"
                    name="email"
                    ref={register({
                        required: "E-mail is Required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'invalid email address',
                        },
                    })}
                />
                {errors.email && <p className="text-danger error-msg">{errors.email.message}</p>}

                {signUpSelected && (
                    <>
                        <label className="text-info"> Username </label>
                        <input type="text"
                            className="form-control"
                            placeholder="Username"
                            name="username"
                            ref={register({
                                required: "Username is required"
                            })}
                        />
                        {errors.username && <p className="text-danger error-msg">{errors.username.message}</p>}
                    </>
                )
                }

                <label className="text-info"> Password </label>
                <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    ref={register({
                        minLength: {
                            value: signUpSelected ? 3 : 0,
                            message: 'Password should be atleast 3 characters long',
                        },
                        required: "Password is Required"
                    })}

                />
                {errors.password && <p className="text-danger error-msg">{errors.password.message}</p>}

                {signUpSelected && (
                    <>
                        <label className="text-info"> Confirm Password </label>
                        <input
                            className="form-control"
                            placeholder="Confirm Password"
                            type="password"
                            name="confirmPassword"
                            ref={register({
                                required: 'This is required',
                                validate: (value) =>
                                    value === watch('password') || 'Passwords did not match',
                            })}
                        />
                        {errors.confirmPassword && <p className="text-danger error-msg">{errors.confirmPassword.message}</p>}
                    </>
                )
                }
                {signUpSelected ?
                    <button className="btn btn-secondary mt-5 mr-2" onClick={handleSubmit(onSubmit)} type="submit"> Sign Up </button>
                    :
                    <button className="btn btn-secondary mt-5 mr-2" onClick={handleSubmit(onSubmit)} type="submit"> Login </button>
                }
                {!signUpSelected ?
                    <p className="pt-3">New User ? <a href="#0" className="text-primary" onClick={toggleSignUpSelected}> Sign Up</a></p>
                    :
                    <p className="pt-3">Already a user ? <a href="#0" className="text-primary" onClick={toggleSignUpSelected}>Login</a></p>
                }

            </div>
        </div>
    );
}

export default LoginPage;