import React from 'react';
import $ from "jquery";
const Checkbox = (props) => {
    const handleRadio =()=>{
        $('.'+ props.classFeedback).html('');
    }
    const radio={}
    return (
        <div className="form-check form-check-inline" style={radio}>
            <label className="form-check-label" htmlFor={props.id}>{props.label}</label>
            <input className="form-check-input" type="Checkbox"  id={props.id} value={props.value} onClick={handleRadio} />

        </div>
    )
}
export default Checkbox;