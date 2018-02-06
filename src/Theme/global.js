import { lighten } from './colorManipulator';
/** those are css`` mixins import */
import grid from './grid';
import fonts from './fonts';
import tooltip from './tooltip';
import synthaxHighlight from './synthaxHighlight';
import markdown from './markdown';
import layout from './layout';
import simpleLayout from './simpleLayout';
/**
 * injectGlobal: A helper method to write global CSS.
 * It does not return a component,
 * but adds the styles to the stylesheet directly.
 *
 * and I guess does not depend on the
 * theme provider to be already rendered -df
 */
/* eslint-disable indent */
/* eslint-disable prefer-template */
export const makeGlobalCSSInjector = (injectGlobal, theme) => {
  if (!theme) return () => console.warn('called `makeGlobalCSSInjector` without passing a theme');
  const {
    palette,
    transition,
  } = theme;

  return () => injectGlobal`
    ${fonts}

    * {
    }

    html {
      height: 100%;
      margin: 0;
      padding: 0;
      background: palette.white;
      font-family: 'Source Sans Pro', sans-serif;
      color: ${palette.darkGrey};
    }
    body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-size: 14px;
    }
    h1, h2, h3, h4: {
      color: ${palette.neutral.dark},
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    a {
        color: ${palette.accent.main};
        text-decoration: none;
      &:hover {
        color: ${lighten(palette.accent.main, 0.1)};
      }
    }

    svg {
      transition: all ${transition.duration + ' ' + transition.easing + ' ' + transition.delay};
    }
    /* little trick relating to SvgIcon: a svg wrapper */
    svg>svg { fill: inherit }

    /**
     * Extend using css from styled-components
     */
    ${grid}
    ${synthaxHighlight}
    ${markdown}
    ${tooltip}
    ${layout}
    ${simpleLayout}
`;
};

export default makeGlobalCSSInjector;
