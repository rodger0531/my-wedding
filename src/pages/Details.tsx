import LocationPinIcon from '@mui/icons-material/LocationPin'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import { Trans, useTranslation } from 'react-i18next'
import HalimumTitle from 'src/components/HalimumTitle'
import { useLanguage } from 'src/hooks/useLanguage'

const CIAOTAO_STATION_MAP_URL = 'https://maps.app.goo.gl/nLe8zdD5hJNWwwTb7'
const PARKING_MAP_URL = 'https://maps.app.goo.gl/kcbRStqNpmZXbV428'

const CATEGORIES = [
  'transportation',
  'accommodation',
  'childrenPolicy',
  'rsvp',
  'punctuality',
]
/* 
Can add contacts later:
    "contact": {
      "title": "緊急聯絡",
      "content": "婚禮當天若有任何問題，請聯繫招待總召 [姓名]：[電話]，我們將盡速為您服務。"
    },

*/

const Details = () => {
  const { t } = useTranslation()

  return (
    <Box px={2}>
      {/* <Box px={2} sx={{ userSelect: 'none' }}> */}
      <HalimumTitle mb={4}>{t('landing.title.details')}</HalimumTitle>
      {CATEGORIES.map((category) => {
        return <Topic key={category} category={category} />
      })}
    </Box>
  )
}

const Topic = ({ category }: { category: string }) => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Grid container>
      <Typography
        fontFamily="subtitleFont"
        align="left"
        sx={{
          fontSize: {
            xs: isEnglish ? '2.3rem' : '1.5rem',
            sm: isEnglish ? '3rem' : '1.9rem',
          },
          lineHeight: { xs: isEnglish ? 0.8 : 1.5, sm: isEnglish ? 0.8 : 1.4 },
        }}
        mb={1}
      >
        {t(`weddingDetails.${category}.title`)}
      </Typography>
      <Typography
        variant="h4"
        align="left"
        sx={{
          fontFamily: 'subtitleFont',
          fontSize: {
            xs: isEnglish ? '1.7rem' : '1.1rem',
            sm: isEnglish ? '2.1rem' : '1.4rem',
          },
          lineHeight: {
            xs: isEnglish ? 0.8 : 1.3,
            sm: isEnglish ? 0.8 : 1.4,
          },
          letterSpacing: isEnglish ? 0 : '0.02em',
          whiteSpace: 'pre-line',
        }}
        mb={4}
      >
        <Trans
          i18nKey={`weddingDetails.${category}.content`}
          components={{
            1: <strong />,
            2: <GoogleMapLink url={CIAOTAO_STATION_MAP_URL} />,
            3: <GoogleMapLink url={PARKING_MAP_URL} />,
          }}
        />
      </Typography>
    </Grid>
  )
}

export default Details

const GoogleMapLink: React.FC<{ url: string; children?: React.ReactNode }> = ({
  url,
  children,
}) => {
  const { isEnglish } = useLanguage()

  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        pl: { xs: '1.2rem', sm: '1.5rem' },
      }}
    >
      <LocationPinIcon
        sx={{
          position: 'absolute',
          left: 0,
          top: isEnglish ? '0.6em' : 0,
          fontSize: { xs: '1rem', sm: '1.3rem' },
        }}
      />
      <span>{children}</span>
    </Link>
  )
}
