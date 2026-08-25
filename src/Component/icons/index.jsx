import React from 'react';

// Small, dependency-free outline icon set (24x24, stroke-based) so the
// portfolio doesn't need to pull in a full icon/component library.
const base = (size, strokeWidth = 1.8) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
});

export const GitHubIcon = ({ size = 20 }) => (
  <svg {...base(size)} fill="currentColor" stroke="none">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.5 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .28.18.6.69.5A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

export const LinkedInIcon = ({ size = 20 }) => (
  <svg {...base(size)} fill="currentColor" stroke="none">
    <path d="M6.94 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3.2 8.75h3.5V21H3.2V8.75Zm6.35 0h3.35v1.68h.05c.47-.87 1.6-1.79 3.3-1.79 3.53 0 4.18 2.28 4.18 5.24V21h-3.5v-5.62c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.44-2.16 2.96V21H9.55V8.75Z" />
  </svg>
);

export const TwitterIcon = ({ size = 20 }) => (
  <svg {...base(size)} fill="currentColor" stroke="none">
    <path d="M22 5.9c-.68.3-1.4.5-2.16.6a3.8 3.8 0 0 0 1.66-2.1c-.73.43-1.53.74-2.39.91a3.75 3.75 0 0 0-6.4 3.42A10.66 10.66 0 0 1 5.1 4.7a3.75 3.75 0 0 0 1.16 5 3.7 3.7 0 0 1-1.7-.47v.05a3.76 3.76 0 0 0 3 3.68 3.8 3.8 0 0 1-1.69.06 3.76 3.76 0 0 0 3.5 2.6A7.53 7.53 0 0 1 3 17.15a10.6 10.6 0 0 0 5.79 1.7c6.95 0 10.75-5.76 10.75-10.75l-.01-.49A7.7 7.7 0 0 0 22 5.9Z" />
  </svg>
);

export const MailIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const PhoneIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <path d="M6.6 10.8a13.6 13.6 0 0 0 6.6 6.6l2.2-2.2a1.2 1.2 0 0 1 1.23-.29 9.7 9.7 0 0 0 3.03.48 1.2 1.2 0 0 1 1.2 1.2V20a1.2 1.2 0 0 1-1.2 1.2A16.6 16.6 0 0 1 2.8 4.8 1.2 1.2 0 0 1 4 3.6h3.42a1.2 1.2 0 0 1 1.2 1.2c0 1.06.17 2.08.48 3.03.13.42.03.9-.29 1.23L6.6 10.8Z" />
  </svg>
);

export const DownloadIcon = ({ size = 18 }) => (
  <svg {...base(size)}>
    <path d="M12 3v12" />
    <path d="m7 10 5 5 5-5" />
    <path d="M4 19.5h16" />
  </svg>
);

export const ArrowRightIcon = ({ size = 18 }) => (
  <svg {...base(size)}>
    <path d="M4.5 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const SchoolIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <path d="m2 8 10-5 10 5-10 5-10-5Z" />
    <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" />
    <path d="M22 8v6.5" />
  </svg>
);

export const TrophyIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
    <path d="M7 5H4a1 1 0 0 0-1 1v1a4 4 0 0 0 4 4" />
    <path d="M17 5h3a1 1 0 0 1 1 1v1a4 4 0 0 1-4 4" />
    <path d="M12 13v3" />
    <path d="M8.5 20.5h7" />
    <path d="M9.5 16.5h5l.5 4h-6l.5-4Z" />
  </svg>
);

export const BadgeIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <circle cx="12" cy="8.5" r="5.5" />
    <path d="m8.2 13.2-1.7 8 5.5-3 5.5 3-1.7-8" />
  </svg>
);

export const ArticleIcon = ({ size = 20 }) => (
  <svg {...base(size)}>
    <rect x="4" y="3" width="16" height="18" rx="1.5" />
    <path d="M8 8h8M8 12h8M8 16h5" />
  </svg>
);
