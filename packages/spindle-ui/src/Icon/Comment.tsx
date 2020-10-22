import * as React from 'react';

function SvgComment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M15.04 21.42c-.32 0-.63-.1-.9-.3l-4.19-3.14H6c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v5.97c0 2.21-1.79 4-4 4h-1.46v1.94c0 .57-.32 1.09-.83 1.34-.21.12-.44.17-.67.17zM6 6c-1.1 0-2 .9-2 2v5.97c0 1.1.9 2 2 2h4.28c.22 0 .43.07.6.2l3.66 2.74v-1.94c0-.55.45-1 1-1H18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2H6z" />
    </svg>
  );
}

export default SvgComment;
