import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { m, type Easing } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import AttireImage from 'src/assets/attire.svg'
import Colour1 from 'src/assets/colour_1.png'
import Colour2 from 'src/assets/colour_2.png'
import Colour3 from 'src/assets/colour_3.png'
import Colour4 from 'src/assets/colour_4.png'
import Colour5 from 'src/assets/colour_5.png'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

// Main orchestrator
const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.1,
    },
  },
}

// Standard fade for Title and Main Image
const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as Easing },
  },
}

// Stagger the blobs appearing
const BLOB_CONTAINER_VARIANTS = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }, // Time between each pop
  },
}

// 4. The "Pop In Place" Animation
const POP_VARIANTS = {
  hidden: {
    opacity: 0,
    scale: 0, // Start invisible and tiny
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 400, // Very snappy
      damping: 10, // Low damping = nice wobble at the end
      mass: 0.8,
    },
  },
}

const AttireGuide = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()
  const colours = [Colour1, Colour2, Colour3, Colour4, Colour5]

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      component={m.div}
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title */}
      <m.div variants={FADE_UP_VARIANTS}>
        <Typography variant="h1" fontFamily="titleFont" mb={isEnglish ? 0 : 3}>
          {t('landing.title.attireGuide')}
        </Typography>
      </m.div>

      {/* Main Illustration */}
      <m.div variants={FADE_UP_VARIANTS}>
        <StyledImage
          src={AttireImage}
          alt="Attire Guide"
          sx={{ width: { xs: '15rem', sm: '20rem' } }}
        />
      </m.div>

      {/* Color Palette - Popping Blobs */}
      <Grid
        container
        direction="row"
        spacing={1}
        justifyContent="center"
        my={4}
        component={m.div}
        variants={BLOB_CONTAINER_VARIANTS}
      >
        {colours.map((colour, index) => (
          <Grid key={index} component={m.div} variants={POP_VARIANTS}>
            <m.div
              // Interaction: Scales up further and wiggles
              whileHover={{
                scale: 1.2,
                rotate: index % 2 === 0 ? 15 : -15,
              }}
              whileTap={{ scale: 0.8 }}
            >
              <StyledImage
                src={colour}
                alt={`Colour Block ${index + 1}`}
                sx={{
                  width: { xs: '3.5rem', sm: '7rem' },
                  filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))',
                }}
              />
            </m.div>
          </Grid>
        ))}
      </Grid>

      {/* Footer Message */}
      <m.div variants={FADE_UP_VARIANTS}>
        <Typography
          variant="h4"
          {...(isEnglish ? {} : { lineHeight: 1.75 })}
          sx={{ fontFamily: 'subtitleFont', textAlign: 'center' }}
        >
          {t('landing.attireGuideMsg')}
        </Typography>
      </m.div>
    </Grid>
  )
}

export default AttireGuide
