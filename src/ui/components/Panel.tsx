import { HTMLProps } from 'react';

export const Panel = ({
  children,
  className,
  ...rest
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      className={`bg-[var(--background-dark)] rounded-[10px] ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};
