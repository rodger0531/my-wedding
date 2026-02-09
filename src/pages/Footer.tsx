import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import FooterImage from 'src/assets/footer_image.webp'
import OurName from 'src/components/OurName'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const Footer = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Stack mt={5}>
      <Grid
        container
        direction={{ xs: 'column', sm: 'row' }}
        flexWrap="nowrap"
        alignItems="center"
      >
        <StyledImage
          src={FooterImage}
          alt="Footer"
          sx={{ width: { xs: '80%', sm: '400px' }, minWidth: '300px' }}
        />
        <Typography
          align="center"
          sx={{
            fontFamily: 'subtitleFont',
            fontSize: {
              xs: isEnglish ? '2rem' : '1.5rem',
              sm: isEnglish ? '2.5rem' : '1.5rem',
            },
            lineHeight: { xs: isEnglish ? 1 : 1.5, sm: isEnglish ? 1 : 2 },
          }}
        >
          {t('landing.footerMsg')}
        </Typography>
      </Grid>
      <OurName />
    </Stack>
  )
}

export default Footer
