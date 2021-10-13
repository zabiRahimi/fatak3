import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import $ from "jquery";
import Slider from "react-slick";
import axios from 'axios';

class ShowProSlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pros: [],
            picturePro:[]
        }
    }
    componentDidMount() {
        axios.get('/pros')
            .then(response => {
                this.setState({ pros: response.data.pros , picturePro: response.data.picturePro })
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const settings = {
            infinite: true,
            speed: 2000,
            slidesToShow: 4,
            slidesToScroll: 3,
            autoplay: true,
            autoplaySpeed: 10000,
        };
        const { pros ,picturePro } = this.state;
        const proShowSlider = pros.map((pro, key) =>{
           const pic= picturePro.filter(e=>e.pro_id==pro.id);
           const srcPic=`./images/imagePro/${pic[0].pic_b1}`
            return(
            <div className="" key={key}>
                <div className="divSlider">
                    <div className="divSliderImg"> <img src={srcPic} /></div>
                    <div className="divSliderName">{pro.name}</div>
                    <div className="divSliderPrice">{pro.price}</div>
                    <div>picId : {pic[0].id}</div>
                    <div>proId : {pro.id}</div>
                </div>
            </div>
            )
        }
        );
        // console.log(map1)
        return (
            <div className="showProSliderContainer">
                <div className='showProSliderHead' >
                    {this.props.head}
                </div>
                <div className="showProSliderBody">
                    <div>
                        <Slider {...settings} className='showProSliderSlik'>
                            {proShowSlider}
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}


export default ShowProSlider;