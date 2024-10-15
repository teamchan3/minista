import {
  DESIGN_WIDTH,
  DESIGN_WIDTH_SP,
  SCREEN_SMALL,
  SCREEN_LARGE,
  BASE_FONT_SIZE,
} from "../config/constants";

export const pxToVW = (px: number): string => {
  return `${(px / DESIGN_WIDTH) * 100}vw`;
};

export const pxToVWSp = (px: number): string => {
  return `${(px / DESIGN_WIDTH_SP) * 100}vw`;
};

export const pxToRem = (px: number): string => {
  return `${px / BASE_FONT_SIZE}rem`;
};

interface FluidValueParams {
  minSize: number;
  maxSize: number;
  minWidth?: number;
  maxWidth?: number;
}

export const calculateFluidValue = ({
  minSize,
  maxSize,
  minWidth = SCREEN_SMALL,
  maxWidth = SCREEN_LARGE,
}: FluidValueParams): string => {
  const scale = ((maxSize - minSize) / (maxWidth - minWidth)) * 100;
  const base = minSize - (scale * minWidth) / 100;
  const round = (num: number, decimals: number = 5): number =>
    Number(num.toFixed(decimals));
  return `clamp(${minSize}px, calc(${round(base)}px + ${round(scale)}vw), ${maxSize}px)`;
};

export const extractBreakpoint = (value: string): string | null => {
  const bpMatch = value.match(/_([a-z]+)$/);
  return bpMatch ? bpMatch[1] : null;
};