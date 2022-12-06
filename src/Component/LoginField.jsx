import React from 'react'
import { ErrorMessage, useField } from 'formik'

const LoginField = ({label,...props}) => {
    const[field,meta] = useField(props);

  return (
    <div className="mb-2">
    <label htmlFor={field.name} className="form-label">{label}</label>
    <input className={`${meta.error && meta.touched && 'is-invalid' }`} {...field} {...props}/>
    <ErrorMessage component="div" name={field.name} className="text-danger"/>
    </div>
  )
}

export default LoginField