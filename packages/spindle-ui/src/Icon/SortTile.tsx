import * as React from 'react';

function SvgSortTile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M7.5 8h-4c-.28 0-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5h4c.28 0 .5.22.5.5v4c0 .28-.22.5-.5.5zM8 20.5v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zM8 14v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zm6.5-6.5v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zm0 13v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zm0-6.5v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zM21 7.5v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zm0 13v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5zm0-6.5v-4c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v4c0 .28.22.5.5.5h4c.28 0 .5-.22.5-.5z" />
    </svg>
  );
}

export default SvgSortTile;
