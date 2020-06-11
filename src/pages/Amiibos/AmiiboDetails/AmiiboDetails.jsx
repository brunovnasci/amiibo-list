import React, { useEffect, useState } from 'react';

import Header from '../../../components/Header/Header';
import Loading from '../../../components/Loading/Loading';

import RESOURCES from '../../../components/utils/Resourses';
import history from '../../../services/history';
import api from '../../../services/amiibosApi';
import { translateAmiiboType, formatDate } from '../../../components/utils/Utils';

import './AmiiboDetails.scss';

function AmiiboDetais(props){
    const { id } = props.match.params;

    const [ amiibo, setAmiibo ] = useState({});
    const [ isLoading, setIsLoading ] = useState(false);

    const getAmiibo = async () => {
        setIsLoading(true);
        try {
            const response = await api.get(`amiibo/?id=${id}`);
            setAmiibo(response.data.amiibo);
        }catch(error){
            console.log(error)
        }

        setIsLoading(false);
    }

    useEffect(() =>{
        getAmiibo()
    },[id]);

    const goBack = () => {
        history.goBack();    
    }

    const { amiiboSeries, character, gameSeries, image, name, release, type } = amiibo;

    return(
        <>
            <Header backButtonExists onClick={goBack}  headerTitle={RESOURCES.AMIIBO_DETAIS.HEADER} />
            {isLoading ? <Loading /> :
            <div className="amiibo-body">
                <div className="amiibo-image">
                    <img src={image} ></img>
                </div>
                <div className="amiibo-content">
                    <h1>{name}</h1>
                    <div className="amiibo-info">
                        <p><span className="amiibo-type">{translateAmiiboType(type)}</span></p>
                        <p><span>Personagem:</span> {character}</p>
                        <p><span>Série de games:</span> {gameSeries}</p>
                        <p><span>Amiibo compatível com:</span> {amiiboSeries}</p>
                    </div>
                    {release ?<div className="amiibo-releasedata">
                        <legend>Datas de lançamento</legend>
                        <ul>
                            {release.na ? (<li><span>América do Norte:</span> {formatDate(release.na)}</li>) : '' }
                            {release.au ? (<li><span>Austrália:</span> {formatDate(release.au)}</li>) : '' }
                            {release.eu ? (<li><span>Europa:</span> {formatDate(release.eu)}</li>) : '' }
                            {release.jp ? (<li><span>Japão:</span> {formatDate(release.jp)}</li>) : '' }
                        </ul>
                    </div> : ''}
                </div>
            </div>}
        </>
    );
}

export default AmiiboDetais;