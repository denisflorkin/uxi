import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
/* eslint-disable max-len */

const Process = props => (
  <SvgIcon {...props}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="24px"
      height="24px"
    >
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path d="M11.65,8.11V7.89a.47.47,0,0,0-.47-.47H10.4a2.3,2.3,0,0,0-.25-.59l.55-.55a.47.47,0,0,0,0-.67l-.16-.16a.47.47,0,0,0-.67,0L9.33,6a2.3,2.3,0,0,0-.59-.25V5a.47.47,0,0,0-.47-.47H8A.47.47,0,0,0,7.57,5v.78A2.3,2.3,0,0,0,7,6l-.55-.55a.47.47,0,0,0-.67,0L5.6,5.6a.47.47,0,0,0,0,.67l.55.55a2.3,2.3,0,0,0-.25.59H5.12a.47.47,0,0,0-.47.47v.23a.47.47,0,0,0,.47.47H5.9a2.29,2.29,0,0,0,.25.59l-.55.55a.47.47,0,0,0,0,.67l.16.16a.47.47,0,0,0,.67,0L7,10a2.3,2.3,0,0,0,.59.25V11A.47.47,0,0,0,8,11.5h.23A.47.47,0,0,0,8.74,11v-.78A2.3,2.3,0,0,0,9.33,10l.55.55a.47.47,0,0,0,.67,0l.16-.16a.47.47,0,0,0,0-.67l-.55-.55a2.29,2.29,0,0,0,.25-.59h.78A.47.47,0,0,0,11.65,8.11ZM8.15,9.17A1.17,1.17,0,1,1,9.32,8,1.17,1.17,0,0,1,8.15,9.17Z" />
          <path d="M8,0A7.93,7.93,0,0,0,2.56,2.16L1.42,1V4.6H5L3.69,3.29A6.34,6.34,0,0,1,8,1.6,6.41,6.41,0,0,1,14.4,8H16A8,8,0,0,0,8,0Z" />
          <path d="M14.79,11.45H11.21l1.19,1.19A6.39,6.39,0,0,1,1.6,8H0a8,8,0,0,0,13.52,5.76L14.79,15Z" />
        </g>
      </g>
    </svg>
  </SvgIcon>
);

Process.propTypes = {
  color: PropTypes.string,
};

Process.defaultProps = {
  color: '#6d6d71',
};

export default Process;
