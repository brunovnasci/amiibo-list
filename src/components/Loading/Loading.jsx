import React from 'react';

import './Loading.scss';

function Loading() {

    return(
        <div className="loading-body">
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loading;