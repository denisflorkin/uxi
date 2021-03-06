import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Group = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22.39 15.75"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M11.3,3.67A2.74,2.74,0,1,0,14,6.4,2.74,2.74,0,0,0,11.3,3.67Zm0,4.51A1.78,1.78,0,1,1,13.08,6.4,1.78,1.78,0,0,1,11.3,8.18Z" />
          <path d="M11.3,10.47c-3.15,0-5.36,1.65-5.36,4v1.28H16.66V14.47C16.66,12.12,14.46,10.47,11.3,10.47Zm4.17,4.09H7.13v-.09c0-1.65,1.72-2.8,4.17-2.8s4.17,1.15,4.17,2.8Z" />
          <path d="M17,0a2.74,2.74,0,1,0,2.74,2.74A2.74,2.74,0,0,0,17,0Zm0,4.52a1.78,1.78,0,1,1,1.78-1.78A1.78,1.78,0,0,1,17,4.52Z" />
          <path d="M17.14,6.82H17a7.37,7.37,0,0,0-2.44.43V8.53A5.83,5.83,0,0,1,17.08,8c2.43,0,4.12,1.17,4.12,2.81v.08H17c0,.43,0,.78,0,1.19h5.36V10.81C22.39,8.48,20.23,6.85,17.14,6.82Z" />
          <path d="M2.62,2.74A2.74,2.74,0,1,0,5.36,0,2.74,2.74,0,0,0,2.62,2.74Zm1,0A1.78,1.78,0,1,1,5.36,4.52,1.78,1.78,0,0,1,3.58,2.74Z" />
          <path d="M5.26,6.82h.1a7.37,7.37,0,0,1,2.44.43V8.53A5.83,5.83,0,0,0,5.31,8C2.88,8,1.19,9.17,1.19,10.81v.08H5.37c0,.43,0,.78,0,1.19H0V10.81C0,8.48,2.16,6.85,5.26,6.82Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Group.propTypes = {
  color: PropTypes.string,
};

Group.defaultProps = {
  color: '#6d6d71',
};

export default Group;
