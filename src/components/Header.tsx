import Box from '@mui/material/Box'
import { Language } from 'src/constants/lang'
import { useLanguage } from 'src/hooks/useLanguage'
import i18n from 'src/i18n'
import MaterialUISwitch from './LanguageSwitch'

const isDev = import.meta.env.DEV

const Header = () => {
  const { isChinese } = useLanguage()

  const handleChangeLanguage = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    i18n.changeLanguage(target.checked ? Language.ZH : Language.EN)
  }

  return (
    <Box
      sx={{
        position: isDev ? 'sticky' : 'static',
        top: isDev ? 0 : undefined,
        textAlign: 'right',
        mt: 2,
        mr: 2,
      }}
    >
      <Box maxWidth={'900px'} margin="0 auto">
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 72,
            height: 36,
            backgroundImage: 'url(/switch_background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            borderRadius: '32px',
            boxShadow: 'inset 0px 0px 4px 0px #5a5a5a',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.05)',
              borderRadius: 'inherit',
              pointerEvents: 'none',
            }}
          />
          <MaterialUISwitch
            checked={isChinese}
            onChange={handleChangeLanguage}
            sx={{ position: 'relative', zIndex: 1 }}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Header
