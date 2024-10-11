import React from 'react';

export interface BaseProps {
  className?: string;
  [key: string]: any;
}

export function withBaseProps<P extends BaseProps>(
  WrappedComponent: React.ComponentType<P>,
  baseClassName: string
) {
  return function BaseComponent(props: P) {
    const { className, ...rest } = props;
    const combinedClassName = `${baseClassName} ${className || ''}`.trim();
    return <WrappedComponent {...rest as P} className={combinedClassName} />;
  };
}