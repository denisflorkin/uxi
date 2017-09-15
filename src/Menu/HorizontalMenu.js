import React from 'react';
import { Style } from 'radium';
import ThemeComponent from '../Base/ThemeComponent';
import HorizontalMenuStyle from './HorizontalMenu.style';

class HorizontalMenu extends ThemeComponent {
  render() {
    const { children, isMain } = this.props;
    const globalHeaderMergedStyle = this.getStyle('HorizontalMenu', HorizontalMenuStyle.root);

    const menuItems = React.Children.map(children, (child, menuNumber) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, {
          style: {
            display: 'inline-block',
            height: isMain ? this.context.theme.dimensions.mainHeaderHeight : '40px',
            lineHeight: isMain ? this.context.theme.dimensions.mainHeaderHeight : '40px',
          },
          key: `menuItem-${menuNumber}`,
        });
      }
      return child;
    });

    return (
      <ul className="uxi-horizontal-menu" style={globalHeaderMergedStyle}>
        <Style
          scopeSelector=".uxi-horizontal-menu"
          rules={{
            '.uxi-menu-item a': Object.assign({}, this.context.theme.link.linkOnBgDark, {
              display: 'block',
              paddingLeft: this.context.theme.padding.defaultPadding,
              paddingRight: this.context.theme.padding.defaultPadding,
              fontSize: '14px',
              transition: 'color 0.5s ease',
            }),
            '.uxi-menu-item a:hover': this.context.theme.link.linkOnBgDarktHover,
          }}
        />
        {menuItems}
      </ul>
    );
  }
}

export default HorizontalMenu;
