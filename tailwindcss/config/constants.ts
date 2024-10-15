export const DESIGN_WIDTH: number = 1280
export const DESIGN_WIDTH_SP: number = 375

export const SCREEN_XLARGE: number = 1680
export const SCREEN_LARGE: number = 1280
export const SCREEN_SMALL: number = 640

type Breakpoint = "xl" | "lg" | "md" | "sm"

export const SCREEN_SIZE_BY_BREAKPOINT: Record<Breakpoint, number> = {
  xl: 1680,
  lg: 1280,
  md: 960,
  sm: 640,
}

export const DESIGN_SIDE_PADDING: number = 96
export const DESIGN_SIDE_PADDING_SP: number = 24

export const CONTAINER_WIDTH: number = DESIGN_WIDTH - DESIGN_SIDE_PADDING * 2
export const CONTAINER_WIDTH_SP: number =
  DESIGN_WIDTH_SP - DESIGN_SIDE_PADDING_SP * 2

export const BASE_FONT_SIZE: number = 16
export const GRID_COLUMNS: number = 12
