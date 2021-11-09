import React from 'react';

import $ from "jquery";



const Textarea = (props) => {
   const handleFocus=(e)=>{
        let classInputF=e.target.id +'Input';
        let classValidFeedbackF=e.target.id +'Feedback';
        $('.'+classInputF).css('border-color' , '#ced4da');
        $('.'+classValidFeedbackF).html(' ');
    }
    const star = (props.star == 'ok') ? <i className="fa fa-star star" aria-hidden="true"></i> : '';
    const classInput='form-control inputForm '+props.id+'Input';
    const classValidFeedback = 'validFeedback' + ' ' + props.id + 'Feedback';

    return (
        <div className="form-group formGroupDiv">
            <label htmlFor={props.id} className='labelForm'>
                {/* css code label in form/main.scss */}
                {props.label}
                {star}
            </label>
            
                <textarea type="text" className={classInput} id={props.id}  onBlur={props.blur} onFocus={handleFocus} defaultValue={props.value} >
                    
                </textarea>
                
           
            <div className={classValidFeedback}>
                {/* css code label in form/main.scss */}
            </div>
        </div>
    )


}
export default Textarea;