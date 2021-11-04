import React from 'react';
// import PropTypes from 'prop-types';

import './style.scss';
import Page from 'src/components/Page';
import Players from 'src/containers/Players';

const Home = () => (
  <Page>
    <Players />
  </Page>
);

Home.propTypes = {

};

export default Home;
