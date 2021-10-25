import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import useScrollTo from './useScrollTo';
import Swal from 'sweetalert2';
import $ from "jquery";
import { isEmpty } from 'lodash';

const useInputNumberCode = (lenghtNum) => {
    // const [element, setElement] = useState({
    //     code: 489,
    // });
    const [codeInput, setCodeInput] = useState('');

    const input = () => {
        var rows = [];
        for (var i = 0; i < lenghtNum; i++) {
            // note: we are adding a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            rows.push(<input type='text' id={`code${i}`} autoFocus className='inputNumCode' data-key={i} name={i} maxLength='1' key={i} onInput={(e) => changeFocus(e, i)} />);
        }

        return <div className='divInputNumCode'>{rows}</div>;
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
        if (key == lenghtNum) {
            setCode();
        }
    }

    const setCode = () => {
        let code='';
        for (let i = 0; i < lenghtNum; i++) {
            code = code + document.getElementById(`code${i}`).value;
        }
        setCodeInput(parseInt(code.trim()));

    }
    return (
        <div>
            {input()}
            <div>{codeInput}</div>
        </div>
    );


}
export default useInputNumberCode;