import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../../../components/Header/Header';
import AmiiboPreview from '../../../components/AmiiboPreview/AmiiboPreview';
import Loading from '../../../components/Loading/Loading';

import history from '../../../services/history';
import RESOURSES from '../../../components/utils/Resourses';
import api from '../../../services/amiibosApi';
import HOSTS from '../../../hosts';
import { matchSearch } from '../../../components/utils/Utils';

import './FindAmiibos.scss';

function FindAmiibos(){

    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const { amiibos, searchAmiibo } = state;
    const { isLoading } = amiibos;
    const { searchText } = searchAmiibo;

    const getAmiibos = async () => {
        dispatch({ type: 'LOADING_AMIIBOS' });
        try {
            const response = await api.get(HOSTS.ENDPOINTS.GET_ALL_AMIIBOS);
            dispatch({ type: 'AMIIBOS_LOADED', payload: response.data.amiibo });
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        if(amiibos.data.length === 0){
            getAmiibos();
        }
    }, []);

    const goBack = () => {
        history.goBack();
    }

    const handleTextbox = (e) => {
        dispatch({ type: 'SEARCH_TEXT_CHANGED', payload: e.target.value });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'SET_SEARCH_AMIIBOS' , payload: matchSearch(amiibos.data, searchText) });
    }

    return(
        <>
            <Header backButtonExists backOnClick={goBack} headerTitle={RESOURSES.FIND_AMIIBO.HEADER} />
            { isLoading ? <Loading /> :
                <>
                    <div className="input-body">
                        <div className="input-text">
                            <legend>Digite o nome do personagem</legend>
                            <form>
                                <input className="textbox" type="text" onChange={(e) => handleTextbox(e)} value={searchText} ></input>
                                <button className="button" onClick={(e)=> onSubmit(e)}>Pesquisar!</button>
                            </form>
                        </div>
                    </div>
                    <div className="amiibo-content">
                        <div className="total-elements">
                            {searchAmiibo.data.length != 0 ? <span>{`${searchAmiibo.data.length} resultados`}</span> : '' }
                        </div>
                        {searchAmiibo.data.map((item, index) => {
                            return(<AmiiboPreview key={index} amiibo={item} />);
                        })}
                    </div>
                </>}
        </>
    );
}

export default FindAmiibos;