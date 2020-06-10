import React, { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import AmiiboPreview from './AmiiboPreview/AmiiboPreview';

import api from '../../services/amiibosApi';
import HOSTS from '../../hosts';
import RESOURSES from '../../components/utils/Resourses';
import history from '../../services/history';
import AMIIBO from '../../components/utils/Mocks';

import './Amiibos.scss';

function Amiibos(){
    
    const [ amiibos, setAmiibos ] = useState([]);

    const getAmiibos = async () => {
        try {
            //const response = await api.get(HOSTS.ENDPOINTS.GET_ALL_AMIIBOS);
            //setAmiibos(response.data.amiibo)
            setAmiibos(AMIIBO.amiibo);
        } catch(error){
            console.log(error)
        }
    }

    useEffect(() =>{
        getAmiibos();
    }, []);

    return(
        <div>
            <Header backButtonExists headerTitle={RESOURSES.AMIIBO.HEADER} onClick={ ()=> history.goBack() } />
            <div className="amiibos-content">
                {amiibos.map((item, index) => {
                    return(<AmiiboPreview amiibo={item} key={index} />);
                })}
            </div>
        </div>
    );
}

export default Amiibos;