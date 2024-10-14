import React from 'react';
import { Head } from "minista";
import { clsx } from "clsx";
import { withBaseProps, BaseProps } from '@/components/base';
import "./header.css";

interface HeaderProps extends BaseProps {
  // ヘッダー固有のプロパティがあれば、ここに追加します
}

function HeaderBase({ ...rest }: HeaderProps) {
  return (
    <>
      <Head>
        <script type="module" src="/src/components/global/header/script.ts" data-minista-entry-name="components/global/header" />
      </Head>
      <header {...rest}>
        <p>Header</p>
      </header>
    </>
  );
}

const Header = withBaseProps(HeaderBase, clsx('cmp-global-header'));

export default Header;