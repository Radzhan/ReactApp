import React, { Children } from 'react';

interface Props extends React.PropsWithChildren{
    type: string;
    showAlert: boolean;
    onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({type, onDismiss , showAlert , children}) => {
    const styleForBtn = 'btn btn-'
    let btnShow = null
    if (onDismiss !== undefined){
        btnShow = <button className={styleForBtn + type} onClick={onDismiss}>X</button>;
    }
    const styleForAlert = 'alert alert-';
    return (
        <div className={styleForAlert + type} style={{display: showAlert ? 'block' : 'none'}}>
            {children}
            {btnShow}
        </div>
    );
};

export default Alert;