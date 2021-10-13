import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import { Link } from "react-router-dom";
// #5f6f81
class NavMo extends Component {
     showUlSub = (e) => {
        const liId='#'+e.currentTarget.getAttribute('id');
        const menuMobailUlSub=liId + ' .menuMobailUlSub ';
        const sortUp=liId + ' .sortUp ';
        const sortDown=liId + ' .sortDown ';
        $(`.menuMobailUlSub:not(${menuMobailUlSub})`).css({"display": "none"});
        $(menuMobailUlSub).toggle('slow',function(){
             const subDisplay= $(this).css('display');
             if(subDisplay ==='block'){
                 $(liId).css({"background-color":  "#ebeff4"})
             }
             else{$(liId).css({"background-color":  "#f1f5fa"})}
        });
        $(sortUp).toggle('slow');
        $(sortDown).toggle('slow');
    }
    openOrExitMenu=()=>{
        $('.menuMobailOpacity').toggle('slow',function(){
             const menuMobailOpacity= $('.menuMobailOpacity').css('display');
             if(menuMobailOpacity ==='block'){
                 $('body').css({"overflow": "hidden"})
             }
             else{$('body').css({"overflow": "visible"})}
        });
        $('.menuMobailMenu').toggle('slow');
    }
    render() {
        return (
            <div className="navMoContainer">
                <div className="navMCButton" onClick={this.openOrExitMenu}>
                <div className="navMCI"><i className="fas fa-bars"></i></div>
                <div className="navMCT"> منو</div>
                </div>
                <div className="menuMobailOpacity" onClick={this.openOrExitMenu}></div>

                <div className="menuMobailMenu">
                    <div className="closeMenuMobail" >
                        <div className="closeMMRigth">
                            <div className="closeMMRI"><i className="fas fa-ellipsis-v"></i></div>
                            <div className="closeMMRT">منو</div>
                        </div>
                        <div className="closeMMLeft">
                            <button onClick={this.openOrExitMenu}><span aria-hidden="true">&times;</span></button>
                        </div>
                    </div>
                    <ul className="menuMobailUl">
                        <li className="menuMULi">
                            <div className="">
                                <i className="far fa-window-maximize"></i>
                                <Link to="/" onClick={this.openOrExitMenu}>خانه</Link>
                            </div>
                        </li>
                        <li className="menuMULiHasSub" id='orderLi' onClick={this.showUlSub}>
                            <div className="menuMULHSUp">
                                <div className="menuMULHSURight">
                                    <i className="far fa-window-maximize"></i>
                                    <span>سفارش</span>
                                </div>
                                <div className="menuMULHSULeft">
                                  <i className="fas fa-sort-down sortDown" ></i>
                                  <i className="fas fa-sort-up sortUp" ></i>
                                </div>
                            </div>
                            <ul className="menuMobailUlSub">
                                <li><Link to="" onClick={this.openOrExitMenu}>ثبت سفارش</Link></li>
                                <li><Link to="" onClick={this.openOrExitMenu}>پیگیری سفارش</Link></li>
                                <li><Link to="" onClick={this.openOrExitMenu}>پیگیری خرید</Link></li>
                                <li><Link to="" onClick={this.openOrExitMenu}>راهنما</Link></li>
                            </ul>
                        </li>
                        <li className="menuMULiHasSub" id='chaneelLi' onClick={this.showUlSub}>
                            <div className="menuMULHSUp">
                                <div className="menuMULHSURight">
                                    <i className="fas fa-comments"></i>
                                    <span>مدیریت کانال و گروه</span>
                                </div>
                                <div className="menuMULHSULeft">
                                  <i className="fas fa-sort-down sortDown" ></i>
                                  <i className="fas fa-sort-up sortUp" ></i>
                                </div>
                            </div>
                            <ul className="menuMobailUlSub">
                                <li><Link to=""onClick={this.openOrExitMenu}>ورود</Link></li>
                                <li><Link to=""onClick={this.openOrExitMenu}>ثبت نام</Link></li>
                                <li><Link to=""onClick={this.openOrExitMenu}> راهنما</Link></li>
                            </ul>
                        </li>
                        <li className="menuMULiHasSub" id='shopLi' onClick={this.showUlSub}>
                            <div className="menuMULHSUp">
                                <div className="menuMULHSURight">
                                    <i className="fas fa-user-tag"></i>
                                    <span>مدیریت فروشندگان</span>
                                </div>
                                <div className="menuMULHSULeft">
                                  <i className="fas fa-sort-down sortDown" ></i>
                                  <i className="fas fa-sort-up sortUp" ></i>
                                </div>
                            </div>
                            <ul className="menuMobailUlSub">
                                <li><Link to=""onClick={this.openOrExitMenu}>ورود</Link></li>
                                <li><Link to=""onClick={this.openOrExitMenu}>ثبت نام</Link></li>
                                <li><Link to=""onClick={this.openOrExitMenu}>راهنما</Link></li>
                            </ul>
                        </li>
                        <li className="menuMobailUl">
                            <div className="">
                                <i className="fas fa-info-circle"></i>
                                <Link to=""onClick={this.openOrExitMenu}>درباره ما</Link>
                            </div>
                        </li>
                        <li className="menuMobailUl">
                            <div className="">
                                <i className="fas fa-phone"></i>
                                <Link to=""onClick={this.openOrExitMenu}>ارتباط با ما</Link>
                            </div>
                        </li>
                        <li className="menuMobailUl">
                            <div className="">
                                <i className="fas fa-balance-scale"></i>
                                <Link to=""onClick={this.openOrExitMenu}>قوانین و مقرارت</Link>
                            </div>
                        </li>
                        <li className="menuMobailUl">
                            <div className="">
                                <i className="fas fa-gavel"></i>
                                <Link to=""onClick={this.openOrExitMenu}>ثبت شکایت</Link>
                            </div>
                        </li>
                        <li className="menuMULiHasSub" id='instructLi' onClick={this.showUlSub}>
                            <div className="menuMULHSUp">
                                <div className="menuMULHSURight">
                                    <i className="fas fa-compass"></i>
                                    <span>راهنما</span>
                                </div>
                                <div className="menuMULHSULeft">
                                  <i className="fas fa-sort-down sortDown" ></i>
                                  <i className="fas fa-sort-up sortUp" ></i>
                                </div>
                            </div>
                            <ul className="menuMobailUlSub">
                                <li><Link to=""onClick={this.openOrExitMenu}> راهنمای استفاده از سایت </Link></li>
                                <li><Link to=""onClick={this.openOrExitMenu}> راهنمای خرید محصول </Link></li>
                                <li><Link to=""onClick={this.openOrExitMenu}> راهنمای سفارش محصول جدید </Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default NavMo;
