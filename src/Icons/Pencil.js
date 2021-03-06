import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Pencil = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 15.75 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M10.47.91,1.34,10a.66.66,0,0,0-.18.31L0,14.91a.68.68,0,0,0,.18.64.67.67,0,0,0,.64.18L5.4,14.59a.69.69,0,0,0,.31-.18l9.13-9.13a3.09,3.09,0,0,0,0-4.38l0,0a3.1,3.1,0,0,0-4.33,0ZM9.8,3.48l.76.76-.09.09-6,6L3.19,10.1ZM1.6,14.15l.71-2.85,1.78.35.36,1.78ZM12.18,6,5.65,12.57,5.4,11.3l0,0,6.07-6.07.76.76Zm1.71-4.18.3.42a1.8,1.8,0,0,1-.3,2L13.23,5,10.76,2.52l.66-.66A1.79,1.79,0,0,1,13.89,1.86Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Pencil.propTypes = {
  color: PropTypes.string,
};

Pencil.defaultProps = {
  color: '#6d6d71',
};

export default Pencil;
