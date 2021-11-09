import React, { useState, useEffect } from 'react';
import useTitleForm from '../hooks/useTitleForm';
import Captcha from '../hooks/captcha';
import Swal from 'sweetalert2';
import $ from "jquery";
import useMethodsFormUser from '../hooks/useMethodsFormUser';
import {  useLocation } from 'react-router';
import { Link } from "react-router-dom";

export default function VerifyMobile() {
    
    const path='/api/web/authUser/verifyMobile';
    const { state } = useLocation();
    const [element, setElement] = useState({
        // code: null,
        // user_id:state.user_id,
    });
    const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(1)



  function updateTime() {
    if (minutes == 0 && seconds == 0) {
    }
    else {
      if (seconds == 0) {
        setMinutes(minutes => minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds => seconds - 1);
      }
    }
  }
  useEffect(() => {
    const token = setTimeout(updateTime, 1000);
    showLink();
    return function cleanUp() {
      clearTimeout(token);
    }
  })
    const {changeCaptcha,handleCheckValue,backStyle, ChangeStyle,errorSubmit} = useMethodsFormUser(path,element, setElement);
    // useEffect(() => {
    //     // console.log(state);

    //     // changeCaptcha.current.refreshCaptcha();
    // }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { ...element, captcha: $('#captcha').val(), key: $('#captchaKey').val() }
        axios.post(path, data, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'), 'Content-Type': 'application/json; charset=utf-8' } })
            .then(response => {
                // console.log('ok zabi');
                // navigate('/user/verifyMobile',{state:{'user_id':response.data.user_id,'code':response.data.code}});
                
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'ثبت نام با موفقیت انجام شد .',
                    showConfirmButton: false,
                    timer: 3000
                })
            })
            .catch(error => {
                
                const firstElementError = Object.keys(error.response.data.errors)[0];
                console.log(firstElementError);
                if (firstElementError!='codeVerify') {
                errorSubmit(e, error.response.status, error.response.data.errors, element, 'verifyMobile');
                    
                }else{
                    errorCodeVerify(e, error.response.status,error.response.data.errors,element, 'verifyMobile')
                }
            })
    }
    const errorCodeVerify=(e,errorStatus,errorData,element,idForm) =>{
        const offset = $(".errorAll").offset();
        Swal.fire({
            position: 'center',
            icon: 'warning',
            text: errorData.codeVerify,
            showConfirmButton: false,
            timer: 3000,
            didClose: () => $(document).scrollTop(offset.top - 80),
        });
        backStyle(e, errorStatus, errorData, element);
            
            $(document).scrollTop(offset.top - 80);
            $(`#${idForm}`).trigger('reset');
            // for (let i in element) {
            //     setElement(perv => ({ ...perv, [i]: null }));
            // }
            
            $('.errorAll').html(
                `<div class='alert alert-danger errorAll' >${errorData.codeVerify}</div> `
            );
    }

    const updateCodeMobile=()=>{
        let data = { 'user_id':element.user_id }
        axios.post('/api/web/authUser/updateVerifyCokeMobile', data, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'), 'Content-Type': 'application/json; charset=utf-8' } })
            .then(response => {
                console.log(response);
                // navigate('/user/verifyMobile',{state:{'user_id':response.data.user_id,'code':response.data.code}});
                $('#codeV').html(
                   response.data.code
                );
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'کد با موفقیت ارسال شد .',
                    showConfirmButton: false,
                    timer: 3000,
                    didClose:()=>{setMinutes(1)}
                })
            })
            .catch(error => {
                
                console.log(error.response.data);
                
            })
    }
    const showLink=()=>{
        if(minutes == 0 && seconds == 0){
            $('.linkUpdateCode').css('display', 'flex');
            $('.textUpdateCode').css('display', 'none');
        }else{
            $('.linkUpdateCode').css('display', 'none');
            $('.textUpdateCode').css('display', 'flex');

        }
    }

    return (
        <div className='formContainer'>
            <div className="formRight">
                {useTitleForm('تایید موبایل')}
                {/* <div id='codeV'>{state.code}</div> */}
                <form className='form' id='verifyMobile' method='post' onSubmit={handleSubmit}>
                    <div className='errorAllContiner errorAll' id='errorAll'></div>
                    <div className="groupInput">
                        <div className="inputForm " id='divName' data-lang='num' >
                            <div className='divLabel'>
                                <i className='far fa-check-circle true'></i><i className='fas fa-exclamation false'></i>

                                <label htmlFor="name">تایید موبایل</label>

                            </div>
                            {/* onFocus={backStyle} onInput={ChangeStyle} */}
                            <input type="text" id='code' onFocus={backStyle} onBlur={handleCheckValue} placeholder='کد تایید موبایل' autoComplete="off" autoFocus />
                        </div>
                        <div className="errorInput"></div>
                    </div>

                    < Captcha ref={changeCaptcha} backStyle={backStyle} ChangeStyle={ChangeStyle} />
                    <input type="submit" className='btnForm' id="" value='ثبت' />
                    <div className="updateCode">
                       <a className='linkUpdateCode' onClick={updateCodeMobile}>ارسال مجدد کد</a>
                       <div className="textUpdateCode">ارسال مجدد کد پس از {minutes}:{seconds}</div>
                    </div>


                </form>
            </div>
            <div className="formLeft">
                {/* عکس قرار می گیرد */}
                image
            </div>
        </div>
    )

}


