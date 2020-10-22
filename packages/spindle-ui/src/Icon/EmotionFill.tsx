import * as React from 'react';

function SvgEmotionFill(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="currentColor"
      role="img"
      {...props}
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.16 9.69c0-.84.67-1.52 1.5-1.52s1.5.68 1.5 1.52-.67 1.52-1.5 1.52-1.5-.68-1.5-1.52zm8.62 5.35a4.631 4.631 0 01-3.77 1.95c-1.49 0-2.9-.73-3.77-1.95a.894.894 0 01.21-1.25c.41-.29.97-.2 1.26.21.53.75 1.39 1.19 2.3 1.19.91 0 1.77-.45 2.3-1.19.29-.4.85-.5 1.25-.21.41.28.51.84.22 1.25zm-.44-3.83c-.83 0-1.5-.68-1.5-1.52s.67-1.52 1.5-1.52 1.5.68 1.5 1.52-.67 1.52-1.5 1.52z" />
    </svg>
  );
}

export default SvgEmotionFill;
