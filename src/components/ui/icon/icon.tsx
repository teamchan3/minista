import React from 'react';
import { Icon as MinistaIcon } from "minista";
import { withBaseProps, BaseProps } from '@/components/base';
import "./icon.css";

interface IconProps extends BaseProps {
  iconId: string;
}

function IconBase({ iconId, ...rest }: IconProps) {
  return (
    <span {...rest}>
      <MinistaIcon iconId={iconId} />
    </span>
  );
}

const Icon = withBaseProps(IconBase, 'c-icon');

export default Icon;