import { css } from 'styled-components';

const variables = css`
  :root {
  --dark-navy: #000000;
  --navy: #0a0a0a;
  --light-navy: #111111;
  --lightest-navy: #1a1a1a;
  --navy-shadow: rgba(0, 0, 0, 0.8);

  --dark-slate: #3f3f3f;
  --slate: #707070;
  --light-slate: #a0a0a0;
  --lightest-slate: #d0d0d0;
  --white: #f4f4f4;

  --green: #00ff9c; /* neon mint */
  --green-tint: rgba(0, 255, 156, 0.1);
  --pink: #ff4ec4;  /* hot pink glow */
  --blue: #3b82f6;  /* soft neon blue */

  --font-sans: 'IBM Plex Sans', 'Inter', 'San Francisco', -apple-system, system-ui, sans-serif;
  --font-mono: 'Fira Code', 'JetBrains Mono', monospace;

  --fz-xxs: 12px;
  --fz-xs: 13px;
  --fz-sm: 14px;
  --fz-md: 16px;
  --fz-lg: 18px;
  --fz-xl: 20px;
  --fz-xxl: 22px;
  --fz-heading: 32px;

  --border-radius: 6px;
  --nav-height: 100px;
  --nav-scroll-height: 70px;

  --tab-height: 42px;
  --tab-width: 120px;

  --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
  --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  --hamburger-width: 30px;

  --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
  --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
  --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
