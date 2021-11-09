import React from 'react';

const City = (props) => {
    const handleCss=(e)=>{
        $('.citySelect').css('border-color' , '#ced4da');
        $('.cityFeedback').html(' ');
    }
    const handleChange = (e) => {
        props.change(e);
        handleCss(e);

    }
    const star = (props.star == 'ok') ? <i className="fa fa-star star" aria-hidden="true"></i> : '';
    const classInput = 'form-control inputForm ' + props.id + 'Input';
    const classValidFeedback = 'validFeedback' + ' ' + props.id + 'Feedback';
    const citySelected=(props.value)? <option defaultValue={props.value}  key='ok'>{props.value}</option> : <option value='' defaultValue=''   key="0">انتخاب کنید</option>;
    const option = () => {
        switch (props.stateName) {
            case 'اردبیل':
                return [
                     
                    <option className="cityOff ostan1" value="اردبیل" key='2'>اردبیل</option>,
                    <option className="cityOff ostan1" value="بیله سوار" key='3'>بیله سوار</option>,
                    <option className="cityOff ostan1" value="پارس آباد" key='4'>پارس آباد</option>,
                    <option className="cityOff ostan1" value="خلخال" key='5'>خلخال</option>,
                    <option className="cityOff ostan1" value="سرعین" key='6'>سرعین</option>,
                    <option className="cityOff ostan1" value="کوثر" key='7'>کوثر</option>,
                    <option className="cityOff ostan1" value="گرمی" key='8'>گرمی</option>,
                    <option className="cityOff ostan1" value="مشکین شهر" key='9'>مشکین شهر</option>,
                    <option className="cityOff ostan1" value="نمین" key='10'>نمین</option>,
                    <option className="cityOff ostan1" value="نیر" key='11'>نیر</option>,
                ];

            case 'اصفهان':
                return [
                    
                    <option className="cityOff ostan2" value="آران و بیدگل" key='2'>آران و بیدگل</option>,
                    <option className="cityOff ostan2" value="اردستان" key='3'>اردستان</option>,
                    <option className="cityOff ostan2" value="اصفهان" key='4'>اصفهان</option>,
                    <option className="cityOff ostan2" value="برخوار" key='5'>برخوار</option>,
                    <option className="cityOff ostan2" value="بوئین و میاندشت" key='6'>بوئین و میاندشت</option>,
                    <option className="cityOff ostan2" value="تیران و کرون" key='7'>تیران و کرون</option>,
                    <option className="cityOff ostan2" value="چادگان" key='8'>چادگان</option>,
                    <option className="cityOff ostan2" value="خمینی شهر" key='9'>خمینی شهر</option>,
                    <option className="cityOff ostan2" value="خوانسار" key='10'>خوانسار</option>,
                    <option className="cityOff ostan2" value="خور و بیابانک" key='11'>خور و بیابانک</option>,
                    <option className="cityOff ostan2" value="سمیرم" key='12'>سمیرم</option>,
                    <option className="cityOff ostan2" value="شاهین شهر و میمه" key='13'>شاهین شهر و میمه</option>,
                    <option className="cityOff ostan2" value="شهرضا" key='14'>شهرضا</option>,
                    <option className="cityOff ostan2" value="دهاقان" key='15'>دهاقان</option>,
                    <option className="cityOff ostan2" value="فریدن" key='16'>فریدن</option>,
                    <option className="cityOff ostan2" value="فریدون شهر" key='17'>فریدون شهر</option>,
                    <option className="cityOff ostan2" value="فلاورجان" key='18'>فلاورجان</option>,
                    <option className="cityOff ostan2" value="کاشان" key='19'>کاشان</option>,
                    <option className="cityOff ostan2" value="گلپایگان" key='20'>گلپایگان</option>,
                    <option className="cityOff ostan2" value="لنجان" key='21'>لنجان</option>,
                    <option className="cityOff ostan2" value="مبارکه" key='22'>مبارکه</option>,
                    <option className="cityOff ostan2" value="نایین" key='23'>نایین</option>,
                    <option className="cityOff ostan2" value="نجف آباد" key='24'>نجف آباد</option>,
                    <option className="cityOff ostan2" value="نطنز" key='25'>نطنز</option>,
                ];
            case 'البرز':
                return [

                    
                    <option className="cityOff ostan3" value="اشتهارد" key='2'>اشتهارد</option>,
                    <option className="cityOff ostan3" value="ساوجبلاغ" key='3'>ساوجبلاغ</option>,
                    <option className="cityOff ostan3" value="طالقان" key='4'>طالقان</option>,
                    <option className="cityOff ostan3" value="کرج" key='5'>کرج</option>,
                    <option className="cityOff ostan3" value="نظرآباد" key='6'>نظرآباد</option>,
                    <option className="cityOff ostan3" value="فردیس" key='7'>فردیس</option>,
                ];
            case 'ایلام':
                return [

                    
                    <option className="cityOff ostan4" value="آبدانان" key='2'>آبدانان</option>,
                    <option className="cityOff ostan4" value="ایلام" key='3'>ایلام</option>,
                    <option className="cityOff ostan4" value="ایوان" key='4'>ایوان</option>,
                    <option className="cityOff ostan4" value="بدره" key='5'>بدره</option>,
                    <option className="cityOff ostan4" value="دره شهر" key='6'>دره شهر</option>,
                    <option className="cityOff ostan4" value="دهلران" key='7'>دهلران</option>,
                    <option className="cityOff ostan4" value="سیروان" key='8'>سیروان</option>,
                    <option className="cityOff ostan4" value="شیروان و چرداول " key='9'>شیروان و چرداول </option>,
                    <option className="cityOff ostan4" value="ملکشاهی" key='10'>ملکشاهی</option>,
                    <option className="cityOff ostan4" value="مهران" key='11'>مهران</option>,
                ];
            case 'آذربایجان شرقی':
                return [

                    
                    <option className="cityOff ostan5" value="آذرشهر" key='2'>آذرشهر</option>,
                    <option className="cityOff ostan5" value="اسکو" key='3'>اسکو</option>,
                    <option className="cityOff ostan5" value="اهر" key='4'>اهر</option>,
                    <option className="cityOff ostan5" value="بستان آباد" key='5'>بستان آباد</option>,
                    <option className="cityOff ostan5" value="بناب" key='6'>بناب</option>,
                    <option className="cityOff ostan5" value="تبریز" key='7'>تبریز</option>,
                    <option className="cityOff ostan5" value="جلفا" key='8'>جلفا</option>,
                    <option className="cityOff ostan5" value="چاراویماق" key='9'>چاراویماق</option>,
                    <option className="cityOff ostan5" value="خداآفرین" key='10'>خداآفرین</option>,
                    <option className="cityOff ostan5" value="سراب" key='11'>سراب</option>,
                    <option className="cityOff ostan5" value="شبستر" key='12'>شبستر</option>,
                    <option className="cityOff ostan5" value="عجب شیر" key='13'>عجب شیر</option>,
                    <option className="cityOff ostan5" value="کلیبر" key='14'>کلیبر</option>,
                    <option className="cityOff ostan5" value="مراغه" key='15'>مراغه</option>,
                    <option className="cityOff ostan5" value="مرند" key='16'>مرند</option>,
                    <option className="cityOff ostan5" value="ملکان" key='17'>ملکان</option>,
                    <option className="cityOff ostan5" value="ورزقان" key='18'>ورزقان</option>,
                    <option className="cityOff ostan5" value="هریس" key='19'>هریس</option>,
                    <option className="cityOff ostan5" value="هشترود" key='20'>هشترود</option>,
                    <option className="cityOff ostan5" value="هورندا" key='21'>هورندا</option>,
                ];
            case 'آذربایجان غربی':
                return [

                    
                    <option className="cityOff ostan6" value="ارومیه" key='2'>ارومیه</option>,
                    <option className="cityOff ostan6" value="اشنویه" key='3'>اشنویه</option>,
                    <option className="cityOff ostan6" value="بومکان" key='4'>بومکان</option>,
                    <option className="cityOff ostan6" value="پلدشت" key='5'>پلدشت</option>,
                    <option className="cityOff ostan6" value="پیرانشهر" key='6'>پیرانشهر</option>,
                    <option className="cityOff ostan6" value="تکاب" key='7'>تکاب</option>,
                    <option className="cityOff ostan6" value="چالدران" key='8'>چالدران</option>,
                    <option className="cityOff ostan6" value="چایباره" key='9'>چایباره</option>,
                    <option className="cityOff ostan6" value="خوی" key='10'>خوی</option>,
                    <option className="cityOff ostan6" value="سردشت" key='11'>سردشت</option>,
                    <option className="cityOff ostan6" value="سلماس" key='12'>سلماس</option>,
                    <option className="cityOff ostan6" value="شاهین دژ" key='13'>شاهین دژ</option>,
                    <option className="cityOff ostan6" value="شوط" key='14'>شوط</option>,
                    <option className="cityOff ostan6" value="ماکو" key='15'>ماکو</option>,
                    <option className="cityOff ostan6" value="مهاباد" key='16'>مهاباد</option>,
                    <option className="cityOff ostan6" value="میاندواب" key='17'>میاندواب</option>,
                    <option className="cityOff ostan6" value="نقده" key='18'>نقده</option>,
                ];
            case 'بوشهر':
                return [

                    
                    <option className="cityOff ostan7" value="بوشهر" key='2'>بوشهر</option>,
                    <option className="cityOff ostan7" value="تنگستان" key='3'>تنگستان</option>,
                    <option className="cityOff ostan7" value="جم" key='4'>جم</option>,
                    <option className="cityOff ostan7" value="دشتستان" key='5'>دشتستان</option>,
                    <option className="cityOff ostan7" value="دشتی" key='6'>دشتی</option>,
                    <option className="cityOff ostan7" value="دیر" key='7'>دیر</option>,
                    <option className="cityOff ostan7" value="دیلم" key='8'>دیلم</option>,
                    <option className="cityOff ostan7" value="عسلویه" key='9'>عسلویه</option>,
                    <option className="cityOff ostan7" value="کنگان" key='10'>کنگان</option>,
                    <option className="cityOff ostan7" value="گناوه" key='11'>گناوه</option>,
                ];
            case 'تهران':
                return [

                    
                    <option className="cityOff ostan8" value="اسلامشهر" key='2'>اسلامشهر</option>,
                    <option className="cityOff ostan8" value="بهارستان" key='3'>بهارستان</option>,
                    <option className="cityOff ostan8" value="پاکدشت" key='4'>پاکدشت</option>,
                    <option className="cityOff ostan8" value="پردیس" key='5'>پردیس</option>,
                    <option className="cityOff ostan8" value="پیشوا" key='6'>پیشوا</option>,
                    <option className="cityOff ostan8" value="تهران" key='7'>تهران</option>,
                    <option className="cityOff ostan8" value="دماوند" key='8'>دماوند</option>,
                    <option className="cityOff ostan8" value="رباط کریم" key='9'>رباط کریم</option>,
                    <option className="cityOff ostan8" value="ری" key='10'>ری</option>,
                    <option className="cityOff ostan8" value="شمیرانات" key='11'>شمیرانات</option>,
                    <option className="cityOff ostan8" value="شهریار" key='12'>شهریار</option>,
                    <option className="cityOff ostan8" value="فیروزکوه" key='13'>فیروزکوه</option>,
                    <option className="cityOff ostan8" value="قدس" key='14'>قدس</option>,
                    <option className="cityOff ostan8" value="قرچک" key='15'>قرچک</option>,
                    <option className="cityOff ostan8" value="ملارد" key='16'>ملارد</option>,
                    <option className="cityOff ostan8" value="ورامین" key='17'>ورامین</option>,
                ];
                <option value="چهار محال بختیاری" id='charMahalBakhtiari' onClick={(e) => { handleManyFun(e) }}>چهار محال بختیاری</option>
            case 'چهار محال بختیاری':
                return [

                    
                    <option className="cityOff ostan9" value="اردل" key='2'>اردل</option>,
                    <option className="cityOff ostan9" value="بروجن" key='3'>بروجن</option>,
                    <option className="cityOff ostan9" value="بن" key='4'>بن</option>,
                    <option className="cityOff ostan9" value="سامان" key='5'>سامان</option>,
                    <option className="cityOff ostan9" value="شهرکرد" key='6'>شهرکرد</option>,
                    <option className="cityOff ostan9" value="فارسان" key='7'>فارسان</option>,
                    <option className="cityOff ostan9" value="کوهرنگ" key='8'>کوهرنگ</option>,
                    <option className="cityOff ostan9" value="کیار" key='9'>کیار</option>,
                    <option className="cityOff ostan9" value="لردگان" key='10'>لردگان</option>,
                ];
            case 'خراسان جنوبی':
                return [

                    
                    <option className="cityOff ostan10" value="بشرویه" key='2'>بشرویه</option>,
                    <option className="cityOff ostan10" value="بیرجند" key='3'>بیرجند</option>,
                    <option className="cityOff ostan10" value="خوسف" key='4'>خوسف</option>,
                    <option className="cityOff ostan10" value="درمیان" key='5'>درمیان</option>,
                    <option className="cityOff ostan10" value="زیرکوه" key='6'>زیرکوه</option>,
                    <option className="cityOff ostan10" value="سرایان" key='7'>سرایان</option>,
                    <option className="cityOff ostan10" value="سربیشه" key='8'>سربیشه</option>,
                    <option className="cityOff ostan10" value="طبس" key='9'>طبس</option>,
                    <option className="cityOff ostan10" value="فردوس" key='10'>فردوس</option>,
                    <option className="cityOff ostan10" value="قائنات" key='11'>قائنات</option>,
                    <option className="cityOff ostan10" value="نهبندان" key='12'>نهبندان</option>,
                ];
            case 'خراسان رضوی':
                return [

                    
                    <option className="cityOff ostan11" value="باخزر" key='2'>باخزر</option>,
                    <option className="cityOff ostan11" value="بردسکن" key='3'>بردسکن</option>,
                    <option className="cityOff ostan11" value="بجستان" key='4'>بجستان</option>,
                    <option className="cityOff ostan11" value="تایباد" key='5'>تایباد</option>,
                    <option className="cityOff ostan11" value="تربت جام" key='6'>تربت جام</option>,
                    <option className="cityOff ostan11" value="تربت حیدریه" key='7'>تربت حیدریه</option>,
                    <option className="cityOff ostan11" value="چناران" key='8'>چناران</option>,
                    <option className="cityOff ostan11" value="جفتای" key='9'>جفتای</option>,
                    <option className="cityOff ostan11" value="جوین" key='10'>جوین</option>,
                    <option className="cityOff ostan11" value="خلیل آباد" key='11'>خلیل آباد</option>,
                    <option className="cityOff ostan11" value="خواف" key='12'>خواف</option>,
                    <option className="cityOff ostan11" value="خوشاب" key='13'>خوشاب</option>,
                    <option className="cityOff ostan11" value="داورزن" key='14'>داورزن</option>,
                    <option className="cityOff ostan11" value="درگز" key='15'>درگز</option>,
                    <option className="cityOff ostan11" value="رشتخوار" key='16'>رشتخوار</option>,
                    <option className="cityOff ostan11" value="زاوه" key='17'>زاوه</option>,
                    <option className="cityOff ostan11" value="سبزرود" key='18'>سبزرود</option>,
                    <option className="cityOff ostan11" value="سرخس" key='19'>سرخس</option>,
                    <option className="cityOff ostan11" value="فریمان" key='20'>فریمان</option>,
                    <option className="cityOff ostan11" value="فیروزه" key='21'>فیروزه</option>,
                    <option className="cityOff ostan11" value="قوچان" key='22'>قوچان</option>,
                    <option className="cityOff ostan11" value="طرقبه شاندیز" key='23'>طرقبه شاندیز</option>,
                    <option className="cityOff ostan11" value="کاشهر" key='24'>کاشهر</option>,
                    <option className="cityOff ostan11" value="کلات" key='25'>کلات</option>,
                    <option className="cityOff ostan11" value="گناباد" key='26'>گناباد</option>,
                    <option className="cityOff ostan11" value="مشهد" key='27'>مشهد</option>,
                    <option className="cityOff ostan11" value="مه ولات" key='28'>مه ولات</option>,
                    <option className="cityOff ostan11" value="نیشابور" key='29'>نیشابور</option>,
                ];
            case 'خراسان شمالی':
                return [

                    
                    <option className="cityOff ostan12" value="اسفراین" key='2'>اسفراین</option>,
                    <option className="cityOff ostan12" value="بجنورد" key='3'>بجنورد</option>,
                    <option className="cityOff ostan12" value="جاجرم" key='4'>جاجرم</option>,
                    <option className="cityOff ostan12" value="شیروان" key='5'>شیروان</option>,
                    <option className="cityOff ostan12" value="فاروج" key='6'>فاروج</option>,
                    <option className="cityOff ostan12" value="گرمه" key='7'>گرمه</option>,
                    <option className="cityOff ostan12" value="مانه و سملقان" key='8'>مانه و سملقان</option>,
                    <option className="cityOff ostan12" value="راز و جرگلان" key='9'>راز و جرگلان</option>,
                ];
            case 'خوزستان':
                return [

                    
                    <option className="cityOff ostan13" value="آبادان" key='2'>آبادان</option>,
                    <option className="cityOff ostan13" value="آغاجاری" key='3'>آغاجاری</option>,
                    <option className="cityOff ostan13" value="امیدیه" key='4'>امیدیه</option>,
                    <option className="cityOff ostan13" value="اندیکا" key='5'>اندیکا</option>,
                    <option className="cityOff ostan13" value="اندیمشک" key='6'>اندیمشک</option>,
                    <option className="cityOff ostan13" value="اهواز" key='7'>اهواز</option>,
                    <option className="cityOff ostan13" value="ایذه" key='8'>ایذه</option>,
                    <option className="cityOff ostan13" value="باغملک" key='9'>باغملک</option>,
                    <option className="cityOff ostan13" value="باوی" key='10'>باوی</option>,
                    <option className="cityOff ostan13" value="بهبهان" key='11'>بهبهان</option>,
                    <option className="cityOff ostan13" value="حمیدیه" key='12'>حمیدیه</option>,
                    <option className="cityOff ostan13" value="خرمشهر" key='13'>خرمشهر</option>,
                    <option className="cityOff ostan13" value="دزفول" key='14'>دزفول</option>,
                    <option className="cityOff ostan13" value="دشت آزادگان" key='15'>دشت آزادگان</option>,
                    <option className="cityOff ostan13" value="رامشیر" key='16'>رامشیر</option>,
                    <option className="cityOff ostan13" value="رامهرمز" key='17'>رامهرمز</option>,
                    <option className="cityOff ostan13" value="شادگان" key='18'>شادگان</option>,
                    <option className="cityOff ostan13" value="شوش" key='19'>شوش</option>,
                    <option className="cityOff ostan13" value="شوشتر" key='20'>شوشتر</option>,
                    <option className="cityOff ostan13" value="کارون" key='21'>کارون</option>,
                    <option className="cityOff ostan13" value="گتوند" key='22'>گتوند</option>,
                    <option className="cityOff ostan13" value="لالی" key='23'>لالی</option>,
                    <option className="cityOff ostan13" value="ماهشهر" key='25'>ماهشهر</option>,
                    <option className="cityOff ostan13" value="مسجدسلیمان" key='26'>مسجدسلیمان</option>,
                    <option className="cityOff ostan13" value="هفتکل" key='27'>هفتکل</option>,
                    <option className="cityOff ostan13" value="هندیجان" key='28'>هندیجان</option>,
                    <option className="cityOff ostan13" value="هویزه" key='29'>هویزه</option>,
                ];
            case 'زنجان':
                return [

                    
                    <option className="cityOff ostan14" value="ابهر" key='2'>ابهر</option>,
                    <option className="cityOff ostan14" value="ایجرود" key='3'>ایجرود</option>,
                    <option className="cityOff ostan14" value="خدابنده" key='4'>خدابنده</option>,
                    <option className="cityOff ostan14" value="خرمدره" key='5'>خرمدره</option>,
                    <option className="cityOff ostan14" value="زنجان" key='6'>زنجان</option>,
                    <option className="cityOff ostan14" value="سلطانیه" key='7'>سلطانیه</option>,
                    <option className="cityOff ostan14" value="طارم" key='8'>طارم</option>,
                    <option className="cityOff ostan14" value="ماهنشان" key='9'>ماهنشان</option>,
                ];
            case 'سمنان':
                return [

                    
                    <option className="cityOff ostan15" value="آردان" key='2'>آردان</option>,
                    <option className="cityOff ostan15" value="دامغان" key='3'>دامغان</option>,
                    <option className="cityOff ostan15" value="سرخه" key='4'>سرخه</option>,
                    <option className="cityOff ostan15" value="سمنان" key='5'>سمنان</option>,
                    <option className="cityOff ostan15" value="شاهرود" key='6'>شاهرود</option>,
                    <option className="cityOff ostan15" value="گرمسار" key='7'>گرمسار</option>,
                    <option className="cityOff ostan15" value="مهدی شهر" key='8'>مهدی شهر</option>,
                    <option className="cityOff ostan15" value="میامی" key='9'>میامی</option>,
                ];
            case 'سیستان و بلوچستان':
                return [

                    
                    <option className="cityOff ostan16" value="ایرانشهر" key='2'>ایرانشهر</option>,
                    <option className="cityOff ostan16" value="چابهار" key='3'>چابهار</option>,
                    <option className="cityOff ostan16" value="خاش" key='4'>خاش</option>,
                    <option className="cityOff ostan16" value="دلگان" key='5'>دلگان</option>,
                    <option className="cityOff ostan16" value="زابل" key='6'>زابل</option>,
                    <option className="cityOff ostan16" value="زاهدان" key='7'>زاهدان</option>,
                    <option className="cityOff ostan16" value="میرجاوه" key='8'>میرجاوه</option>,
                    <option className="cityOff ostan16" value="زهک" key='9'>زهک</option>,
                    <option className="cityOff ostan16" value="سراوان" key='10'>سراوان</option>,
                    <option className="cityOff ostan16" value="سرباز" key='11'>سرباز</option>,
                    <option className="cityOff ostan16" value="سیب وسوران" key='12'>سیب وسوران</option>,
                    <option className="cityOff ostan16" value="قصرقند" key='13'>قصرقند</option>,
                    <option className="cityOff ostan16" value="کنارک" key='14'>کنارک</option>,
                    <option className="cityOff ostan16" value="مهرستان" key='15'>مهرستان</option>,
                    <option className="cityOff ostan16" value="نیک شهر" key='16'>نیک شهر</option>,
                    <option className="cityOff ostan16" value="نیم روز" key='17'>نیم روز</option>,
                    <option className="cityOff ostan16" value="هامون" key='18'>هامون</option>,
                    <option className="cityOff ostan16" value="هیرمند" key='19'>هیرمند</option>,
                ];
            case 'فارس':
                return [

                    
                    <option className="cityOff ostan17" value="آباده" key='2'>آباده</option>,
                    <option className="cityOff ostan17" value="اقلید" key='3'>اقلید</option>,
                    <option className="cityOff ostan17" value="ارسنجان" key='4'>ارسنجان</option>,
                    <option className="cityOff ostan17" value="استهبان" key='5'>استهبان</option>,
                    <option className="cityOff ostan17" value="بوانات" key='6'>بوانات</option>,
                    <option className="cityOff ostan17" value="پاسارگاد" key='7'>پاسارگاد</option>,
                    <option className="cityOff ostan17" value="جهرم" key='8'>جهرم</option>,
                    <option className="cityOff ostan17" value="خرامه" key='9'>خرامه</option>,
                    <option className="cityOff ostan17" value="خرم بید" key='10'>خرم بید</option>,
                    <option className="cityOff ostan17" value="خنج" key='11'>خنج</option>,
                    <option className="cityOff ostan17" value="داراب" key='12'>داراب</option>,
                    <option className="cityOff ostan17" value="رستم" key='13'>رستم</option>,
                    <option className="cityOff ostan17" value="زرین دشت" key='14'>زرین دشت</option>,
                    <option className="cityOff ostan17" value="سپیدان" key='15'>سپیدان</option>,
                    <option className="cityOff ostan17" value="سروستان" key='16'>سروستان</option>,
                    <option className="cityOff ostan17" value="شیراز" key='17'>شیراز</option>,
                    <option className="cityOff ostan17" value="فراشبند" key='18'>فراشبند</option>,
                    <option className="cityOff ostan17" value="فسا" key='19'>فسا</option>,
                    <option className="cityOff ostan17" value="فیروزآباد" key='20'>فیروزآباد</option>,
                    <option className="cityOff ostan17" value="قیروکارزین" key='21'>قیروکارزین</option>,
                    <option className="cityOff ostan17" value="کازرون" key='22'>کازرون</option>,
                    <option className="cityOff ostan17" value="کوار" key='23'>کوار</option>,
                    <option className="cityOff ostan17" value="گراش" key='24'>گراش</option>,
                    <option className="cityOff ostan17" value="لارستان" key='25'>لارستان</option>,
                    <option className="cityOff ostan17" value="لامرد" key='26'>لامرد</option>,
                    <option className="cityOff ostan17" value="مرودشت" key='27'>مرودشت</option>,
                    <option className="cityOff ostan17" value="ممسنی" key='28'>ممسنی</option>,
                    <option className="cityOff ostan17" value="مهر" key='29'>مهر</option>,
                    <option className="cityOff ostan17" value="نی ریز" key='30'>نی ریز</option>,
                ];
            case 'قزوین':
                return [

                    
                    <option className="cityOff ostan18" value="آوج" key='2'>آوج</option>,
                    <option className="cityOff ostan18" value="آبیک" key='3'>آبیک</option>,
                    <option className="cityOff ostan18" value="البرز" key='4'>البرز</option>,
                    <option className="cityOff ostan18" value="بوئین زهرا" key='5'>بوئین زهرا</option>,
                    <option className="cityOff ostan18" value="تاکستان" key='6'>تاکستان</option>,
                    <option className="cityOff ostan18" value="قزوین" key='7'>قزوین</option>,
                ];
            case 'قم':
                return [

                    
                    <option className="cityOff ostan19" value="قم" key='2'>قم</option>,
                ];
            case 'کردستان':
                return [

                    
                    <option className="cityOff ostan20" value="بانه" key='2'>بانه</option>,
                    <option className="cityOff ostan20" value="بیجار" key='3'>بیجار</option>,
                    <option className="cityOff ostan20" value="دهگلان" key='4'>دهگلان</option>,
                    <option className="cityOff ostan20" value="دیواندره" key='5'>دیواندره</option>,
                    <option className="cityOff ostan20" value="سروآباد" key='6'>سروآباد</option>,
                    <option className="cityOff ostan20" value="سقز" key='7'>سقز</option>,
                    <option className="cityOff ostan20" value="سنندج" key='8'>سنندج</option>,
                    <option className="cityOff ostan20" value="قروه" key='9'>قروه</option>,
                    <option className="cityOff ostan20" value="کامیاران" key='10'>کامیاران</option>,
                    <option className="cityOff ostan20" value="مریوان" key='11'>مریوان</option>,
                ];
            case 'کرمان':
                return [

                    
                    <option className="cityOff ostan21" value="ارزوئیه" key='2'>ارزوئیه</option>,
                    <option className="cityOff ostan21" value="انار" key='3'>انار</option>,
                    <option className="cityOff ostan21" value="بافت" key='4'>بافت</option>,
                    <option className="cityOff ostan21" value="بردسیر" key='5'>بردسیر</option>,
                    <option className="cityOff ostan21" value="بم" key='6'>بم</option>,
                    <option className="cityOff ostan21" value="جیرفت" key='7'>جیرفت</option>,
                    <option className="cityOff ostan21" value="رابر" key='8'>رابر</option>,
                    <option className="cityOff ostan21" value="راور" key='9'>راور</option>,
                    <option className="cityOff ostan21" value="رفسنجان" key='10'>رفسنجان</option>,
                    <option className="cityOff ostan21" value="رودبارجنوب" key='11'>رودبارجنوب</option>,
                    <option className="cityOff ostan21" value="ریگان" key='12'>ریگان</option>,
                    <option className="cityOff ostan21" value="زرند" key='13'>زرند</option>,
                    <option className="cityOff ostan21" value="سیرجان" key='14'>سیرجان</option>,
                    <option className="cityOff ostan21" value="شهربابک" key='15'>شهربابک</option>,
                    <option className="cityOff ostan21" value="عنبرآباد" key='16'>عنبرآباد</option>,
                    <option className="cityOff ostan21" value="فاریاب" key='17'>فاریاب</option>,
                    <option className="cityOff ostan21" value="فهرج" key='18'>فهرج</option>,
                    <option className="cityOff ostan21" value="قلعه گنج" key='19'>قلعه گنج</option>,
                    <option className="cityOff ostan21" value="کرمان" key='20'>کرمان</option>,
                    <option className="cityOff ostan21" value="کوهبنان" key='21'>کوهبنان</option>,
                    <option className="cityOff ostan21" value="کهنوج" key='22'>کهنوج</option>,
                    <option className="cityOff ostan21" value="منوجان" key='23'>منوجان</option>,
                    <option className="cityOff ostan21" value="فرماشیر" key='24'>فرماشیر</option>,
                ];
            case 'کرمانشاه':
                return [

                    
                    <option className="cityOff ostan22" value="اسلام آبادغرب" key='2'>اسلام آبادغرب</option>,
                    <option className="cityOff ostan22" value="پاوه" key='3'>پاوه</option>,
                    <option className="cityOff ostan22" value="ثلاث باباجانی" key='4'>ثلاث باباجانی</option>,
                    <option className="cityOff ostan22" value="جوان رود" key='5'>جوان رود</option>,
                    <option className="cityOff ostan22" value="دالاهو" key='6'>دالاهو</option>,
                    <option className="cityOff ostan22" value="روانسر" key='7'>روانسر</option>,
                    <option className="cityOff ostan22" value="سرپل ذهاب" key='8'>سرپل ذهاب</option>,
                    <option className="cityOff ostan22" value="سرمست" key='9'>سرمست</option>,
                    <option className="cityOff ostan22" value="سطر" key='10'>سطر</option>,
                    <option className="cityOff ostan22" value="سنقر" key='11'>سنقر</option>,
                    <option className="cityOff ostan22" value="سومار" key='12'>سومار</option>,
                    <option className="cityOff ostan22" value="شاهو" key='13'>شاهو</option>,
                    <option className="cityOff ostan22" value="صحنه" key='14'>صحنه</option>,
                    <option className="cityOff ostan22" value="قصرشیرین" key='15'>قصرشیرین</option>,
                    <option className="cityOff ostan22" value="کرمانشاه" key='16'>کرمانشاه</option>,
                    <option className="cityOff ostan22" value="کنگاور" key='17'>کنگاور</option>,
                    <option className="cityOff ostan22" value="گیلان غرب" key='18'>گیلان غرب</option>,
                    <option className="cityOff ostan22" value="هرسین" key='19'>هرسین</option>,
                ];
            case 'کهگیلویه و بویراحمد':
                return [

                    
                    <option className="cityOff ostan23" value="باشت" key='2'>باشت</option>,
                    <option className="cityOff ostan23" value="بویراحمد" key='3'>بویراحمد</option>,
                    <option className="cityOff ostan23" value="بهمئی" key='4'>بهمئی</option>,
                    <option className="cityOff ostan23" value="چرام" key='5'>چرام</option>,
                    <option className="cityOff ostan23" value="دنا" key='6'>دنا</option>,
                    <option className="cityOff ostan23" value="کهگیلویه" key='7'>کهگیلویه</option>,
                    <option className="cityOff ostan23" value="گچساران" key='8'>گچساران</option>,
                    <option className="cityOff ostan23" value="لنده" key='9'>لنده</option>,
                ];
            case 'گلستان':
                return [

                    
                    <option className="cityOff ostan24" value="آزادشهر" key='2'>آزادشهر</option>,
                    <option className="cityOff ostan24" value="آق قلا" key='3'>آق قلا</option>,
                    <option className="cityOff ostan24" value="گز" key='4'>گز</option>,
                    <option className="cityOff ostan24" value="ترکمن" key='5'>ترکمن</option>,
                    <option className="cityOff ostan24" value="رامیان" key='6'>رامیان</option>,
                    <option className="cityOff ostan24" value="علی آباد" key='7'>علی آباد</option>,
                    <option className="cityOff ostan24" value="کردکوی" key='8'>کردکوی</option>,
                    <option className="cityOff ostan24" value="کلاله" key='9'>کلاله</option>,
                    <option className="cityOff ostan24" value="گالیکش" key='10'>گالیکش</option>,
                    <option className="cityOff ostan24" value="گرگان" key='11'>گرگان</option>,
                    <option className="cityOff ostan24" value="گنبد کاووس" key='12'>گنبد کاووس</option>,
                    <option className="cityOff ostan24" value="گمیشان" key='13'>گمیشان</option>,
                    <option className="cityOff ostan24" value="مراوه تپه" key='14'>مراوه تپه</option>,
                    <option className="cityOff ostan24" value="مینودشت" key='15'>مینودشت</option>,
                ];
            case 'گیلان':
                return [

                    
                    <option className="cityOff ostan25" value="آستارا" key='2'>آستارا</option>,
                    <option className="cityOff ostan25" value="آستانه اشرفیه" key='3'>آستانه اشرفیه</option>,
                    <option className="cityOff ostan25" value="املش" key='4'>املش</option>,
                    <option className="cityOff ostan25" value="انزلی" key='5'>انزلی</option>,
                    <option className="cityOff ostan25" value="تالش" key='6'>تالش</option>,
                    <option className="cityOff ostan25" value="رشت" key='7'>رشت</option>,
                    <option className="cityOff ostan25" value="رضوانشهر" key='8'>رضوانشهر</option>,
                    <option className="cityOff ostan25" value="رودبار" key='9'>رودبار</option>,
                    <option className="cityOff ostan25" value="رودسر" key='10'>رودسر</option>,
                    <option className="cityOff ostan25" value="سیاهکل" key='11'>سیاهکل</option>,
                    <option className="cityOff ostan25" value="شفت" key='12'>شفت</option>,
                    <option className="cityOff ostan25" value="صومعه سرا " key='13'>صومعه سرا </option>,
                    <option className="cityOff ostan25" value="فومن" key='14'>فومن</option>,
                    <option className="cityOff ostan25" value="لاهیجان" key='15'>لاهیجان</option>,
                    <option className="cityOff ostan25" value="لنگرود" key='16'>لنگرود</option>,
                    <option className="cityOff ostan25" value="ماسال" key='17'>ماسال</option>,
                ];
            case 'لرستان':
                return [

                    
                    <option className="cityOff ostan26" value="ازنا" key='2'>ازنا</option>,
                    <option className="cityOff ostan26" value="الیگودرز" key='3'>الیگودرز</option>,
                    <option className="cityOff ostan26" value="بروجرد" key='4'>بروجرد</option>,
                    <option className="cityOff ostan26" value="پل دختر" key='5'>پل دختر</option>,
                    <option className="cityOff ostan26" value="خرم آباد" key='6'>خرم آباد</option>,
                    <option className="cityOff ostan26" value="دورود" key='7'>دورود</option>,
                    <option className="cityOff ostan26" value="چگنی" key='8'>چگنی</option>,
                    <option className="cityOff ostan26" value="دلفان" key='9'>دلفان</option>,
                    <option className="cityOff ostan26" value="سلسله" key='10'>سلسله</option>,
                    <option className="cityOff ostan26" value="کوهدشت" key='11'>کوهدشت</option>,
                ];
            case 'مازندران':
                return [

                    
                    <option className="cityOff ostan27" value="آمل" key='2'>آمل</option>,
                    <option className="cityOff ostan27" value="بابل" key='3'>بابل</option>,
                    <option className="cityOff ostan27" value="بابلسر" key='4'>بابلسر</option>,
                    <option className="cityOff ostan27" value="بهشهر" key='5'>بهشهر</option>,
                    <option className="cityOff ostan27" value="تنکابن" key='6'>تنکابن</option>,
                    <option className="cityOff ostan27" value="جویبار" key='7'>جویبار</option>,
                    <option className="cityOff ostan27" value="چالوس" key='8'>چالوس</option>,
                    <option className="cityOff ostan27" value="رامسر" key='9'>رامسر</option>,
                    <option className="cityOff ostan27" value="ساری" key='10'>ساری</option>,
                    <option className="cityOff ostan27" value="سوادکوه" key='11'>سوادکوه</option>,
                    <option className="cityOff ostan27" value="سیمرغ" key='12'>سیمرغ</option>,
                    <option className="cityOff ostan27" value="عباس آباد" key='13'>عباس آباد</option>,
                    <option className="cityOff ostan27" value="فریدون کنار" key='14'>فریدون کنار</option>,
                    <option className="cityOff ostan27" value="قائم شهر" key='15'>قائم شهر</option>,
                    <option className="cityOff ostan27" value="گلوگاه" key='16'>گلوگاه</option>,
                    <option className="cityOff ostan27" value="محمودآباد" key='17'>محمودآباد</option>,
                    <option className="cityOff ostan27" value="میان دورود" key='18'>میان دورود</option>,
                    <option className="cityOff ostan27" value="نور" key='19'>نور</option>,
                    <option className="cityOff ostan27" value="نوشهر" key='20'>نوشهر</option>,
                    <option className="cityOff ostan27" value="نکا" key='21'>نکا</option>,
                ];
            case 'مرکزی':
                return [

                    
                    <option className="cityOff ostan28" value="آشتیان" key='2'>آشتیان</option>,
                    <option className="cityOff ostan28" value="اراک" key='3'>اراک</option>,
                    <option className="cityOff ostan28" value="تفرش" key='4'>تفرش</option>,
                    <option className="cityOff ostan28" value="خمین" key='5'>خمین</option>,
                    <option className="cityOff ostan28" value="خنداب" key='6'>خنداب</option>,
                    <option className="cityOff ostan28" value="دلیجان" key='7'>دلیجان</option>,
                    <option className="cityOff ostan28" value="زرندیه" key='8'>زرندیه</option>,
                    <option className="cityOff ostan28" value="ساوه" key='9'>ساوه</option>,
                    <option className="cityOff ostan28" value="شازند" key='10'>شازند</option>,
                    <option className="cityOff ostan28" value="کمیجان" key='11'>کمیجان</option>,
                    <option className="cityOff ostan28" value="فراهان" key='12'>فراهان</option>,
                    <option className="cityOff ostan28" value="محلات" key='13'>محلات</option>,
                ];
            case 'هرمزگان':
                return [

                    
                    <option className="cityOff ostan29" value="ابوموسی" key='2'>ابوموسی</option>,
                    <option className="cityOff ostan29" value="بستک" key='3'>بستک</option>,
                    <option className="cityOff ostan29" value="بشاگرد" key='4'>بشاگرد</option>,
                    <option className="cityOff ostan29" value="بندرعباس" key='5'>بندرعباس</option>,
                    <option className="cityOff ostan29" value="لنگه" key='6'>لنگه</option>,
                    <option className="cityOff ostan29" value="پارسیان" key='7'>پارسیان</option>,
                    <option className="cityOff ostan29" value="جاسک" key='8'>جاسک</option>,
                    <option className="cityOff ostan29" value="حاجی آباد" key='9'>حاجی آباد</option>,
                    <option className="cityOff ostan29" value="خمیر" key='10'>خمیر</option>,
                    <option className="cityOff ostan29" value="رودان" key='11'>رودان</option>,
                    <option className="cityOff ostan29" value="سیریک" key='12'>سیریک</option>,
                    <option className="cityOff ostan29" value="قشم" key='13'>قشم</option>,
                    <option className="cityOff ostan29" value="میناب" key='14'>میناب</option>,
                ];
            case 'همدان':
                return [
                    
                    <option className="cityOff ostan30" value="اسدآباد" key='2'>اسدآباد</option>,
                    <option className="cityOff ostan30" value="بهار" key='3'>بهار</option>,
                    <option className="cityOff ostan30" value="توسیرکان" key='4'>توسیرکان</option>,
                    <option className="cityOff ostan30" value="رزن" key='5'>رزن</option>,
                    <option className="cityOff ostan30" value="فامنین" key='6'>فامنین</option>,
                    <option className="cityOff ostan30" value="کبودرآهنگ" key='7'>کبودرآهنگ</option>,
                    <option className="cityOff ostan30" value="ملایر" key='8'>ملایر</option>,
                    <option className="cityOff ostan30" value="نهاوند" key='9'>نهاوند</option>,
                    <option className="cityOff ostan30" value="همدان" key='10'>همدان</option>,
                ];
            case 'یزد':
                return [

                    
                    <option className="cityOff ostan31" value="ابرکوه" key='2'>ابرکوه</option>,
                    <option className="cityOff ostan31" value="اردکان" key='3'>اردکان</option>,
                    <option className="cityOff ostan31" value="اشکذر" key='4'>اشکذر</option>,
                    <option className="cityOff ostan31" value="بافق" key='5'>بافق</option>,
                    <option className="cityOff ostan31" value="بهاباد" key='6'>بهاباد</option>,
                    <option className="cityOff ostan31" value="تفت" key='7'>تفت</option>,
                    <option className="cityOff ostan31" value="خاتم" key='8'>خاتم</option>,
                    <option className="cityOff ostan31" value="مهریز" key='9'>مهریز</option>,
                    <option className="cityOff ostan31" value="میبد" key='10'>میبد</option>,
                    <option className="cityOff ostan31" value="یزد" key='11'>یزد</option>,
                ];

            default:
                return [
                    
                    <optgroup label='ابتدا استان را انتخاب کنید' key='2'></optgroup>
                ]
                    ;

        }

    }
    return (
        <div className="form-group formGroupDiv">
            <label htmlFor='city' className='labelForm'>
                {/* css code label in form/main.scss */}
                شهر
                {star}
            </label>
            {/* onChange={(e) => { handleChange(e) }} */}
            <select className="form-control citySelect selectForm" id='city' onChange={(e) => { handleChange(e) }}>
                {citySelected}
                {option()}
            </select>

            <div className='validFeedback cityFeedback'>
                {/* css code label in form/main.scss */}
            </div>
        </div>




    )
}
export default City;