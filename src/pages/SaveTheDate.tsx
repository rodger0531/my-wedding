import Date from '@/assets/date.svg'
import Frame from '@/assets/frame1.svg'
import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import HalimumTitle from 'src/components/HalimumTitle'

const SaveTheDate = () => {
  const { t } = useTranslation()
  return (
    <Box position="relative">
      <img
        src={Frame}
        alt="frame"
        width="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        px={5}
        py={16}
      >
        <HalimumTitle>{t('landing.saveTheDate')}</HalimumTitle>
        <Typography fontSize="6rem" fontFamily="Better Together">
          {t('landing.weddingDate')}
        </Typography>
        <Box
          component="img"
          src={Date}
          alt="date"
          width="120%"
          marginTop={-16}
          marginLeft={-5}
        />
        <Typography
          fontSize="5rem"
          fontFamily="Better Together"
          marginTop={-12}
        >
          {t('landing.weddingTime')}
        </Typography>
      </Grid>
    </Box>
  )
}

export default SaveTheDate
