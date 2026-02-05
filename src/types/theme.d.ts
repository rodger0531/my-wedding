import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface TypographyOptions {
    titleFont?: string
    subtitleFont?: string
  }
  interface Typography {
    titleFont: string
    subtitleFont: string
  }
  interface TypographyVariants {
    titleFont: string
    subtitleFont: string
  }
  interface TypographyVariantsOptions {
    titleFont?: string
    subtitleFont?: string
  }
}
