import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Outliers = props => (
  <SvgIcon {...props}>
    <svg
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18.08 18.1"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M11.4,18.1H.65A.65.65,0,0,1,0,17.45V7.23a.66.66,0,0,1,.39-.6.66.66,0,0,1,.71.13L11.85,17a.66.66,0,0,1,.15.72A.64.64,0,0,1,11.4,18.1ZM1.3,16.8H9.77L1.3,8.74Z" />

          <path d="M13.25,15.72a.63.63,0,0,1-.46-.19L8.61,11.35a.64.64,0,0,1,0-.92l4.18-4.19a.68.68,0,0,1,.92,0l4.18,4.19a.65.65,0,0,1,0,.92l-4.18,4.18A.63.63,0,0,1,13.25,15.72ZM10,10.89l3.27,3.26,3.26-3.26L13.25,7.62Z" />

          <path d="M7.19,9.66a.62.62,0,0,1-.46-.19L2.54,5.29a.66.66,0,0,1,0-.92L6.73.18a.68.68,0,0,1,.92,0l4.18,4.19a.64.64,0,0,1,.19.46.68.68,0,0,1-.19.46L7.65,9.47A.65.65,0,0,1,7.19,9.66ZM3.92,4.83,7.19,8.09l3.26-3.26L7.19,1.56Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Outliers.propTypes = {
  color: PropTypes.string,
};

Outliers.defaultProps = {
  color: '#6d6d71',
};

export default Outliers;
