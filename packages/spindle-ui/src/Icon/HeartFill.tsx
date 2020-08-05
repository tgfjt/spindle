import * as React from 'react';

function SvgHeartFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M10.05 20.33l-2.4-2.06c-1.75-1.5-3.23-3.29-4.37-5.29a6.844 6.844 0 01.53-7.6c2.03-2.6 6.03-2.38 7.76.43.2.32.66.32.85 0 1.73-2.81 5.73-3.03 7.76-.42 1.7 2.19 1.91 5.19.54 7.59-1.14 2-2.62 3.79-4.37 5.29l-2.4 2.06a3 3 0 01-3.9 0z" />
    </svg>
  );
}

export default SvgHeartFill;
