import React, { useEffect, useState } from "react";
import Captcha from "../hooks/captcha";
import useTitleForm from "../hooks/useTitleForm";
import useMethodsFormUser from '../hooks/useMethodsFormUser';
import axios from "axios";
import Swal from "sweetalert2";
import {  useNavigate } from 'react-router';



export default function GetMobile(){
    const navigate=useNavigate();

    const path='/api/web/authUser/getMobile';
    const [element, setElement] = useState({
        mobile: null,
    });


    const {changeCaptcha,handleCheckValue,backStyle, ChangeStyle,errorSubmit} = useMethodsFormUser(path,element, setElement);
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { ...element, captcha: $('#captcha').val(), key: $('#captchaKey').val() }
        axios.post(path, data, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'), 'Content-Type': 'application/json; charset=utf-8' } })
            .then(response => {
                console.log(response.data.code);
                console.log(response.data.mobile);
                console.log(response.data.cookie);
                navigate('/user/verifyMobileInitial');
                // navigate('/user/verifyMobileInitial',{state:{'code':response.data.code}});
                
                
                // Swal.fire({
                //     position: 'center',
                //     icon: 'success',
                //     title: `کد تایید موبایل به شماره ${element.mobile} ارسال شد. کد را وارد کنید.`,
                //     showConfirmButton: false,
                //     timer: 6000
                // })
            })
            .catch(error => {
                console.log(error);
                console.log(error.response.data);
                
                const firstElementError = Object.keys(error.response.data.errors)[0];
                console.log(firstElementError);
                errorSubmit(e, error.response.status, error.response.data.errors, element);
                    
                
            })
    }
    return(
        <div className='formContainer'>
            
            <div className="formRight">
                {useTitleForm('ثبت موبایل')}
                <form className='form' id='getMobile' method='post' onSubmit={handleSubmit}>
                    <div className='errorAllContiner errorAll' id='errorAll'></div>
                    <div className="groupInput">
                        <div className="inputForm " id='divName' data-lang='num' >
                            <div className='divLabel'>
                                <i className='far fa-check-circle true'></i><i className='fas fa-exclamation false'></i>

                                <label htmlFor="name">موبایل</label>

                            </div>
                            <input type="text" id='mobile' onFocus={backStyle} onInput={ChangeStyle} onBlur={handleCheckValue} placeholder='موبایل' autoComplete="off" autoFocus />
                        </div>
                        <div className="errorInput"></div>
                    </div>

                    < Captcha ref={changeCaptcha} backStyle={backStyle} ChangeStyle={ChangeStyle} />
                    <input type="submit" className='btnForm' id="" value='ثبت' />
                    


                </form>
            </div>
            <div className="formLeft">
                {/* عکس قرار می گیرد */}
                image
            </div>
        </div>
    )
}

