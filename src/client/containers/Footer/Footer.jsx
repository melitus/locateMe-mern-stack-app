import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ copyright }) => (
  <section>{copyright}</section>
);

Footer.defaultProps = {
  copyright: '@2018 copyright Okiki'
};

Footer.propTypes = {
  copyright: PropTypes.string,
};

export default Footer;
