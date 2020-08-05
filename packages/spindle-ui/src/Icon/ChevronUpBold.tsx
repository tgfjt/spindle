import * as React from 'react';

function SvgChevronUpBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M21.47 14.55c0 .38-.15.77-.44 1.06-.59.59-1.54.59-2.12 0l-6.94-6.94-6.94 6.94c-.59.59-1.54.59-2.12 0-.58-.59-.59-1.54 0-2.12L10.2 6.2c.97-.97 2.56-.97 3.54 0l7.29 7.29c.3.29.44.67.44 1.06z" />
    </svg>
  );
}

export default SvgChevronUpBold;
