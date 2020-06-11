import React, { useState, useEffect } from 'react';

import Header from '../../components/Header/Header';
import AmiiboPreview from '../../components/AmiiboPreview/AmiiboPreview';
import Loading from '../../components/Loading/Loading';

import api from '../../services/amiibosApi';
import HOSTS from '../../hosts';
import RESOURSES from '../../components/utils/Resourses';
import history from '../../services/history';
import AMIIBO from '../../components/utils/Mocks';

import './Amiibos.scss';

function Amiibos(){
    
    const [ amiibos, setAmiibos ] = useState([]);
    const [ isLoading, setIsLoading] = useState(false);

    const getAmiibos = async () => {
        setIsLoading(true);
        try {
            //const response = await api.get(HOSTS.ENDPOINTS.GET_ALL_AMIIBOS);
            //setAmiibos(response.data.amiibo)
            setAmiibos(AMIIBO.amiibo);
        } catch(error){
            console.log(error)
        }
        
        setIsLoading(false);
    }

    const goBack = () =>{ 
        history.goBack() 
    }

    useEffect(() =>{
        getAmiibos();
    }, []);

    return(
        <>
            <div>
                <Header backButtonExists headerTitle={RESOURSES.AMIIBO.HEADER} onClick={ goBack } />
                { isLoading ? <Loading /> :
                <div className="amiibos-content">
                    {amiibos.map((item, index) => {
                        return(<AmiiboPreview amiibo={item} key={index} />);
                    })}
                </div>}
            </div>
        </>
    );
}

export default Amiibos;