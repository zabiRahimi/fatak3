import React, { useState, useEffect, useImperativeHandle, forwardRef } from 'react';
import axios from 'axios';
// import $ from 'jquery';
const Captcha = forwardRef((props, ref) => {
    const [captcha, setCaptcha] = useState(null)
    const [captchaKey, setCaptchaKey] = useState('')
    const refreshCaptcha =async() => {
       await axios.get('/web/refreshCaptcha')
            .then( response => {
                 setCaptcha(response.data.url.img);
                setCaptchaKey(response.data.url.key);
            })
    }

    useImperativeHandle(ref, () => ({
        refreshCaptcha
    }))

    useEffect(() => {
                 refreshCaptcha()
    }, []);
    
    // const handleFocus = () => {
    //             $('.captchaInput').css('border-color', '#ced4da');
    //             $('.captchaFeedback').html(' ');
    //         }
    return (

        // <div className="form-group formGroupDiv">
        //     <label htmlFor='captcha' className='labelForm'>
        //         {/* css code label in form/main.scss */}
        //              کد امنیتی
        //              <i className="fa fa-star star" aria-hidden="true"></i>
        //     </label>
        //     <div className='captcha'>
        //         <input type="text"  className='form-control inputForm captchaInput' id='captcha' onFocus={handleFocus} />
        //         <div className='captchaPic'>
        //             <img className='imgCaptcha' src={captcha} onClick={refreshCaptcha} />
        //             <button type='button' onClick={refreshCaptcha} className='btn btn-outline-secondary btnCaptcha'> <i className="fas fa-sync-alt"></i></button>
        //         </div>
        //     </div>
        //     {/* get key captcha and send */}
        //     <input id='captchaKey' type="hidden" value={captchaKey}/>
        //     <div className='validFeedback captchaFeedback'>
        //         {/* css code label in form/main.scss */}

        //     </div>
        // </div>
        <div>
            <div className="groupInput">
                <div className="inputForm " id='divCaptcha' data-lang='en'>
                    <div className='divLabel'>
                        <i className='far fa-check-circle true'></i><i className='fas fa-exclamation false'></i>
                        <label htmlFor="name">کد امنیتی</label>
                    </div>
                    <input type="text" onFocus={props.backStyle} onInput={props.ChangeStyle} onBlur={props.handleCheckValue} id='captcha' placeholder='کد امنیتی' autoComplete="off" />

                    {/* <input id='captchaKey' type="text" value={captchaKey} /> */}
                    <input id='captchaKey' type="hidden" value={captchaKey} />
                </div>
                <div className="errorInput errorCaptcha" id='errorCaptcha'></div>

            </div>
            <div className='captchaPic'>
                <img className='imgCaptcha' src={captcha} onClick={refreshCaptcha} />
                <button type='button' onClick={refreshCaptcha} className='btn btn-outline-secondary btnCaptcha'> <i className="fas fa-sync-alt"></i></button>
            </div>
        </div>

    )
});
export default Captcha;