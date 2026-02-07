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
        zIndex: 10,
      }}
    >
      <Box maxWidth={'900px'} margin="0 auto">
        {/* Added a subtle outer ring/padding to simulate the switch 
           sitting on top of the page texture 
        */}
        <Box
          sx={{
            display: 'inline-block',
            padding: '4px',
            borderRadius: '44px',
            boxShadow:
              '0px 2px 8px rgba(0,0,0,0.1), 0px 1px 3px rgba(0,0,0,0.05)',
            background: 'rgba(255,255,255,0.4)', // Subtle glass effect
            backdropFilter: 'blur(4px)',
          }}
        >
          <MaterialUISwitch
            checked={isChinese}
            onChange={handleChangeLanguage}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Header
