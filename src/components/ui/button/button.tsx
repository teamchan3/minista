import { Head } from "minista"
import "./button.css"
import { withBaseProps, BaseProps } from '@/components/base'

interface ButtonProps extends BaseProps {
  tag?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

function ButtonBase({ tag: Tag = 'a', children, ...rest }: ButtonProps) {
  return (
    <>
      <Head>
      </Head>
      <Tag {...rest}>
        {children}
      </Tag>
    </>
  );
}

const Button = withBaseProps(ButtonBase, 'c-button');

export default Button;