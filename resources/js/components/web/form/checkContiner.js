import React from 'react';
const CheckContiner = (props) => {
    const checkContiner={
        display: 'flex',
        // backgroundColor: 'red',
        flexFlow: 'column',
    }
    const checkDiv1={
        
        display: 'flex',
        marginBottom: 0,
        paddingBottom: 0,
        alignItems: 'center',
        justifyItems: 'center',
        

    }
    const checkLabel ={
        display: 'flex',
        margin: 0
    }
    const classNameCheck='validFeedback' + ' ' + props.classFeedback;
    return (
        
        <div style={checkContiner}>
            <div style={checkDiv1}>
               <label style={checkLabel}>{props.label}</label>
               {props.check}
            </div>
            <div className={classNameCheck} >
               jsdf adfa
            </div>
        </div>
        
    )
}
export default CheckContiner;