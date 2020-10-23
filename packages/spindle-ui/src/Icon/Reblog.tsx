import * as React from 'react';

function SvgReblog(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M20 16.13v1c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3v-2.98H1.96c-.45 0-.67-.54-.35-.85l3.04-3.04c.2-.2.51-.2.71 0L8.4 13.3c.32.32.09.85-.35.85H6v2.98c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-1c0-.55.45-1 1-1s1 .45 1 1zm2.04-6.02H20V7.13c0-1.65-1.35-3-3-3H7c-1.65 0-3 1.35-3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2.98h-2.04c-.45 0-.67.54-.35.85L18.65 14c.2.2.51.2.71 0l3.04-3.04c.3-.31.08-.85-.36-.85z" />
    </svg>
  );
}

export default SvgReblog;
