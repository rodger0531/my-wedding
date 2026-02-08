import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { m } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import OurName from 'src/components/OurName'
import { Colours } from 'src/constants/colour'

const LoadingScreen = () => {
  const { t } = useTranslation()

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0e0c3', // Match paper-like background
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    >
      <Stack alignItems="center" spacing={4}>
        <Box
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {/* 1. THE ROTATING RING: Stop-motion style rotation */}
          <m.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              border: `3px dashed ${Colours.WeddingRed}`,
              opacity: 0.4,
            }}
          />

          {/* 2. THE LOGO/NAME: Floating and Shimmering */}
          <Box sx={{ position: 'absolute' }}>
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 1 },
                y: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
              }}
            >
              <m.div
                animate={{
                  backgroundPosition: ['-200% center', '200% center'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  display: 'inline-block',
                  width: 'fit-content',
                }}
              >
                <OurName
                  sx={{
                    fontSize: '3rem',
                    lineHeight: 0.75,
                  }}
                />
              </m.div>
            </m.div>
          </Box>
        </Box>

        {/* 3. THE PERCENTAGE/TEXT: Staggered Fade */}
        <Box textAlign="center">
          <m.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: 'subtitleFont',
                letterSpacing: 2,
                color: '#4e4e4e',
                textTransform: 'uppercase',
                fontSize: { xs: '2rem', sm: '3rem' },
              }}
            >
              {t('loading.message')}
            </Typography>
          </m.div>
        </Box>
      </Stack>
    </Box>
  )
}

export default LoadingScreen
