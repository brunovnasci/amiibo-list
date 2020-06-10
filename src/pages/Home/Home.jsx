import React from "react";

import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";

import history from '../../services/history';
import ROUTES from '../../routes/Routes';
import RESOURSES from '../../components/utils/Resourses'

import "./Home.scss";

function Home() {

  const toAllAmiibos = () => {
    history.push(ROUTES.ALL_AMIIBOS);
  }  

  const toFindAmiibos = () => {
    // history.push(ROUTES.FIND_AMIIBOS);
    alert("CALMA AI!!! AINDA ESTOU FAZENDO")
  }

  return (
    <div>
      <Header headerTitle={RESOURSES.HOME.HEADER} />
      <div className="card-list">
        <Card text={RESOURSES.HOME.CARD_ONE} onClick={toAllAmiibos} />
        <Card text={RESOURSES.HOME.CARD_TWO} onClick={toFindAmiibos} />
      </div>
    </div>
  );
}
export default Home;
