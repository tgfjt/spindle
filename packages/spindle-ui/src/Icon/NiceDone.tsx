import * as React from 'react';

function SvgNiceDone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.98 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 .3-.02.6-.05.9-.06.55.33 1.04.88 1.11.55.06 1.04-.33 1.11-.88.04-.37.06-.74.06-1.12 0-5.51-4.49-10-10-10s-10 4.49-10 10 4.49 10 10 10c.55 0 1-.45 1-1s-.45-1.01-1-1.01zm-2.99-8.86a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6.04 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-3.01 5.88c-1.86 0-3.72-1.22-4.57-2.56a.51.51 0 01.27-.76c.87-.27 2.59-.69 4.3-.69 1.69 0 3.4.42 4.28.69.32.1.46.48.27.76-.9 1.34-2.69 2.56-4.55 2.56zm9.187-.727a.996.996 0 111.41 1.41l-3.76 3.76a1.497 1.497 0 01-2.01.1l-2.18-1.78a1 1 0 01-.14-1.41 1 1 0 011.41-.14l1.83 1.5 3.44-3.44z"
      />
    </svg>
  );
}

export default SvgNiceDone;
