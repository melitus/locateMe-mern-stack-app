import React from 'react';
import PropTypes from 'prop-types';

const Layout = ({ header, children, footer }) => (
  <div>
    <header>{header}</header>
    <main>{children}</main>
    <footer>{footer}</footer>
  </div>
);

Layout.propTypes = {
  header: PropTypes.element,
  children: PropTypes.element,
  footer: PropTypes.element,
};

export default Layout;
