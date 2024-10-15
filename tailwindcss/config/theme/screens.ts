interface ScreenConfig {
  raw: string;
}

const screens: Record<string, ScreenConfig> = {
  "xl/down": {
    raw: "screen and (width > 1680px)",
  },
  "lg-xl": {
    raw: "screen and (width > 1280px) and (width <= 1680px)",
  },
  "lg/up": {
    raw: "screen and (width > 1280px)",
  },
  "lg/down": {
    raw: "screen and (width <= 1280px)",
  },
  "sm-lg": {
    raw: "screen and (width > 640px) and (width <= 1280px)",
  },
  "sm/up": {
    raw: "screen and (width > 640px)",
  },
  "sm/down": {
    raw: "screen and (width <= 640px)",
  },
}

export default screens
