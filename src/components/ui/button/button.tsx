import { Head } from "minista"
import "./button.css"
import { withBaseProps, BaseProps } from '@/components/ui/base';

interface ButtonProps extends BaseProps {
  tag?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
}

function ButtonBase({ tag: Tag = 'a', children, ...rest }: ButtonProps) {
  return (
    <>
      <Head>
        <script type="module" src="/src/components/ui/button/script.ts" data-minista-entry-name="components/ui/button" />
      </Head>
      <Tag {...rest}>
        {children}
      </Tag>
    </>
  );
}

const Button = withBaseProps(ButtonBase, 'c-button');

export default Button;