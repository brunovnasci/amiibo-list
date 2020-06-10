import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

function Header({ backButtonExists, onClick, headerTitle }){
        return(
            <div className={`header-body ${backButtonExists ? '' : 'backbuttonNone'}`}>
                {backButtonExists ? 
                    <div className="backbutton" onClick={() => onClick()}>
                        <FontAwesomeIcon icon={ faChevronLeft } color="white" />
                    </div>
                : ''}
                <div className="header-title">
                    {headerTitle}
                </div>
            </div>
        );
}

export default Header;