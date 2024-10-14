import "./list.css"
import { withBaseProps, BaseProps } from '@/components/base';

interface ListProps extends BaseProps {
  tag?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

function ListBase({ tag: Tag = 'ul', children, ...rest }: ListProps) {
  return (
    <Tag {...rest}>
      {children}
    </Tag>
  );
}

const List = withBaseProps(ListBase, 'c-list');

export default List;