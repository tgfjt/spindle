import * as React from 'react';

function SvgNotification(props: React.SVGProps<SVGSVGElement>) {
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
        d="M5.65 4c0-.55.45-1 1-1s1 .45 1 1v16c0 .55-.45 1-1 1s-1-.45-1-1V4zm5.45-.05l8.54 3.98c.77.36.77 1.45 0 1.8L11.1 13.7c-.12.06-.25.08-.38.09a.077.077 0 00-.02.005.058.058 0 01-.02.005.03.03 0 01-.015-.005.036.036 0 00-.015-.005.88.88 0 01-.33-.06l-.06-.03a.963.963 0 01-.25-.16c-.005-.005-.013-.01-.02-.015l-.02-.015a.877.877 0 01-.19-.27l-.015-.035a1.048 1.048 0 01-.085-.395V4.86a1.048 1.048 0 01.085-.395l.015-.035c.05-.1.11-.2.19-.28.01-.01.03-.02.04-.02.07-.07.16-.13.25-.17l.06-.03c.11-.04.22-.07.33-.07a.03.03 0 00.015-.005.036.036 0 01.015-.005c.005 0 .013.003.02.005a.064.064 0 00.02.005c.12.01.25.03.38.09z"
      />
    </svg>
  );
}

export default SvgNotification;
