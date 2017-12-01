import { palette } from '../Theme';

export default {
  baseButton: {
    outline: '0 !important',
    // display: 'inline-block',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
    textAlign: 'center',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    backgroundImage: 'none',
    borderWidth: '1px',
    borderStyle: 'solid',
    whiteSpace: 'nowrap',
    // paddingTop: '6px',
    // paddingBottom: '6px',
    // paddingLeft: '12px',
    // paddingRight: '12px',
    padding: '6px 12px',
    fontSize: '14px',
    lineHeight: '1.42857143',
    borderRadius: '2px',
    userSelect: 'none',
    transition: 'all 0.5s ease-in',
    textTransform: 'uppercase',
    fontFamily: '\'Fira sans\', sans-serif',
  },
  text: {
    textTransform: 'uppercase',
    letterSpacing: '0.0075em',
    display: 'flex',
  },
  disabled: {
    opacity: '0.6',
    transition: 'none',
    outline: '0 !important',
    cursor: 'not-allowed',
  },
  button: { color: 'darkgrey' },
};
