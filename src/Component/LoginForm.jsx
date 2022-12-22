import React from 'react';
import {Formik,Form} from "formik";
import { signUpSchema } from '.';
import LoginField from './LoginField';

const initialValues = {
    username: "",
    email: "",
    mobile: "",
    dob:"",
    gender: "",
    password: "",
    confirm_password: "",
    check_box: ""
};

const gender = ['Male','Female'];

const LoginForm = () => {
    return (
        <Formik
        initialValues={initialValues}
        validationSchema= {signUpSchema}
        onSubmit={values=>{
            console.log(values)
        }}>
        <div className="row">
          <div className="col-md-4 m-auto">
            <div className="card border-0 shadow">
              <div className="card-body">
              <Form>
                <LoginField label="Username" name="username" type="text" className="form-control"/>
                <LoginField label="Email" name="email" type="email" className="form-control"/>
                <LoginField label="Mobile" name="mobile" type="text" className="form-control"/>
                <LoginField label="Dob" name="dob" type="date" className="form-control"/>
                <div className='d-flex row'>
                <label htmlFor="gender" className="form-label">Gender</label>
                {gender.map((item,i)=>
                <LoginField label={item} key={i} name="gender" type="radio" value={item} className="form-check-input"/>
                )}
                </div>
                <LoginField label="Password" name="password" type="password" className="form-control"/>
                <LoginField label="Confirm Password" name="confirm_password" type="password" className="form-control"/>
                <LoginField label="Accept terms conditions" name="check_box" type="checkbox" className="form-check-input"/>
                <button type="submit" className="btn btn-danger w-100">Register</button>
               </Form>
              </div>
            </div>
          </div>
        </div>
        </Formik>
  )
}

export default LoginForm