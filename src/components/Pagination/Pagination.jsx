import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button/Button';

import RESOURSES from '../utils/Resourses';

import './Pagination.scss';

function Pagination({ prev, actual, next,  }) {

    const state = useSelector(state => state); 
    const dispatch = useDispatch();

    const { amiibos } = state;

    const goToNextPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch({ type: 'NEXT_PAGE' });
    }

    const goToPrevPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch({ type: 'PREV_PAGE' });
    }

    const { page, lastPage } = amiibos;

    function hasNextPage() {
        if(page === lastPage){
            return false;
        }
        return true;
    }

    function hasPrevPage() {
        if(page === 0){
            return false;
        }
        return true;
    }

    const nextPageExists = hasNextPage();
    const prevPageExists = hasPrevPage();

    const prevPage = page;
    const prevPrevPage = prevPage - 1;
    const nextPage = page + 2;
    const nextNextPage = nextPage + 1;

    return(
        <div className="pagination-body">
            <Button text={RESOURSES.AMIIBO.PAGINATION.PREV_PAGE} disable={prevPageExists} onClick={prevPageExists ? () => goToPrevPage() : () => ''}/> 
            <div className="pages-button">
                { (page + 1) === 1 ?
                    <>
                        <Button text={page + 1} disable={true} active={true} onClick={ () => '' } /> 
                        <Button text={nextPage} disable={true} active={false} pageSelector /> 
                        <Button text={nextNextPage} disable={true} active={false} pageSelector />
                    </>
                : page === lastPage ? 
                    <>
                        <Button text={prevPrevPage} disable={true} active={false} pageSelector /> 
                        <Button text={prevPage} disable={true} active={false} pageSelector /> 
                        <Button text={page + 1} disable={true} active={true} onClick={ () => '' } />
                    </>
                : 
                    <>
                        <Button text={prevPage} disable={true} active={false} pageSelector /> 
                        <Button text={page + 1} disable={true} active={true} onClick={ () => '' } /> 
                        <Button text={nextPage} disable={true} active={false} pageSelector />
                    </>}
            </div>
            <Button text={RESOURSES.AMIIBO.PAGINATION.NEXT_PAGE} disable={nextPageExists} onClick={nextPageExists ? () => goToNextPage() : () => ''}/> 
        </div>
    );
}

export default Pagination;