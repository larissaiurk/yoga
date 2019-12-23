import { css } from 'styled-components';

const hideQuery = ({
  xs: { width: xsWidth } = {},
  sm: { width: smWidth } = {},
  md: { width: mdWidth } = {},
  lg: { width: lgWidth } = {},
  xl: { width: xlWidth } = {},
  xxl: { width: xxlWidth } = {},
  xxxl: { width: xxxlWidth } = {},
}) => ({
  xxs: css`
    @media (max-width: ${xsWidth}px) {
      display: none !important;
    }
  `,
  xs: css`
    @media (min-width: ${xsWidth}px) and (max-width: ${smWidth - 1}px) {
      display: none !important;
    }
  `,
  sm: css`
    @media (min-width: ${smWidth}px) and (max-width: ${mdWidth - 1}px) {
      display: none !important;
    }
  `,
  md: css`
    @media (min-width: ${mdWidth}px) and (max-width: ${lgWidth - 1}px) {
      display: none !important;
    }
  `,
  lg: css`
    @media (min-width: ${lgWidth}px) and (max-width: ${xlWidth - 1}px) {
      display: none !important;
    }
  `,
  xl: css`
    @media (min-width: ${xlWidth}px) and (max-width: ${xxlWidth - 1}px) {
      display: none !important;
    }
  `,
  xxl: css`
    @media (min-width: ${xxlWidth}px) and (max-width: ${xxxlWidth - 1}px) {
      display: none !important;
    }
  `,
  xxxl: css`
    @media (min-width: ${xxxlWidth}px) {
      display: none !important;
    }
  `,
});

export default hideQuery;
