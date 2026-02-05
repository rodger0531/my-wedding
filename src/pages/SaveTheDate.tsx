import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import Date from 'src/assets/date.svg'
import Frame from 'src/assets/frame1.svg'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledImage from 'src/components/StyledImage'

const SaveTheDate = () => {
  const { t } = useTranslation()
  return (
    <Box position="relative">
      <StyledImage
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
        <HalimumTitle>{t('landing.title.saveTheDate')}</HalimumTitle>
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
