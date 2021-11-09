import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import useScrollTo from './useScrollTo';
import Swal from 'sweetalert2';
import $ from "jquery";
import { isEmpty } from 'lodash';

const useInputNumberCode = (setCodeInput, codeInput, lenghtNum,lable) => {
    // const [element, setElement] = useState({
    //     code: 489,
    // });
    // const [codeInput, setCodeInput] = useState('');

    const input = () => {
        var rows = [];
        for (var i = 0; i < lenghtNum; i++) {
            rows.push(<input type='text' id={`code${i}`} autoFocus className='inputNumCode' data-key={i} name={i} maxLength='1' key={i} onInput={(e) => changeFocus(e, i)} onKeyDown={(e) => backSpace(e)} />);
        }

        return <div className='continerInputNumCode'>
                    <div htmlFor="code0" className='lableInpuNumCode'>{lable}</div>
                    <div className='divInputNumCode'>{rows}</div>
                    <div id='errorInputNumCode' className="errorInput"></div>
                </div>
    }
    useEffect(() => {
        document.getElementById("code0").focus();
    }, []);

    const changeFocus = (e) => {

        const element = document.getElementById(e.target.id);
        const key = parseInt(element.getAttribute('data-key')) + 1;
        if (!isEmpty(element.value) && key < lenghtNum) {
            // فوکوس خودکار به کادر بعدی
            // این شرط چک می کند که کادر خالی نباشد
            // این شرط چک می کند که پس از کادر آخر فوکوسی به کادر دیگر انجام نگیرد
            document.getElementById(`code${key}`).focus();
        }

        setCode();

    }
    /**
     * این متد فوکس را هنگامی که کاربر مقدار را پاک می‌کند به عقب بر می‌گرداند
     * @param {*} e 
     */
    const backSpace = (e) => {
        if (e.keyCode === 8) {//چک می‌کند backSpace فشرده شده است.

            const element = document.getElementById(e.target.id);
            const key = parseInt(element.getAttribute('data-key')) - 1;
            if (isEmpty(element.value) && key >= 0) {
                //هنگامی که کاربر اقدام به پاک کردن مقدار می‌کند فوکوس باید در همان کادر باقی بماند و چنانچه پس از پاک کردن مقدار مبادرت به فشردن دکمه بک اسپیس کرد فوکوس به عقب جابه‌جا شود، این دستور  نیز همین مکانیزم را چک می کند
                // همچنین چک می‌کند در کادر اول فوکوسی به کادر عقب که وجود ندارد انجام نشود
                document.getElementById(`code${key}`).focus();

            }

        }
    }

    const setCode = () => {
        let code = '';
        for (let i = 0; i < lenghtNum; i++) {
            code = code + document.getElementById(`code${i}`).value;
        }
        // console.log(code);
        setCodeInput(parseInt(code.trim()));

    }
    /**
     * چنانچه کاربر اطلاعات نادرستی وارد کند متد زیر باقرمز کردن کادر فیلد و اعلام خطا هشدار لازم را می دهد
     * @param idParent 
     * @param errorDiv 
     * @param errorMassege 
     */
     const setError = (errorMessage) => {
        // $('#' + idParent).css("border", "1px solid red");
        // $(`#${idParent}`).addClass('inputFromSelect');
        // $(`#${idParent} i.false`).css("display", "flex");
        document.getElementById("errorInputNumCode").innerHTML = errorMessage
    }
    
    return { input , setError };


}
export default useInputNumberCode;