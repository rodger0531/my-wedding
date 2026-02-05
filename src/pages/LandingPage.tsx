import Grid from '@mui/material/Grid'
import CountDown from './CountDown'
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
      <CountDown />
    </Grid>
  )
}

export default LandingPage
