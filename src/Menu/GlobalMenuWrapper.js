import React from 'react';
import PropTypes from 'prop-types';
import GlobalMenuContainer from './GlobalMenuContainer';
import GlobalMenuItem from './GlobalMenuItem';
import GlobalMenuSubItem from './GlobalMenuSubItem';

const GlobalMenuWrapper = ({
  selectedKey,
  logo,
  activeKey,
  backgroundColor,
  primaryColor,
  menuDescriptors,
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

    if (menuDescriptor.children) {
      menuDescriptorsContent.push(
        <GlobalMenuSubItem
          key={menuDescriptor.key}
          isSelected={menuDescriptor.isSelected}
          isActive={menuDescriptor.isActive}
          onClick={menuDescriptor.onClick}
          hasNew={menuDescriptor.hasNew}
          label={menuDescriptor.displayName}
          index={menuDescriptor.key}
          primaryColor={primaryColor}
        />,
      );
    }
  });
  return (
    <GlobalMenuContainer backgroundColor={backgroundColor}>
      {logo}
      {menuDescriptorsContent}
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
