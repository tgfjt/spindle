import * as React from 'react';

function SvgBellFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M20 15c1.2 1.6.1 4-2 4H6c-2.1 0-3.2-2.4-2-4l.4-.5c.4-.6.6-1.2.6-1.8V10c0-2.9 1.8-5.4 4.4-6.5C9.9 2.6 10.9 2 12 2s2.1.6 2.6 1.5C17.2 4.6 19 7.1 19 10v2.7c0 .6.2 1.3.6 1.8l.4.5zm-9.7 5c-.4 0-.6.4-.4.8.4.7 1.2 1.2 2.2 1.2 1 0 1.7-.5 2.2-1.2.2-.3 0-.8-.4-.8h-3.6z" />
    </svg>
  );
}

export default SvgBellFill;
