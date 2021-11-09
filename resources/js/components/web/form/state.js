import React, { useState } from 'react';
// import $ from "jquery";

const State = (props) => {
    const handleCity = e => {
        const { value } = e.target;
        props.getCity(value);


        setTimeout(`$("#city > option[value='']").prop('selected', true);
                    $('.stateSelect , .citySelect').css('border-color', '#ced4da');
                    $('.stateFeedback , .cityFeedback').html(' '); `)
    }
    const handleManyFun = (e) => {
        // props.delCity();
        handleCity(e);
    }
    // const handleFocus=(e)=>{
    //     // alert(e.target.id)
    //     // let classInputF=e.target.id +'Input';
    //     // let classValidFeedbackF=e.target.id +'Feedback';
    //     // $('.'+classInputF).css('border-color' , '#ced4da');
    //     // $('.'+classValidFeedbackF).html(' ');
    // }
    const star = (props.star == 'ok') ? <i className="fa fa-star star" aria-hidden="true"></i> : '';
    const classInput = 'form-control inputForm ' + props.id + 'Input';
    // const classValidFeedback = 'validFeedback' + ' ' + props.id + 'Feedback';
    const stateSelected = (props.value) ? <option defaultValue={props.value} id='no' onClick={(e) => { handleManyFun(e) }}>{props.value}</option> : <option defaultValue='' id='no' onClick={(e) => { handleManyFun(e) }}>انتخاب استان</option>;
    return (
        <div className="form-group formGroupDiv">
            <label htmlFor='state' className='labelForm'>
                {/* css code label in form/main.scss */}
                استان
                {star}
            </label>
            <select className="form-control stateSelect selectForm" name='state' id='state' onChange={props.change}  >
                {stateSelected}
                <option value="اردبیل" id='ardebil' onClick={(e) => { handleManyFun(e) }}  >اردبیل</option>
                <option value="اصفهان" id='esfahan' onClick={(e) => { handleManyFun(e) }} >اصفهان</option>
                <option value="البرز" id='alborz' onClick={(e) => { handleManyFun(e) }} >البرز</option>
                <option value="ایلام" id='eilam' onClick={(e) => { handleManyFun(e) }}>ایلام</option>
                <option value="آذربایجان شرقی" id='azarbaijanSharghi' onClick={(e) => { handleManyFun(e) }}>آذربایجان شرقی</option>
                <option value="آذربایجان غربی" id='azarbaijanGhrbi' onClick={(e) => { handleManyFun(e) }}>آذربایجان غربی</option>
                <option value="بوشهر" id='boshher' onClick={(e) => { handleManyFun(e) }}>بوشهر</option>
                <option value="تهران" id='thran' onClick={(e) => { handleManyFun(e) }}>تهران</option>
                <option value="چهار محال بختیاری" id='charMahalBakhtiari' onClick={(e) => { handleManyFun(e) }}>چهار محال بختیاری</option>
                <option value="خراسان جنوبی" id='khrasanJonobi' onClick={(e) => { handleManyFun(e) }}>خراسان جنوبی</option>
                <option value="خراسان رضوی" id='khrasanRazavi' onClick={(e) => { handleManyFun(e) }}>خراسان رضوی</option>
                <option value="خراسان شمالی" id='khrasanShomali' onClick={(e) => { handleManyFun(e) }}>خراسان شمالی</option>
                <option value="خوزستان" id='khozestan' onClick={(e) => { handleManyFun(e) }}>خوزستان</option>
                <option value="زنجان" id='zanjan' onClick={(e) => { handleManyFun(e) }}>زنجان</option>
                <option value="سمنان" id='semnan' onClick={(e) => { handleManyFun(e) }}>سمنان</option>
                <option value="سیستان و بلوچستان" id='sistanVaBlochstan' onClick={(e) => { handleManyFun(e) }}>سیستان و بلوچستان</option>
                <option value="فارس" id='fars' onClick={(e) => { handleManyFun(e) }}>فارس</option>
                <option value="قزوین" id='ghazvin' onClick={(e) => { handleManyFun(e) }}>قزوین</option>
                <option value="قم" id='ghom' onClick={(e) => { handleManyFun(e) }}>قم</option>
                <option value="کردستان" id='kordestan' onClick={(e) => { handleManyFun(e) }}>کردستان</option>
                <option value="کرمان" id='krman' onClick={(e) => { handleManyFun(e) }}>کرمان</option>
                <option value="کرمانشاه" id='krmanShah' onClick={(e) => { handleManyFun(e) }}>کرمانشاه</option>
                <option value="کهگیلویه و بویراحمد" id='kohgiloihVaBoirahmad' onClick={(e) => { handleManyFun(e) }}>کهگیلویه و بویراحمد</option>
                <option value="گلستان" id='golstan' onClick={(e) => { handleManyFun(e) }}>گلستان</option>
                <option value="گیلان" id='gilan' onClick={(e) => { handleManyFun(e) }}>گیلان</option>
                <option value="لرستان" id='lorstan' onClick={(e) => { handleManyFun(e) }}>لرستان</option>
                <option value="مازندران" id='mazandaran' onClick={(e) => { handleManyFun(e) }}>مازندران</option>
                <option value="مرکزی" id='markazi' onClick={(e) => { handleManyFun(e) }}>مرکزی</option>
                <option value="هرمزگان" id='hormozgan' onClick={(e) => { handleManyFun(e) }}>هرمزگان</option>
                <option value="همدان" id='hamdan' onClick={(e) => { handleManyFun(e) }}>همدان</option>
                <option value="یزد" id='yazd' onClick={(e) => { handleManyFun(e) }}>یزد</option>
            </select>
            <div className='validFeedback stateFeedback'>
                {/* css code label in form/main.scss */}
            </div>
        </div>
    )

}
export default State;