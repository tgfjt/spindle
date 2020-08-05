import * as React from 'react';

function SvgCrossBold(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M18.72 16.6c.59.59.59 1.54 0 2.12-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44l-4.6-4.6-4.6 4.6c-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44a1.49 1.49 0 010-2.12l4.6-4.6-4.6-4.6a1.49 1.49 0 010-2.12c.59-.58 1.54-.59 2.12 0l4.6 4.6 4.6-4.6a1.49 1.49 0 012.12 0c.58.59.59 1.54 0 2.12l-4.6 4.6 4.6 4.6z" />
    </svg>
  );
}

export default SvgCrossBold;
