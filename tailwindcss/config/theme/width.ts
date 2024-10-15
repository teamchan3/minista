const width: Record<string, string> = {
  container: "1680px",
}

export function applyWidthToMaxWidth(widthConfig: Record<string, string>) {
  const result: Record<string, string> = {}
  for (const [key, value] of Object.entries(widthConfig)) {
    result[key] = value
    if (value.endsWith('px')) {
      result[`max-${key}`] = value
    }
  }
  return result
}

export function extendWidthConfig() {
  return {
    width: applyWidthToMaxWidth(width),
    maxWidth: applyWidthToMaxWidth(width),
  }
}