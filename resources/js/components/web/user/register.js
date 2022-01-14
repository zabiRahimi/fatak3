import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';

import useTitleForm from '../hooks/useTitleForm';
import Captcha from '../hooks/captcha';
import useMethodsFormUser from '../hooks/useMethodsFormUser';
import { isEmpty } from 'lodash';

function Register(props) {
    const navigate = useNavigate();
    const { state } = useLocation();
    const [element, setElement] = useState({
        userName: null,
        // mobile: null,
        pass: null,
    });
    const path = '/web/authUser/register';
    useEffect(() => {
        // با دستور زیر چک می‌کنیم که کاربر تنها از صفحه گت موبایل وارد شده باشد
        // With the following command, we check that the user has logged in only from getMobile
        if (isEmpty(state) || ('access' in state) == false || state.access != true) {
            navigate('/user/getMobile')
        }
        // axios.get(path).then(response=>{
        //     console.log(response);
        // })
        // changeCaptcha.current.refreshCaptcha();
    }, [])

    const { changeCaptcha, handleCheckValue, valTrue, valFalse, checkMobile, errorSubmit, backStyle, ChangeStyle } = useMethodsFormUser(path, element, setElement,false);
    const handleSubmit = (e) => {
        e.preventDefault();

        let data = { ...element }
        axios.post(path, data, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'), 'Content-Type': 'application/json; charset=utf-8' } })
            .then(response => {
                console.log(response);
                // navigate('/user/showVerifyMobile', { state: { 'user_id': response.data.user_id, 'code': response.data.code } });

                // Swal.fire({
                //     position: 'center',
                //     icon: 'success',
                //     title: 'ثبت نام با موفقیت انجام شد .',
                //     showConfirmButton: false,
                //     timer: 3000
                // })
            })
            .catch(error => {
                // let xss=error.response.data.errors;
                // for (var prop in xss) {
                //     console.log("Key:" + prop);
                //     continue;
                //     // alert("Value:" + jsonObject[prop]);
                //   }

                // console.log(Object.keys(xss)[0]);


                // console.log(error.response);


                // errorSubmit(e, error.response.status, error.response.data.errors, element, 'registerUser');
            })
    }
    return (
        <div className='formContainer'>
            <div className="formRight">
                {useTitleForm('ثبت نام')}
                <form className='form' id='registerUser' method='post' onSubmit={handleSubmit}>
                    <div className='errorAllContiner errorAll' id='errorAll'></div>
                    <div className="groupInput">
                        <div className="inputForm " id='divUserName' data-lang='en' >
                            <div className='divLabel'>
                                <i className='far fa-check-circle true'></i><i className='fas fa-exclamation false'></i>

                                <label htmlFor="userName">نام کاربری <i>(به لاتین)</i></label>

                            </div>
                            <input type="text" id='userName' onFocus={backStyle} onInput={ChangeStyle} onBlur={handleCheckValue} placeholder='نام کاربری' autoComplete="off" autoFocus />
                        </div>
                        <div className="errorInput"></div>
                    </div>
                    {/* <div className="groupInput">
                        <div className="inputForm " id='divMobile' data-lang='num'>
                            <div className='divLabel'>
                                <i className='far fa-check-circle true'></i><i className='fas fa-exclamation false'></i>
                                <label htmlFor="mobile">موبایل </label>
                            </div>
                            <input type="text" onFocus={backStyle} onInput={ChangeStyle} onBlur={handleCheckValue} id='mobile' placeholder='موبایل' autoComplete="off" />
                        </div>
                        <div className="errorInput"></div>
                    </div> */}
                    <div className="groupInput">
                        <div className="inputForm " id='divPass' data-lang='en_num'>
                            <div className='divLabel'>
                                <i className='far fa-check-circle true'></i><i className='fas fa-exclamation false'></i>
                                <label htmlFor="name">رمز عبور </label>
                            </div>
                            <input type="text" onFocus={backStyle} onInput={ChangeStyle} onBlur={handleCheckValue} id='pass' placeholder='رمز عبور' autoComplete="off" />
                        </div>
                        <div className="errorInput"></div>
                    </div>
                    {/* < Captcha ref={changeCaptcha} backStyle={backStyle} ChangeStyle={ChangeStyle} /> */}
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
export default Register;