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
        px={{ xs: 1, sm: 5 }}
        py={{ xs: 8, sm: isEnglish ? 16 : 10 }}
      >
        <HalimumTitle
          mt={isEnglish ? { xs: 4, sm: 0 } : { xs: 0, sm: 4 }}
          mb={isEnglish ? 0 : 3}
        >
          {t('landing.title.saveTheDate')}
        </HalimumTitle>
        <Typography
          variant="h1"
          mb={isEnglish ? 0 : { xs: 2, sm: 3 }}
          fontFamily="titleFont"
          {...(isEnglish
            ? {}
            : { sx: { fontSize: { xs: '1.75rem', sm: '3rem' } } })}
        >
          {t('landing.weddingDate')}
        </Typography>
        <StyledImage
          src={Date}
          alt="date"
          marginTop={{ xs: -6, sm: -16 }}
          marginLeft={{ xs: -2, sm: -5 }}
        />
        <Typography
          variant="h1"
          fontFamily="titleFont"
          marginTop={isEnglish ? { xs: -6, sm: -12 } : { xs: -3, sm: -6 }}
          {...(isEnglish
            ? {}
            : { sx: { fontSize: { xs: '1.75rem', sm: '3rem' } } })}
        >
          {t('landing.weddingTime')}
        </Typography>
      </Grid>
    </Box>
  )
}

export default SaveTheDate
