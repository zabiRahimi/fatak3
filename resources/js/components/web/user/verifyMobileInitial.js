import React, { useState, useEffect } from 'react';
import useTitleForm from '../hooks/useTitleForm';
import Captcha from '../hooks/captcha';
import Swal from 'sweetalert2';
import $ from "jquery";
import useMethodsFormUser from '../hooks/useMethodsFormUser';
import { useLocation, useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import useInputNumberCode from '../hooks/useInputNumberCode';
import { isEmpty, isSet } from 'lodash';
// import { isEmpty } from 'lodash';
// از این متد برای احراز موبایل کاربر در ثبت اولیه استفاده می شود
export default function VerifyMobileInitial(props) {
    
    const navigate=useNavigate();
    const path = '/web/authUser/verifyMobileInitial';
    const { state } = useLocation();
    const [codeInput, setCodeInput] = useState(null);
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(2)
    const [mobile, setMobile] = useState('');
    const [code, setCode] = useState('');//این کد فقط برای تست برنامه و موقت است



    function updateTime() {
        if (minutes == 0 && seconds == 0) {}
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
    // با دستور زیر چک می‌کنیم که کاربر تنها از صفحه گت موبایل وارد شده باشد
    // With the following command, we check that the user has logged in only from getMobile
        if(isEmpty(state) || ('access' in state) == false || state.access!=true  ){
            navigate('/user/getMobile')
        }
        setMobile(state.mobile);
        setCode(state.code);//موقت
        const token = setTimeout(updateTime, 1000);
        showLink();
        return function cleanUp() {
            clearTimeout(token);
        }
    })
    // const {changeCaptcha,handleCheckValue,backStyle, ChangeStyle,errorSubmit} = useMethodsFormUser(path,element, setElement);
    // useEffect(() => {
    //     // console.log(state);

    //     // changeCaptcha.current.refreshCaptcha();
    // }, []);
    const {input,setError}=useInputNumberCode(setCodeInput, codeInput, 5,'کد تایید ')

     const  handleSubmit = (e) => {
        e.preventDefault();
       axios.post(path, {'code':codeInput}, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'), 'Content-Type': 'application/json; charset=utf-8' } })
            .then(response => {
                navigate('/user/register',{state:{'access':true}});
            })
            .catch(async error => {
                 if(error.response.status==422){
                    const firstElementError =Object.keys(error.response.data.errors)[0];
                    if(firstElementError=='codeExpire'){
                       await navigate('/user/getMobile');
                        Swal.fire({
                            position: 'center',
                            icon: 'warning',
                            title: 'کد ارسال شده به موبایل شما منقضی شده است، مجددا تلاش کنید.',
                            showConfirmButton: true,
                            confirmButtonText:'متوجه شدم',
                            // timer: 3000
                        })
                    
                    }
                    setError(error.response.data.errors[firstElementError]);
                    // // setError('vnd');
                    // errorSubmit(e, error.response.status, error.response.data.errors, element, 'verifyMobile');

                 } else {
                setError('مشکلی به وجود آمده است، دوباره تلاش کنید.')

                    // errorCodeVerify(e, error.response.status, error.response.data.errors, element, 'verifyMobile')
                }
            })
    }
    const errorCodeVerify = (e, errorStatus, errorData, element, idForm) => {
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

    const updateCodeMobile = () => {
        // let data = { 'user_id': element.user_id }
        axios.post('web/authUser/updateCodeMobileInitial', { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'), 'Content-Type': 'application/json; charset=utf-8' } })
            .then(response => {
                // دستور زیر فقط برای چک کردن برنامه هست
                //این کد باید حتما پاک شود
                navigate('/user/verifyMobileInitial',{state:{'mobile':response.data.mobile , 'code':response.data.code}});

                // navigate('/user/verifyMobile',{state:{'user_id':response.data.user_id,'code':response.data.code}});
                
                // Swal.fire({
                //     position: 'center',
                //     icon: 'success',
                //     title: 'کد با موفقیت ارسال شد .',
                //     showConfirmButton: false,
                //     timer: 3000,
                //     didClose: () => { setMinutes(1) }
                // })
            })
            .catch(error => {

                console.log(error.response.data);

            })
    }
    const showLink = () => {
        if (minutes == 0 && seconds == 0) {
            $('.linkUpdateCode').css('display', 'flex');
            $('.textUpdateCode').css('display', 'none');
        } else {
            $('.linkUpdateCode').css('display', 'none');
            $('.textUpdateCode').css('display', 'flex');
        }
    }
    const backPage=()=>{
        // ,{state:{'user_id':response.data.user_id,'code':response.data.code}}
                navigate('/user/getMobile',{state:{'mobile':state.mobile}});

    }
    return (
        <div className='formContainer'>
            <div className="formRight">
                {useTitleForm('تایید موبایل')}
                {/* <div id='codeV'>{state.code}</div> */}
                <button onClick={backPage}>بازگشت و اصلاح موبایل</button>
                <div>{mobile}</div>
                <div>{code}</div>

                <form className='form' id='verifyMobileInitial' method='post' onSubmit={handleSubmit}>
                    <div className='errorAllContiner errorAll' id='errorAll'></div>
                    {input()}
                    <div>{codeInput} </div>
                    {/* < Captcha ref={changeCaptcha} backStyle={backStyle} ChangeStyle={ChangeStyle} /> */}
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


