import React, { forwardRef } from 'react';

type Props = {
  hasError?: boolean;
  id: string;
} & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'>; // Layout styles should be added at containers

const BLOCK_NAME = 'spui-TextArea';

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  function TextArea(
    { children, hasError = false, id = '', ...rest }: Props,
    ref,
  ) {
    return (
      <textarea
        className={[`${BLOCK_NAME}`, hasError ? 'is-error' : ''].join(' ')}
        id={id}
        ref={ref}
        {...rest}
      >
        {children}
      </textarea>
    );
  },
);
