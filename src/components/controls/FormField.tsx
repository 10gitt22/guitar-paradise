import React, { MutableRefObject, RefObject } from 'react'

type FormFieldProps = {
  type: React.HTMLInputTypeAttribute
  name: string
  label: string
  innerRef: React.MutableRefObject<HTMLInputElement | null>
  placeholder?: string
  error?: string
}

const FormField: React.FC<FormFieldProps> = ({
  type,
  name,
  label,
  innerRef,
  placeholder, 
  error,
}) => {

  return (
    <div className="form-field" id={`${name}_field`} >
      <label htmlFor={`form_input_${name}`}>{label}:</label>
      <input type={type} name={name} id={`form_input__${name}`} className="form-field__input" placeholder={placeholder} ref={innerRef} required />
      <span className="form-field__error-msg">qqq</span>
    </div>
  )
}

export default FormField
