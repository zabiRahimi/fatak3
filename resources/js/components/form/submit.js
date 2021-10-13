import React from 'react';
const Submit = (props) => {
    const classSubmit = 'btn' + ' ' + props.class;
    return (
        <div className="form-group formGroupDiv">
            <button type='submit' className={classSubmit}>{props.value}</button>
        </div>
    )
}
export default Submit;