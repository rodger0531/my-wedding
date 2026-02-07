import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import FooterImage from 'src/assets/footer_frame.png'
import OurName from 'src/components/OurName'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const Footer = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Stack mt={5}>
      <Grid container direction="row" flexWrap="nowrap" alignItems="center">
        <StyledImage
          src={FooterImage}
          alt="Footer"
          sx={{ width: { xs: '200px', sm: '400px' } }}
        />
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: 'subtitleFont',
            lineHeight: { xs: isEnglish ? 0.8 : 1.5, sm: isEnglish ? 1.5 : 2 },
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
