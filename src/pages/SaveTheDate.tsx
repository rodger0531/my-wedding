import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import Date from 'src/assets/date.svg'
import Frame from 'src/assets/frame1.svg'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const SaveTheDate = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

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
        <Typography
          fontSize={isEnglish ? '6rem' : '3.5rem'}
          fontFamily="titleFont"
        >
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
          fontSize={isEnglish ? '5rem' : '3rem'}
          fontFamily="titleFont"
          marginTop={-12}
        >
          {t('landing.weddingTime')}
        </Typography>
      </Grid>
    </Box>
  )
}

export default SaveTheDate
