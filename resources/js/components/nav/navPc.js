import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
class NavPc extends Component {
    showUlSubPc = (e) => {
        if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) { 
           
        
        const liIdPc='#'+e.currentTarget.getAttribute('id');
        const menuPcUlSub=liIdPc + ' .menuPcUlSub ';
        
        
        const sortUpPc=liIdPc + ' .sortUpPc ';
        const sortDownPc=liIdPc + ' .sortDownPc ';
        $(`.menuPcUlSub:not(${menuPcUlSub})`).css({"display": "none"});
        $('.navPcContainer li').css({"background-color":  "#f5f5f5"})
        $(menuPcUlSub).toggle('slow',function(){
             const subDisplayPc= $(this).css('display');
             if(subDisplayPc ==='block'){
                 $(liIdPc).css({"background-color":  "#e1dfdf"})
             }
             else{$(liIdPc).css({"background-color":  "#f5f5f5"})}
        });
        $(sortUpPc).toggle('slow');
        $(sortDownPc).toggle('slow');
      }
    }
    render() {
        return (
            <div className="navPcContainer">
                <ul className="">
                    <li className=""><Link to="/">خانه</Link></li>
                    <li className=""><Link to="/aboutUs">درباره ما</Link></li>
                    <li className=""><Link to="/contactUs">تماس با ما</Link></li>
                    <li className=""><Link to="/complaint">ثبت شکایت</Link></li>

                    <li className=""id="orderLiPc"onClick={this.showUlSubPc}>
                        <div className="divLi">
                            <div className="divLiTitr">سفارش</div>
                            <div className="divLiIcon">
                                <i className="fas fa-sort-down sortDownPc" ></i>
                                <i className="fas fa-sort-up sortUpPc" ></i>
                            </div>
                        </div>
                        <ul className="menuPcUlSub">
                            <li className=""><Link to="/order">سفارش</Link></li>
                            <li className=""><Link to="/order">پیگیری سفارش</Link></li>
                            <li className=""><Link to="">پیگیری خرید</Link></li>
                            <li className=""><Link to="">راهنما</Link></li>
                        </ul>
                    </li>
                    <li className="" id="channelLiPc"onClick={this.showUlSubPc}>
                        <div className="divLi">
                            <div className="divLiTitr">مدیریت شبکه اجتماعی</div>
                            <div className="divLiIcon">
                                <i className="fas fa-sort-down sortDownPc" ></i>
                                <i className="fas fa-sort-up sortUpPc" ></i>
                            </div>
                        </div>
                        <ul className="menuPcUlSub">
                            <li className=""><Link to="">ورود</Link></li>
                            <li className=""><Link to="">ثبت نام</Link></li>
                            <li className=""><Link to="">راهنما</Link></li>
                        </ul>
                    </li>
                    <li className=""id="shopLiPc"onClick={this.showUlSubPc}>
                        <div className="divLi">
                            <div className="divLiTitr">مدیریت فروشندگان</div>
                            <div className="divLiIcon">
                                <i className="fas fa-sort-down sortDownPc" ></i>
                                <i className="fas fa-sort-up sortUpPc" ></i>
                            </div>
                        </div>
                        <ul className="menuPcUlSub">
                            <li className=""><Link to="">ورود </Link></li>
                            <li className=""><Link to="">ثبت نام</Link></li>
                            <li className=""><Link to="">راهنما</Link></li>
                        </ul>
                    </li>
                    <li className=""id="instructLiPc"onClick={this.showUlSubPc}>
                        <div className="divLi">
                            <div className="divLiTitr">راهنما</div>
                            <div className="divLiIcon">
                                <i className="fas fa-sort-down sortDownPc" ></i>
                                <i className="fas fa-sort-up sortUpPc" ></i>
                            </div>
                        </div>
                        <ul className="menuPcUlSub">
                            <li className=""><Link to="/user/showVerifyMobile">راهنمای سفارش کالا</Link></li>
                            <li className=""><Link to="">راهنمای خرید کالا</Link></li>
                            <li className=""><Link to="">راهنمای فروشندگان</Link></li>
                            <li className=""><Link to="">راهنمای شبکه های اجتماعی</Link></li>
                        </ul>
                    </li>

                    <li className=""><Link to="/user/login">ورود</Link></li>
                    <li className=""><Link to="/user/register">ثبت نام</Link></li>

                </ul>
                
            </div>
        )
    }

}

export default NavPc;