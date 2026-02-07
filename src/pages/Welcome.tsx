import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'
import HandsImage from 'src/assets/welcome_hands.svg'
import TitleImage from 'src/assets/welcome_title.svg'
import OurName from 'src/components/OurName'
import StyledButton from 'src/components/StyledButton'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const Welcome = () => {
  const { t, i18n } = useTranslation()
  const navigate = useNavigate()
  const { isEnglish } = useLanguage()
  const [toggleVisibility, setToggleVisibility] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setToggleVisibility(true), 0)
    return () => clearTimeout(timer)
  }, [])

  const handleOnClick = () => {
    setToggleVisibility(false)
    setTimeout(() => {
      navigate('/main')
    }, 900)
  }
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="90vh"
      sx={{
        opacity: toggleVisibility ? 1 : 0,
        transition: 'opacity 1.2s ease',
        mt: -5,
      }}
    >
      <Box display="flex" flexDirection="column" minHeight="500px">
        <StyledImage
          src={TitleImage}
          alt="We are married"
          sx={{
            width: { xs: '250px', sm: '350px' },
          }}
        />
        <StyledImage
          src={HandsImage}
          alt="Holding hands"
          sx={{
            width: { xs: '300px', sm: '450px' },
          }}
        />
        <Box>
          <OurName
            sx={{
              letterSpacing: 0,
              fontSize: { xs: '4.5rem', sm: '6rem' },
              lineHeight: 0.75,
            }}
          />
          <Typography
            key={i18n.language}
            className="flip-animate"
            align="center"
            sx={{
              fontFamily: 'subtitleFont',
              fontSize: isEnglish
                ? { xs: '2.5rem', sm: '3rem' }
                : { xs: '1.5rem', sm: '1.8rem' },
              lineHeight: isEnglish ? { xs: 1.2, sm: 1 } : { xs: 2, sm: 1.8 },
              mt: isEnglish ? 0 : { xs: 1, sm: 1 },
            }}
          >
            <Trans
              i18nKey="welcomePage.fullWeddingDate"
              components={{
                sup: <sup />,
              }}
            />
          </Typography>
        </Box>
      </Box>
      <StyledButton
        variant="contained"
        sx={{
          fontSize: isEnglish
            ? { xs: '2rem', sm: '2.75rem' }
            : { xs: '1.5rem', sm: '1.75rem' },
          letterSpacing: isEnglish ? 1.3 : 3,
          width: { xs: '200px', sm: '300px' },
          height: { xs: '60px', sm: '60px' },
          borderRadius: 4,
          px: 2,
          mt: 2,
        }}
        onClick={handleOnClick}
      >
        <span key={i18n.language} className="flip-animate">
          {t('welcomePage.button')}
        </span>
      </StyledButton>
    </Stack>
  )
}

export default Welcome
