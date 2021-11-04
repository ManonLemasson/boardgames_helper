import React from 'react';
// import PropTypes from 'prop-types';

import './style.scss';
import Page from 'src/components/Page';
import Score from 'src/containers/Score';

const Ohanami = () => (
  <Page>
    <Score />
  </Page>
);

Ohanami.propTypes = {

};

export default Ohanami;
