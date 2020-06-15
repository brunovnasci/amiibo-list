import React from 'react';
import { useDispatch } from 'react-redux';

import './Button.scss';

function Button({ text, active, onClick, disable, pageSelector }) {
    
    const dispatch = useDispatch();

    const selectPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        const page = text - 1;
        dispatch({ type: 'SET_AMIIBO_PAGE', payload: page });
    }

    return(
        <div className={`${active ? 'active' : 'button-body'} ${!disable ? 'disable' : ''}`} onClick={ !pageSelector ? () => onClick() : () => selectPage() }>
            <h1>{text}</h1>
        </div>
    );
}

export default Button;