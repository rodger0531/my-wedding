import VerticalAlignTopIcon from '@mui/icons-material/VerticalAlignTop'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

const BottomNavbar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
      }}
    >
      <Grid container width="100%" maxWidth="900px" justifyContent="flex-end">
        <Button
          disableRipple
          onClick={scrollToTop}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '2rem',
            color: '#333',
          }}
          aria-label="Scroll to top"
        >
          <VerticalAlignTopIcon fontSize="large" />
        </Button>
      </Grid>
    </nav>
  )
}

export default BottomNavbar
