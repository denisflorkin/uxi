import React from 'react';
import AvatarWithName from '../Img/AvatarWithName';
import styled from 'styled-components';

const getTypeColor = ({ palette }, type) => {
  if (!type) { return palette.accent.main; }
  if (palette.semantic[type]) { return palette.semantic[type]; }
  return '#fff';
};

const ButtonLinkWrapper = styled.a`
  cursor: pointer;
  color: ${({ theme, type }) => getTypeColor(theme, type)};
  display: inline-block;
  &:hover {
    text-decoration: underline;
  }
  svg {
    color: ${({ theme, type }) => getTypeColor(theme, type)};
    fill: ${({ theme, type }) => getTypeColor(theme, type)};
  }
`;

const ButtonLink = ({ onClick, icon, text }) => {
  const content = icon ? (
    <AvatarWithName imgSize={16} icon={icon} name={text} />
  ) : (
    <div>{text}</div>
  );

  return (
    <ButtonLinkWrapper onClick={(e) => { e.preventDefault(); onClick(e); }}>
      {content}
    </ButtonLinkWrapper>
  );
};

export default ButtonLink;
