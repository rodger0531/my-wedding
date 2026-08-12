import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { m, type Easing } from 'framer-motion'
import { useState } from 'react'
import Carousel from 'src/components/Carousel'
import FullscreenDialog from 'src/components/FullscreenDialog'
import curlyLine from '../assets/curly_line.svg'
import hearts2 from '../assets/hearts_2.svg'
import weddingShoot1 from '../assets/wedding_shoot_1.webp'
import weddingShoot2 from '../assets/wedding_shoot_2.webp'
import weddingShoot3 from '../assets/wedding_shoot_3.webp'
import weddingShoot4 from '../assets/wedding_shoot_4.webp'
import weddingShoot5 from '../assets/wedding_shoot_5.webp'
import weddingShoot6 from '../assets/wedding_shoot_6.webp'
import weddingShootBanner from '../assets/wedding_shoot_banner.webp'
import StyledImage from '../components/StyledImage'

const IMAGES = [
  weddingShoot1,
  weddingShoot2,
  weddingShoot6,
  weddingShoot4,
  weddingShoot3,
  weddingShoot5,
]

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
}

const PHOTO_VARIANTS = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.21, 1.02, 0.73, 1] as Easing,
    },
  },
}

const WeddingShoots = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // Handle opening specific image
  const handleImageClick = (index: number) => {
    setSelectedIndex(index)
    setDialogOpen(true)
  }

  return (
    <Box
      component={m.div}
      variants={CONTAINER_VARIANTS}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      sx={{ width: '100%', py: 2, overflow: 'hidden' }}
    >
      <Box sx={{ position: 'relative', width: '100%', mb: 4 }}>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <StyledImage
            src={weddingShootBanner}
            alt="Wedding Shoot Banner"
            loading="lazy"
            sx={{ width: '100%' }}
          />
        </m.div>

        {/* Decorations */}
        <m.div
          initial={{ opacity: 0, x: -50, rotate: -20 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 12,
            delay: 0.3,
          }}
          animate={{ scale: [1, 1.05, 1] }}
          style={{
            position: 'absolute',
            top: isMobile ? 10 : 30,
            left: 20,
            zIndex: 2,
          }}
        >
          <StyledImage
            src={hearts2}
            alt="Hearts"
            sx={{
              width: { xs: 120, sm: 230 },
              height: 'auto',
            }}
          />
        </m.div>

        <m.div
          initial={{ opacity: 0, y: -100, x: 50 }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: 0.6,
          }}
          style={{
            position: 'absolute',
            top: isMobile ? -30 : -50,
            right: 0,
            height: '100%',
            zIndex: 2,
          }}
        >
          <StyledImage
            src={curlyLine}
            alt="Curly Line"
            sx={{
              width: { xs: 60, sm: 100 },
              height: '100%',
            }}
          />
        </m.div>
      </Box>

      {/* Image Grid */}
      <Grid
        container
        spacing={2}
        sx={{
          justifyContent: 'center',
        }}
      >
        {IMAGES.map((img, index) => (
          <Grid key={img} size={6}>
            <m.div
              variants={PHOTO_VARIANTS}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
              style={{ height: '100%' }}
            >
              <StyledImage
                src={img}
                alt={`Wedding Shoot ${index + 1}`}
                loading="lazy"
                sx={{
                  objectFit: 'cover',
                  borderRadius: 3,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  cursor: 'pointer',
                  pointerEvents: 'auto',
                }}
                onClick={() => handleImageClick(index)}
              />
            </m.div>
          </Grid>
        ))}
      </Grid>

      {/* Fullscreen Slideshow */}
      <FullscreenDialog open={dialogOpen} handleClose={setDialogOpen}>
        <Box
          sx={{
            width: '100%',
            height: '100%',
            bgcolor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Carousel items={IMAGES} entryIndex={selectedIndex} />
        </Box>
      </FullscreenDialog>
    </Box>
  )
}

export default WeddingShoots
