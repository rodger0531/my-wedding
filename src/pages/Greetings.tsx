import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import OurName from 'src/components/OurName'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const Greetings = () => {
  const { t, i18n } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <>
      <Grid key={i18n.language}>
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Typography
            className="flip-animate"
            align="center"
            sx={{
              position: 'relative',
              fontFamily: 'subtitleFont',
              fontWeight: 600,
              letterSpacing: isEnglish ? 0 : 3,
              fontSize: {
                xs: isEnglish ? '2rem' : '1.5rem',
                sm: isEnglish ? '3rem' : '2rem',
              },
              lineHeight: {
                xs: isEnglish ? 0.9 : 1.2,
                sm: isEnglish ? 1 : 1.6,
              },
              mx: 4,
              my: 1,
              '&::before': {
                position: 'absolute',
                fontFamily: 'serif',
                content: '"“"',
                color: 'text.primary',
                fontSize: { xs: '5rem', sm: '6rem' },
                opacity: 0.6,
                lineHeight: 0,
                verticalAlign: 'bottom',
                top: { xs: '0rem', sm: '0.5rem' },
                left: {
                  xs: isEnglish ? '-1rem' : '-1rem',
                  sm: isEnglish ? '-1rem' : '-2rem',
                },
              },
            }}
          >
            {t('landing.greetingMsg1')}
          </Typography>
          <Typography
            className="flip-animate"
            align="center"
            sx={{
              fontFamily: 'subtitleFont',
              letterSpacing: isEnglish ? 0 : 3,
              fontSize: {
                xs: isEnglish ? '1.7rem' : '1.2rem',
                sm: isEnglish ? '2.5rem' : '1.6rem',
              },
              lineHeight: {
                xs: isEnglish ? 0.8 : 1.2,
                sm: isEnglish ? 0.8 : 1.6,
              },
              m: 4,
              mt: 0,
            }}
          >
            {t('landing.greetingMsg2')}
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
            src={`${import.meta.env.BASE_URL}couple.svg`}
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
