import React from 'react'

const InputField = (props) => (
    <div>
        <label htmlFor={props.name}>{props.name}</label>
        {
            props.type === "textarea"
            ? <textarea type={props.type} name={props.name} onChange={props.onChange} />
            : <input  type={props.type} name={props.name} onChange={props.onChange} />
        }
    </div>
);

export default InputField;