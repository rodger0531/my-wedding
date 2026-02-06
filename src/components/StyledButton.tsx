import Button, { type ButtonProps } from '@mui/material/Button'

const StyledButton = ({ children, href, sx, ...props }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      {...(href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {})}
      sx={{
        minWidth: '250px',
        lineHeight: '2.5rem',
        borderRadius: '2rem',
        height: '50px',
        px: 5,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  )
}

export default StyledButton
