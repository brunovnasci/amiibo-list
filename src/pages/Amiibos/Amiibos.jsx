import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Header from '../../components/Header/Header';
import AmiiboPreview from '../../components/AmiiboPreview/AmiiboPreview';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';

import api from '../../services/amiibosApi';
import HOSTS from '../../hosts';
import RESOURSES from '../../components/utils/Resourses';
import history from '../../services/history';
import { partArray } from '../../components/utils/Utils';

import './Amiibos.scss';

function Amiibos(){
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const { amiibos } = state;
    const { data, isLoading, page, lastPage } = amiibos;

    const [ amiiboList, setAmiiboList ] = useState([]);
    const [ refresh, setRefresh ] = useState([]);

    const getAmiibos = async () => {
        dispatch({ type: 'LOADING_AMIIBOS' });
        try {
            const response = await api.get(HOSTS.ENDPOINTS.GET_ALL_AMIIBOS);
            dispatch({ type: 'AMIIBOS_LOADED', payload: partArray(response.data.amiibo) });
        } catch(error){
            console.log(error)
        }
    }

    const goBack = () => { 
        history.goBack() 
    }

    const refreshPage = () => {
        setRefresh(!refresh);
    }

    useEffect(() =>{
        if(data.length === 0){
            getAmiibos();
        }
        // eslint-disable-next-line
    }, [data]);

    useEffect(() => {
        var pageContent = data[page] ? data[page] : [];
        setAmiiboList(pageContent);
    }, [data, page]);

    useEffect(() => {
        dispatch({ type: 'CLEAR_AMIIBOS' });
        // eslint-disable-next-line
    }, [refresh]);

    return(
        <>
            <div>
                <Header backButtonExists refreshButtonExists headerTitle={RESOURSES.AMIIBO.HEADER} backOnClick={ goBack } refreshOnClick={ refreshPage } />
                { isLoading ? <Loading /> :
                <div className="amiibos-content">
                    <div className="page-info">
                        <span>{data.length === 0 ? `` : `${page+1} de ${lastPage+1} páginas`}</span>
                    </div>
                    {amiiboList.map((item, index) => {
                        return(<AmiiboPreview amiibo={item} key={index} />);
                    })} 
                    <Pagination />
                </div>}
            </div>
        </>
    );
}

export default Amiibos;