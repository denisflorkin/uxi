import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Idbadge = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 14.38"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M2.33,11.24A2.26,2.26,0,0,1,4.76,8.81h0a2.26,2.26,0,0,1,2.43,2.43Z" />
          <circle cx="4.76" cy="6.38" r="1.62" />
          <rect x="8.91" y="6.48" width="4.66" height="1.42" />
          <rect x="8.91" y="9.72" width="4.66" height="1.42" />
          <path d="M14.48,1.62H10.21l0-.07a2.31,2.31,0,0,0-4.37,0l0,.07H1.52A1.52,1.52,0,0,0,0,3.14v9.72a1.52,1.52,0,0,0,1.52,1.52h13A1.52,1.52,0,0,0,16,12.86V3.14A1.52,1.52,0,0,0,14.48,1.62ZM8,1.42a.91.91,0,1,1-.91.91A.91.91,0,0,1,8,1.42ZM1.42,13V3H5.79l0,.07a2.31,2.31,0,0,0,4.37,0l0-.07h4.37V13Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Idbadge.propTypes = {
  color: PropTypes.string,
};

Idbadge.defaultProps = {
  color: '#6d6d71',
};

export default Idbadge;
