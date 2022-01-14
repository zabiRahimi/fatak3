import React, { useEffect, useState } from "react";
import Captcha from "../hooks/captcha";
import useTitleForm from "../hooks/useTitleForm";
import useMethodsFormUser from '../hooks/useMethodsFormUser';
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from 'react-router';
import { isEmpty } from "lodash";
// import { isEmpty, set } from "lodash";



export default function GetMobile (props) {
    const navigate = useNavigate();
    const { state } = useLocation();
    const path = '/web/authUser/getMobile';
    const [element, setElement] = useState({
        mobile: '',
    });
// async function zabi(){
//     if(!isEmpty(state)){
//         await setElement({ ['mobile']: state.mobile })
//         }
// }
    useEffect(() => {
        if(!isEmpty(state)){
            setElement({ ['mobile']: state.mobile });
            }
    }, []);

    const { changeCaptcha, handleCheckValue, backStyle, ChangeStyle, setValue, errorSubmit } = useMethodsFormUser(path, element, setElement,true);
    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { ...element, captcha: $('#captcha').val(), key: $('#captchaKey').val() }
        axios.post(path, data, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'), 'Content-Type': 'application/json; charset=utf-8' } })
            .then(response => {
                // نکته ارسال کد بصورت موقت و فقط برای چک کردن کار کردن برنامه هست
                //حتما باید این کد اصلاخ شود چون بسیار خطرناک
                // استفاده از کلید چک برای این است که چک کنیم کاربر تنها از طریق دستور زیر به صفحه مورد نظر انتقال داده شده است
                navigate('/user/verifyMobileInitial',{state:{'access':true,'mobile':element.mobile , 'code':response.data.code}});
            })
            .catch(error => {
                const firstElementError = Object.keys(error.response.data.errors)[0];
                errorSubmit(e, error.response.status, error.response.data.errors, element);
            })
    }
    return (
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
                            {/* value={element.mobile} */}
                            <input type="text" id='mobile' value={element.mobile}  onFocus={backStyle} onInput={ChangeStyle, setValue} onBlur={handleCheckValue} placeholder='موبایل' autoComplete="off" autoFocus />
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

