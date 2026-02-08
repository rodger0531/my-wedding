import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Couple from 'src/assets/couple.svg'
import OurName from 'src/components/OurName'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const Greetings = () => {
  const { t, i18n } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <>
      <Grid>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            key={i18n.language}
            className="flip-animate"
            variant="h3"
            align="center"
            sx={{
              fontFamily: 'subtitleFont',
              letterSpacing: isEnglish ? 0 : 3,
              lineHeight: {
                xs: isEnglish ? 1.2 : 1.6,
                sm: isEnglish ? 1.2 : 1.9,
              },
              m: 4,
              mt: 1,
            }}
          >
            {t('landing.greetingMsg')}
          </Typography>
        </m.div>
      </Grid>

      <Grid width="100%" display="flex" justifyContent="center">
        <m.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.3, // Starts slightly after the text
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <StyledImage
            src={Couple}
            alt="Couple"
            sx={{ width: { xs: '350px', sm: '500px' } }}
          />
        </m.div>
      </Grid>

      <m.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          delay: 0.6,
          ease: 'easeOut',
        }}
      >
        <OurName />
      </m.div>
    </>
  )
}

export default Greetings
