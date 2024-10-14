import "./container.css"
import { withBaseProps, BaseProps } from '@/components/base';

interface ContainerProps extends BaseProps {
  tag?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

function ContainerBase({ tag: Tag = 'div', children, ...rest }: ContainerProps) {
  return (
    <Tag {...rest}>
      {children}
    </Tag>
  );
}

const Container = withBaseProps(ContainerBase, 'c-container');

export default Container;