import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import ScheduleImage from 'src/assets/schedule.svg'
import HalimumTitle from 'src/components/HalimumTitle'
import StyledImage from 'src/components/StyledImage'

const Timeline = () => {
  const { t } = useTranslation()

  return (
    <Box>
      <HalimumTitle>{t('landing.timeline')}</HalimumTitle>
      <StyledImage src={ScheduleImage} alt="Schedule" width="100%" />
    </Box>
  )
}

export default Timeline
