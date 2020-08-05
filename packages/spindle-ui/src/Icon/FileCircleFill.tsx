import * as React from 'react';

function SvgFileCircleFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M15.3 9.9c.2.2.1.5-.2.5H13c-.3 0-.5-.2-.5-.5V7.8c0-.2.3-.4.5-.2l2.3 2.3zM22 12c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2s10 4.5 10 10zm-5.1-1.7c0-.4-.2-.9-.5-1.2l-2.7-2.7c-.2-.2-.7-.4-1.1-.4H9.8c-1 0-1.7.7-1.7 1.6v7.7c0 .9.7 1.7 1.7 1.7h5.5c.9 0 1.7-.7 1.7-1.7v-5h-.1z" />
    </svg>
  );
}

export default SvgFileCircleFill;
