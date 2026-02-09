import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import curlyLine from '../assets/curly_line.svg'
import hearts2 from '../assets/hearts_2.svg'
import weddingShoot1 from '../assets/wedding_shoot_1.webp'
import weddingShoot2 from '../assets/wedding_shoot_2.webp'
import weddingShoot3 from '../assets/wedding_shoot_3.webp'
import weddingShoot4 from '../assets/wedding_shoot_4.webp'
import weddingShootBanner from '../assets/wedding_shoot_banner.webp'
import StyledImage from '../components/StyledImage'

const IMAGES = [weddingShoot1, weddingShoot2, weddingShoot3, weddingShoot4]

const WeddingShoots = () => {
  return (
    <Box sx={{ width: '100%', py: 4 }}>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          mb: 4,
        }}
      >
        <StyledImage
          src={weddingShootBanner}
          alt="Wedding Shoot Banner"
          sx={{ width: '100%' }}
        />
        <StyledImage
          src={hearts2}
          alt="Hearts"
          sx={{
            position: 'absolute',
            top: { xs: 10, sm: 30 },
            left: 20,
            width: { xs: 120, sm: 230 },
            height: 'auto',
            zIndex: 2,
          }}
        />
        <StyledImage
          src={curlyLine}
          alt="Curly Line"
          sx={{
            position: 'absolute',
            top: { xs: -30, sm: -50 },
            right: 0,
            width: { xs: 60, sm: 100 },
            height: '100%',
            zIndex: 2,
          }}
        />
      </Box>

      <Grid container spacing={2} justifyContent="center">
        {IMAGES.map((img, idx) => (
          <Grid key={img} size={{ xs: 6, sm: 6 }}>
            <StyledImage
              src={img}
              alt={`Wedding Shoot ${idx + 1}`}
              sx={{
                objectFit: 'cover',
                borderRadius: 3,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default WeddingShoots
