import React, { useEffect } from 'react';

import $ from "jquery";



const Pass = (props) => {
    const handleShowPass = () => {
        const x = document.getElementById(props.id);
        $('.passEyeShow').toggle();
        $('.passEyeHide').toggle();
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    const handleFocus = (e) => {
        let classInputF = e.target.id + 'Input';
        let classValidFeedbackF = e.target.id + 'Feedback';
        $('.' + classInputF).css('border-color', '#ced4da');
        $('.' + classValidFeedbackF).html(' ');
    }
    const star = (props.star == 'ok') ? <i className="fa fa-star star" aria-hidden="true"></i> : '';
    const classInput = 'form-control inputForm ' + props.id + 'Input';
    const classValidFeedback = 'validFeedback' + ' ' + props.id + 'Feedback';

    return (
        <div className="form-group formGroupDiv pass">
            <label htmlFor={props.id} className='labelForm'>
                {/* css code label in form/main.scss */}
                {props.label}
                {star}
            </label>
            <input type="password" id="disable-pwd-mgr-1" className='passElementHide' defaultValue="stop-pwd-mgr-1" />
            <input type="password" id="disable-pwd-mgr-2" className='passElementHide'  defaultValue="stop-pwd-mgr-2" />
            <input type="password" id="disable-pwd-mgr-3" className='passElementHide'  defaultValue="stop-pwd-mgr-3" />
            
            <input type="password" className={classInput} id={props.id} onBlur={props.blur} onFocus={handleFocus} autoComplete='off'>

            </input>
            <svg onClick={handleShowPass} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye-fill passEyeShow" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                <path fillRule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
            </svg>
            <svg onClick={handleShowPass} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-eye-slash-fill passEyeHide" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z" />
                <path fillRule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z" />
            </svg>


            <div className={classValidFeedback}>
                {/* css code label in form/main.scss */}


            </div>
        </div>
    )


}
export default Pass;