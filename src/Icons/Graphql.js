import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Graphql = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14.44 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M13.45,9.8V6.26a1.61,1.61,0,0,0-.62-3.1,1.63,1.63,0,0,0-1.07.4L8.85,1.92a1.63,1.63,0,0,0,0-.31,1.61,1.61,0,1,0-3.22,0,1.73,1.73,0,0,0,0,.32l-3,1.67A1.61,1.61,0,1,0,1.11,6.3V9.75a1.61,1.61,0,1,0,1.64,2.67l2.94,1.65a1.73,1.73,0,0,0,0,.32,1.61,1.61,0,1,0,3.22,0,1.63,1.63,0,0,0,0-.31l2.88-1.62a1.61,1.61,0,0,0,2.71-1.18A1.58,1.58,0,0,0,13.45,9.8ZM3.2,4.49,5.9,3,2.12,9.42V6.3a1.61,1.61,0,0,0,1.1-1.53A2.64,2.64,0,0,0,3.2,4.49Zm9.24,1.85V9.4L8.74,3l2.51,1.42a2,2,0,0,0,0,.34A1.63,1.63,0,0,0,12.44,6.34Zm-9.3,4.44a1.78,1.78,0,0,0-.32-.57l4.12-7a1.64,1.64,0,0,0,.73,0l4,7a1.51,1.51,0,0,0-.4.65Zm7.74,1L8.36,13.2a1.63,1.63,0,0,0-2.17,0l-2.5-1.41Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Graphql.propTypes = {
  color: PropTypes.string,
};

Graphql.defaultProps = {
  color: '#6d6d71',
};

export default Graphql;
