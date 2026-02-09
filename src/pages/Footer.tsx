import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { m, type Easing } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import FooterImage from 'src/assets/footer_image.webp'
import OurName from 'src/components/OurName'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

// Animation Variants
const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
}

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as Easing },
  },
}

const Footer = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Stack
      mt={5}
      component={m.footer}
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Grid
        container
        direction={{ xs: 'column', sm: 'row' }}
        flexWrap="nowrap"
        alignItems="center"
      >
        <Grid
          component={m.div}
          variants={ITEM_VARIANTS}
          sx={{ width: { xs: '80%', sm: '400px' }, minWidth: '300px' }}
        >
          <StyledImage src={FooterImage} alt="Footer" />
        </Grid>
        <Grid component={m.div} variants={ITEM_VARIANTS} mt={{ xs: 3, sm: 0 }}>
          <Typography
            align="center"
            sx={{
              fontFamily: 'subtitleFont',
              fontSize: {
                xs: isEnglish ? '2rem' : '1.5rem',
                sm: isEnglish ? '2.5rem' : '1.5rem',
              },
              lineHeight: {
                xs: isEnglish ? 1 : 1.5,
                sm: isEnglish ? 0.8 : 1.6,
              },
              px: { xs: 2, sm: 4 },
            }}
          >
            {t('landing.footerMsg')}
          </Typography>
        </Grid>
      </Grid>
      <m.div
        variants={ITEM_VARIANTS}
        style={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}
      >
        <OurName />
      </m.div>
    </Stack>
  )
}

export default Footer
