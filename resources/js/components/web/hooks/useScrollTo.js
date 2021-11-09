import $ from "jquery";
// # جهت رفتن به یک جای خاص در صفحه از این هوک استفاده می شود 
const useScrollTo = ()=>{
    const handelScrollTo=(id , borderTop)=>{
        const offsetElement = $("#"+id).offset();
        $('html,body').animate({ scrollTop: offsetElement.top - 10 }, 'slow');
        if(borderTop){
            $('.guide').css({'borderTop':'none' ,'borderRadius' : '3px'});
            $("#"+id).css({'borderTop' : '3px solid green' , 'borderRadius' : '7px 7px 0 0'});
        }
     }    
return [handelScrollTo];
}
export default useScrollTo;