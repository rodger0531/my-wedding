import Grid from '@mui/material/Grid'
import Greetings from './Greetings'

const LandingPage = () => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      maxWidth="800px"
      margin="0 auto"
    >
      <Greetings />
    </Grid>
  )
}

export default LandingPage
