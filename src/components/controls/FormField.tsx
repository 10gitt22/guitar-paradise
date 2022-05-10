import React from 'react'

type FormFieldProps = {
  type: React.HTMLInputTypeAttribute
  name: string
  label: string
  placeholder?: string
  error?: string
}

const FormField: React.FC<FormFieldProps> = ({
  type,
  name,
  label,
  placeholder, 
  error,
}) => {

  return (
    <div className="form-field" id={`${name}_field`} >
      <label htmlFor={`form_input_${name}`}>{label}:</label>
      <input type={type} name={name} id={`form_input__${name}`} className="form-field__input" placeholder={placeholder} required />
      <span className="form-field__error-msg">qqq</span>
    </div>
  )
}

export default FormField
