import React from 'react';

import history from '../../../services/history';
import { translateAmiiboType } from '../../../components/utils/Utils';

import './AmiiboPreview.scss';

function AmiiboPreview({ amiibo }) {

    const {
        amiiboSeries,
        character, 
        gameSeries, 
        image, 
        name, 
        type,
        head,
        tail
    } = amiibo;

    const id = `${head}${tail}`;

    return(
        <div className="amiibo-preview-body">
            <span>{translateAmiiboType(type)}</span>
            <div className="amiibo-preview-content" >
                <img src={image} alt={`${character} from ${gameSeries}`} />
                <div>
                    <h1>{name}</h1>
                    <p>Série de jogo: {gameSeries}</p>
                    <p>Jogo compatível: {amiiboSeries}</p>
                </div>
            </div>
        </div>
    );
}

export default AmiiboPreview;