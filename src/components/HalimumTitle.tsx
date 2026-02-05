import Typography, { type TypographyProps } from '@mui/material/Typography'

const HalimumTitle = ({ children, ...props }: TypographyProps) => {
  return (
    <Typography variant="h3" align="center" fontFamily="Halimun" {...props}>
      {children}
    </Typography>
  )
}

export default HalimumTitle
