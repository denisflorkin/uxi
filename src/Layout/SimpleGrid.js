import styled from 'styled-components';

export const GridUI = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;  /* for IE11 only */
  flex-flow: row wrap;  /* for IE11 only */
  display: grid;
  grid-gap: ${({ gap }) => `${gap}px`};
  grid-template-columns: ${({ itemWidth }) => `repeat(auto-fill, minmax(${itemWidth}px, 1fr));`};
  font-size: inherit;
  & > * {
    box-sizing: border-box;
    ${({ itemWidth }) => `min-width: ${itemWidth}px`};
    ${({ itemHeight }) => `height: ${itemHeight}px`};
  }

  /* & {
    padding: ${({ gap }) => `${gap}px`};
  } */
  /**
   * add gap for flax layout, (no margin collapse with flex)
   * Target exclusively IE10 and above: */
  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    & {
      padding: ${({ gap }) => `${gap}px`};
    }
    & > * {
      margin: 8px;
      ${({ itemWidth }) => `max-width: ${itemWidth}px`};
      ${({ itemWidth }) => `width: ${itemWidth}px`};
    }
  }
`;

export default GridUI;
