import React from "react";
import './login.css'
import { useForm } from 'react-hook-form';
import AuthService from "../../services/authentication.service";

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log("on submit "+data);
    AuthService.login(data)
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} method="post">
      <label>Username : </label>
      <input type="text" {...register("username", { required: true })} />
      {/* {errors.email && <p>Email is required and must be valid</p>} */}
      <br />
      <br />
      <label>Password : </label>
      <input type="password" {...register("password", { required: true })} />
      {/* {errors.password && <p>Password is required</p>} */}
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;