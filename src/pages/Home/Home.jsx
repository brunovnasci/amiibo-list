import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

import history from '../../services/history';
import ROUTES from '../../routes/Routes';
import RESOURSES from '../../components/utils/Resourses'

import "./Home.scss";

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'CLEAR_AMIIBOS' });
    dispatch({ type: 'CLEAR_SEARCH' });
    // eslint-disable-next-line
  }, []);

  const toAllAmiibos = () => {
    history.push(ROUTES.ALL_AMIIBOS);
  }  

  const toFindAmiibos = () => {
    history.push(ROUTES.FIND_AMIIBOS);
  }

  const toNintendoSite = () => {
    window.open(RESOURSES.HOME.NINTENDO_SITE, "_blank");
  }

  return (
    <div>
      <Header headerTitle={RESOURSES.HOME.HEADER} />
      <div className="card-list">
        <Card text={RESOURSES.HOME.CARD_ONE.TEXT} image={RESOURSES.HOME.CARD_ONE.IMAGE} onClick={toAllAmiibos} />
        <Card text={RESOURSES.HOME.CARD_TWO.TEXT} image={RESOURSES.HOME.CARD_TWO.IMAGE} onClick={toFindAmiibos} />
      </div>
      <div className="nintendo-rights">
        <h1>{RESOURSES.HOME.NINTENDO_RIGHTS.TITLE}</h1>
        <p>{RESOURSES.HOME.NINTENDO_RIGHTS.SUBTITLE}</p>
        <div onClick={toNintendoSite}>
          <div className="redirect-button">
            <div className="icon">
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </div>
            <p>{RESOURSES.HOME.NINTENDO_RIGHTS.BUTTON_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
