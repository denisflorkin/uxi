import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'rc-tooltip';
import styled, { keyframes } from 'styled-components';
import defaults, { buttonReset, GlobalMenuItemBase } from './defaults';
import { PropsMapperMediaQueriesHOC } from '../internal/PropsMapperMediaQueriesHOC';

const {
  borderThickness,
  breakpoint,
} = defaults;

const getIconColor = ({ isSelected, isActive }) => {
  if (isActive) {
    return '#fff';
  }

  if (isSelected) {
    return '#0ea4a5';
  }

  return '#c2c2c2';
};

const fadeIn = keyframes`
  0%   { opacity: 0 }
  100% { opacity: 1 }
`;

const growIn = keyframes`
  0% {
    height: 0;
    max-height: 0px;
  }
  100% {
    height: auto;
    max-height: 60px;
  }
`;


const GlobalMenuItemDiv = styled.button`
  ${buttonReset};

  animation: ${fadeIn} ${({ theme }) => `${theme.transition.default}`};
  /**
   * this one is not working well enough
   * , ${growIn} ${({ theme }) => `${theme.transition.default}`};
   */
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#c2c2c2')};
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 auto;
  padding: ${`16px 0 16px ${borderThickness}`};
  position: relative;
  border-right: ${({ isSelected }) => (isSelected ?
    `${borderThickness} solid #0ea4a5` : `${borderThickness} solid transparent`)
};
  background: ${({ isSelected }) => (isSelected ? '#1b3c4f' : 'none')};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
  &:hover, &:focus {
    background: ${({ isSelected, theme: { palette } }) =>
    (isSelected ? palette.primary.main : palette.primary.light)
};
    *:not(svg) {
      color: ${({ theme: { palette } }) => palette.pureWhite};
      transition: ${({ theme: { transition } }) => transition.defaultAll};
    }
    svg {
      fill: #fff;
    }
  }
  svg {
    fill: ${props => (getIconColor(props))};
  }
  @media (min-width: ${breakpoint}) {
    justify-content: start;
    padding: 16px;
  }

  /** a11y */
  ${GlobalMenuItemBase}
`;

const LabelDiv = styled.div`
  display: none;
  @media (min-width: ${breakpoint}) {
    padding-left: 10px;
    display: block;

    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const NewInfo = styled.div`
    background-color: rgb(216, 27, 96);
    border-radius: 16px;
    line-height: 16px;
    color: #fff;
    width: 16px;
    height: 16px;
    font-size: 12px;
    position: absolute;
    top: 50%;
    right: 5px;
    transform: translate(0, -50%);
`;

const GlobalMenuItem = ({
  isSelected,
  Icon,
  index,
  hasNew,
  label,
  onClick,
  isActive,
  primaryColor,
}) => {
  let containerStyle;
  let isNewContent;

  if (hasNew) {
    isNewContent = (<NewInfo>!</NewInfo>);
  }

  // render the tooltip inert above window width of 699px
  const rules = [{
    minWidth: 700,
    mapper: ({ trigger }) => ({
      trigger: [],
      visible: false, // inject inexisting props
    }),
  }];

  return (
    <PropsMapperMediaQueriesHOC
      debounceDelay={400}
      rules={rules}
      trigger={['hover']}
    >
      <Tooltip placement="right" overlay={<span>{label}</span>}>
        <GlobalMenuItemDiv
          primaryColor={primaryColor}
          isSelected={isSelected}
          isActive={isActive}
          key={`mainMenuItemContainer-${index}`}
          style={containerStyle}
          onClick={onClick}
        >
          <Icon />
          <LabelDiv> {label} </LabelDiv>
          {isNewContent}
        </GlobalMenuItemDiv>
      </Tooltip>
    </PropsMapperMediaQueriesHOC>
  );
};

GlobalMenuItem.displayName = 'GlobalMenuItem';

GlobalMenuItem.propTypes = {
  isSelected: PropTypes.bool,
  Icon: PropTypes.any,
  index: PropTypes.string,
  hasNew: PropTypes.bool,
  label: PropTypes.node,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
  primaryColor: PropTypes.string,
};

export default GlobalMenuItem;
