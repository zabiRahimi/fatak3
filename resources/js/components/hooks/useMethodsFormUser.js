import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import useScrollTo from './useScrollTo';
import Swal from 'sweetalert2';
import $ from "jquery";

const useMethodsFormUser = (path, element, setElement) => {
    const changeCaptcha = useRef();
    const handleCheckValue = e => {
        let { id, value } = e.target;
        const idParent = e.target.parentNode.id;
        const errorDiv = e.target.parentNode.parentNode.lastChild;
        value = checkMobile(id, value);
        setElement(prev => ({ ...prev, [id]: value }));
        axios.post(path, { [id]: value }, { headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } })
            .then(function (response) {
                valTrue(idParent);
            })
            .catch((error) => {
                // console.log(error.response.data);
                chptchaErrorCangeStyle();
                valFalse(idParent, errorDiv, error.response.data.errors[id]);
            })


    }

    /**
     * هنگامی که اطلاعات یک فیلد به درستی احراز شد این متد کادر فیلد را سبز رنگ می کند
     * @param idParent 
     */
    const valTrue = (idParent) => {
        $('#' + idParent).css("border", "1px solid green");
        $(`#${idParent} i.true`).css("display", "flex");
    }
    /**
     * چنانچه کاربر اطلاعات نادرستی وارد کند متد زیر باقرمز کردن کادر فیلد و اعلام خطا هشدار لازم را می دهد
     * @param idParent 
     * @param errorDiv 
     * @param errorMassege 
     */
    const valFalse = (idParent, errorDiv, errorMessage) => {
        $('#' + idParent).css("border", "1px solid red");
        $(`#${idParent}`).addClass('inputFromSelect');
        $(`#${idParent} i.false`).css("display", "flex");
        errorDiv.innerHTML = errorMessage
    }
    /**
     * چنانچه کاربر صفر ابتدایی شماره موبایل را نگذاشته باشد این متد صفر را اضافه می کند
     * @param id 
     * @param value 
     */
    const checkMobile = (id, value) => {
        const checkMobile = /^[0-9]{10}$/;
        if (id == 'mobile' && checkMobile.test(value)) {
            value = 0 + value;
        }
        return value;
    }


    /**
    * چنانچه هنگام ارسال فرم خظایی ایجاد شود این متد خطا را به کاربر اعلام می کند
    * @param {*} e 
    * @param {*} errorStatus 
    * @param {*} errorData 
    * @param {*} element 
    * @param {*} idForm 
    */
    const errorSubmit = (e, errorStatus, errorData, element, idForm) => {
        // backStyle(e, errorStatus, errorData, element);

        // const offset = $(".errorAll").offset();
        // $(document).scrollTop(offset.top - 80);


        // $('#captcha').val('');
        // changeCaptcha.current.refreshCaptcha();
        chptchaErrorCangeStyle();

        if (errorStatus == 422) {
            const firstElementError = Object.keys(errorData)[0];
            const offset = $(`#${firstElementError}`).offset();

            Swal.fire({
                position: 'center',
                icon: 'warning',
                text: 'اخطار! لازم است همه فیلدها را وارد کنید.',
                showConfirmButton: false,
                timer: 3000,
                didClose: () => $(document).scrollTop(offset.top - 80),
            });
            if (firstElementError == 'captcha') {
                const errorDiv = document.getElementById('divCaptcha').parentNode.lastChild;
                valFalse('divCaptcha', errorDiv, 'کد امنیتی را صحیح وارد کنید.')
            }

        }
        else {
            backStyle(e, errorStatus, errorData, element);
            const offset = $(".errorAll").offset();
            $(document).scrollTop(offset.top - 80);
            $(`#${idForm}`).trigger('reset');
            for (let i in element) {
                setElement(perv => ({ ...perv, [i]: null }));
            }
            const errorMessage = 'خطایی رخ داده است ، لطفا دوباره تلاش کنید .'
            $('.errorAll').html(
                `<div class='alert alert-danger errorAll' >${errorMessage}</div> `
            );
        }

    }

    /**
     * این متد فیلدهای فرم را به حالت اولیه بر می گرداند
     * این متد هنگام استفده از onFocue و onSubmit به کار گرفته می شود
     * @param {*} e 
     * @param {*} errorStatus 
     * @param {*} errorData 
     * @param {*} element 
     */
    const backStyle = (e, errorStatus = null, errorData = null, element = null) => {
        if (e.type == 'focus') {
            const idParent = e.target.parentNode.id;
            $(`#${idParent}`).removeClass('inputFromSelect');
            $(`#${idParent}`).css("border", "1px solid #eaecef");
            $(`#${idParent} i`).css("display", "none");
            const dviError = e.target.parentNode.parentNode.lastChild;
            dviError.innerHTML = '';
            $(`.errorAll`).html('');
        } else {
            let valElement;
            (errorStatus == 422 && Object.keys(errorData)[0] != 'codeVerify') ? valElement = errorData : valElement = element;

            for (let i in valElement) {
                if (i == 'user_id' && Object.keys(errorData)[0] == 'codeVerify') {
                    continue;
                }
                const idParent = document.getElementById(i).parentNode.id;
                $(`#${idParent}`).removeClass('inputFromSelect');
                $(`#${idParent}`).css("border", "1px solid #eaecef");
                $(`#${idParent} i`).css("display", "none");
                $(`#${idParent} label`).css('display', 'none');
                $(`#${idParent} input`).css('direction', 'rtl');
                $(`#${idParent} input`).val('');
                const dviError = document.getElementById(i).parentNode.parentNode.lastChild;
                dviError.innerHTML = ''
            }
        }
    }

    /**
     * این متد چند عمل را انجام می دهد
     * چنانچه کاربر اقدام به نوشتن در باکس کرد لیبل مربوط به باکس را نمایش می دهد
     * چنانچه لازم است دایرکشن باکس از چپ به راست باشد این تغییر را ایجاد می کند
     * لازم به ذکر است که باکسهایی مانند ایمیل پسورد و موبایل که لازم است از چپ به راست نوشته شوند یک دیتا اتریبیوتی به نام دیتا-لنگ با مقدار ای ان می گیرند که این متد چک می کند اگر این خاصیت وجود داشت دایرکشن را تغییر می دهد
     *  data-lang = en
     * چنانچه کاربر مبادرت به پاک کردن کامل باکس کرد لیبل را پنهان می کند
     * @param {*} e 
     */
    const ChangeStyle = (e) => {

        //    چون تغییرات بر روی کلاس دایو پدر انجام  می گیرد لذا با دستور زیر آی دی دایو پدر را بدست می آوریم
        const id = e.target.parentNode.id;
        const lang = document.getElementById(id).getAttribute('data-lang');
        // با دستور زیر مقدار این پوت را بدست می آوریم تا در صورت خالی بودن این پوت دایو به حالت اول برگردد، البته این زمانی اتفاق می افتد که کاربر مقداری را وارد کرده و سپس این پوت را خالی می کند   
        let check = $(`#${id} input`).val();
        if (check) {
            $(`#${id} label`).css('display', 'flex');
            $(`#${id}`).addClass('inputFromSelect');
            if (lang == 'en' || lang == 'num' || lang == 'en_num') {
                $(`#${id} input`).css('direction', 'ltr');
            }
        } else {
            $(`#${id} label`).css('display', 'none');
            $(`#${id}`).removeClass('inputFromSelect');
            $(`#${id} input`).css('direction', 'rtl');
        }
    }
    /**
     * هنگام رخ دادن خطا در ارسال فرم این متد چند عمل انجام می دهد
     * باکس کپتچا را خالی می کند
     * کد کپتچا را تغییر می دهد
     * استایل باکس کپتچا را به حالت اول بر می گرداند
     */
    const chptchaErrorCangeStyle = () => {
        $('#captcha').val('');
        changeCaptcha.current.refreshCaptcha();
        $(`#divCaptcha label`).css('display', 'none');
        $(`#divCaptcha`).removeClass('inputFromSelect');
        $(`#divCaptcha input`).css('direction', 'rtl');
    }

    return { changeCaptcha, handleCheckValue, valTrue, valFalse, checkMobile, errorSubmit, backStyle, ChangeStyle };
}
export default useMethodsFormUser;