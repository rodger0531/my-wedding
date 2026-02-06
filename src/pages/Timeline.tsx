import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import ScheduleImage from 'src/assets/timeline.png'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledImage from 'src/components/StyledImage'
import { useLanguage } from 'src/hooks/useLanguage'

const Timeline = () => {
  const { t } = useTranslation()
  const { isEnglish } = useLanguage()

  return (
    <Box>
      <HalimumTitle mb={isEnglish ? 0 : -1.5}>
        {t('landing.title.timeline')}
      </HalimumTitle>
      <StyledImage src={ScheduleImage} alt="Schedule" mt={4} />
    </Box>
  )
}

export default Timeline
