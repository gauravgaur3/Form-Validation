import React from 'react';
import {useFormik} from "formik";
import { signUpSchema } from '.';

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


const LoginForm = () => {

  const {values,errors,handleBlur,handleChange,handleSubmit,touched} =  useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit:(values)=>{
            console.log(values);
        },
    });

  return (
      <div className="container p-4">
        <div className="row">
          <div className="col-12 col-sm-7 col-md-5 m-auto">
            <div className="card border-0 shadow">
              <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3 input-block">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className={`form-control ${errors.username && touched.username && 'border border-danger'}`} name="username" id="username" value={values.username} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.username && touched.username ? <div className="form-text text-danger">{errors.username}</div> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className={`form-control ${errors.email && touched.email && 'border border-danger'}`} name="email" id="email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.email && touched.email ? <div className="form-text text-danger">{errors.email}</div> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">Mobile</label>
                    <input type="text" className={`form-control ${errors.name && touched.mobile && 'border border-danger'}`} name="mobile" id="mobile" value={values.mobile} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.mobile && touched.mobile ? <div className="form-text text-danger">{errors.mobile}</div> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="dob" className="form-label">Date of Birth</label>
                    <input type="date" className={`form-control ${errors.dob && touched.dob && 'border border-danger'}`} name="dob" id="dob" value={values.dob} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.dob && touched.dob ? <div className="form-text text-danger">{errors.dob}</div> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="gender" className="form-label">Gender</label>
                    <div className="d-flex mt-2 mb-1">
                        <div className = "radio">
                            <label><input type = "radio" name="gender" id="male" value="male" onChange={handleChange} onBlur={handleBlur}/>Male</label>
                        </div>
                        <div className = "radio ms-2">
                            <label><input type = "radio" name="gender" id="female" value="female" onChange={handleChange} onBlur={handleBlur}/>Female</label>
                        </div>
                        </div>
                        {errors.gender && touched.gender ? <div className="form-text text-danger">{errors.gender}</div> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className={`form-control ${errors.password &&  touched.password && 'border border-danger'}`} name="password" id="password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.password && touched.password ? <div className="form-text text-danger">{errors.password}</div> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                    <input type="password" className={`form-control ${errors.confirm_password && touched.confirm_password && 'border border-danger'}`} name="confirm_password" id="confirm_password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.confirm_password && touched.confirm_password ? <div className="form-text text-danger">{errors.confirm_password}</div> : null}
                </div>
                <div className="mb-3 form-check">
                    <label className="form-check-label" htmlFor="check_box">Accept terms conditions</label>
                    <input type="checkbox" className="form-check-input" name="check_box" id="check_box" value={values.check_box} onChange={handleChange} onBlur={handleBlur}/>
                    {errors.check_box && touched.check_box ? <div className="form-text text-danger">{errors.check_box}</div> : null}
                </div>
                <button type="submit" className="btn btn-danger w-100">Register</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default LoginForm