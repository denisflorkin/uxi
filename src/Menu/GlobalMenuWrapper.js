import React from 'react';
import PropTypes from 'prop-types';
import GlobalMenuContainer from './GlobalMenuContainer';
import GlobalMenuItem from './GlobalMenuItem';
import GlobalMenuSubItem from './GlobalMenuSubItem';
import GlobalMenuPanel from './GlobalMenuPanel';
import { Flex, FlexLeftCol } from '../Layout';

const FlexExtended = Flex.extend`
  position: absolute;
  top: auto;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 97;
  height: 100%;
  background: ${({ theme: { palette }}) => palette.primary.main};
`;

const GlobalMenuWrapper = ({
  selectedKey,
  logo,
  activeKey,
  backgroundColor,
  primaryColor,
  menuDescriptors,
  attachToViewport,
  innerStyle,
  fullViewportWidthPanel,
  handlePanelClickOutside,
}) => {
  const menuDescriptorsContent = [];

  (menuDescriptors || []).forEach((menuDescriptor) => {



    menuDescriptorsContent.push(
      <GlobalMenuItem
        key={menuDescriptor.key}
        isSelected={menuDescriptor.isSelected}
        isActive={menuDescriptor.isActive}
        onClick={menuDescriptor.onClick}
        hasNew={menuDescriptor.hasNew}
        label={menuDescriptor.displayName}
        index={menuDescriptor.key}
        Icon={menuDescriptor.Icon}
        primaryColor={primaryColor}
      />,
    );

    if (menuDescriptor.children && menuDescriptor.children.length > 0) {
      menuDescriptor.children.forEach((child) => {
        menuDescriptorsContent.push(
          <GlobalMenuSubItem
            key={child.key}
            isSelected={child.isSelected}
            isParentSelected={menuDescriptor.isSelected}
            isActive={child.isActive}
            onClick={child.onClick}
            hasNew={child.hasNew}
            content={child.content}
            displayName={child.displayName}
            index={child.key}
            primaryColor={primaryColor}
          />,
        );
      });
    }

    if (menuDescriptor && menuDescriptor.panel) {
      menuDescriptorsContent.push(
        /* this wrapper div required for layout context */
        <div>
          <GlobalMenuPanel
            key={menuDescriptor.key}
            onClickOutside={() => { handlePanelClickOutside(menuDescriptor.key); }}
            Title={menuDescriptor.panel.Title}
            Content={menuDescriptor.panel.Content}
            Action={menuDescriptor.panel.Action}
            width={menuDescriptor.panel.width}
            fullWidth={menuDescriptor.panel.fullWidth}
            isOpen={menuDescriptor.key === activeKey}
            attachToViewport={attachToViewport}
            fullViewportWidthPanel={fullViewportWidthPanel}
          />
        </div>
      )
    }

  });

  const gapFiller = <FlexExtended />
  // menuDescriptorsContent.push(gapFiller);

  return (
    <GlobalMenuContainer
      backgroundColor={backgroundColor}
      attachToViewport={attachToViewport}
      innerStyle={innerStyle}
      fullViewportWidthPanel={fullViewportWidthPanel}
    >
      {logo}
      {menuDescriptorsContent}
      {fullViewportWidthPanel && gapFiller}
    </GlobalMenuContainer>
  );
};

GlobalMenuWrapper.propTypes = {
  selectedKey: PropTypes.string,
  activeKey: PropTypes.string,
  logo: PropTypes.node,
  backgroundColor: PropTypes.string,
  primaryColor: PropTypes.string,
  menuDescriptors: PropTypes.array,
};

export default GlobalMenuWrapper;
