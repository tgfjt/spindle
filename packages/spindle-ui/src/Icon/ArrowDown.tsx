import * as React from 'react';

function SvgArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.07 13.32a.996.996 0 00-1.41 0L13 17.98V4c0-.55-.45-1-1-1s-1 .45-1 1v13.98l-4.66-4.66a.996.996 0 00-1.7.71c0 .26.1.51.29.71l5.66 5.66c.33.33.74.51 1.17.56.08.02.16.05.25.05s.17-.03.25-.05c.43-.05.84-.23 1.17-.56l5.66-5.66c.37-.4.37-1.03-.02-1.42z" />
    </svg>
  );
}

export default SvgArrowDown;
