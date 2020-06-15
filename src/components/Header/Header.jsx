import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faSync } from '@fortawesome/free-solid-svg-icons';

import './Header.scss';

function Header({ backButtonExists, backOnClick, headerTitle, refreshButtonExists, refreshOnClick }){
        return(
            <div className={`header-body ${(backButtonExists ? (refreshButtonExists ? 'with-refresh' : '') : 'backbuttonNone')}`}>
                {backButtonExists ? 
                    <div className="backbutton" onClick={() => backOnClick()}>
                        <FontAwesomeIcon icon={ faChevronLeft } color="white" />
                    </div>
                : ''}
                <div className="header-title">
                    {headerTitle}
                </div>
                {refreshButtonExists ? 
                    <div className="refreshbutton" onClick={() => refreshOnClick()}>
                        <FontAwesomeIcon icon={ faSync } color="white" />
                    </div>
                : ''}
            </div>
        );
}

export default Header;