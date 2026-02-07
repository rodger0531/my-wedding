import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

const TAIWAN_FLAG = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="%23fe0000"/><rect width="450" height="300" fill="%23000095"/><g fill="%23fff" transform="translate(225,150)"><path d="M0-100l13 62 50-37-25 58 61-2l-51 35 44 44-59-20 13 62-37-50-37 50 13-62-59 20 44-44-51-35 61 2-25-58 50 37z"/><circle r="43.75"/></g></svg>')`

const UK_FLAG = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><clipPath id="t"><path d="M30,15h30v15zv15h-30zh-30v-15zv-15h30z"/></clipPath><path d="M0,0v30h60v-30z" fill="%2300247d"/><path d="M0,0l60,30m0-30l-60,30" stroke="%23fff" stroke-width="6"/><path d="M0,0l60,30m0-30l-60,30" clip-path="url(%23t)" stroke="%23cf142b" stroke-width="4"/><path d="M30,0v30m-30-15h60" stroke="%23fff" stroke-width="10"/><path d="M30,0v30m-30-15h60" stroke="%23cf142b" stroke-width="6"/></svg>')`

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 40,
  padding: 0,

  // Base Thumb / Switch styles
  '& .MuiSwitch-switchBase': {
    padding: 3,
    '&.Mui-checked': {
      transform: 'translateX(40px)',

      // Checked Thumb Styles
      '& .MuiSwitch-thumb': {
        backgroundImage: TAIWAN_FLAG,
        filter: 'saturate(0.8) brightness(0.95) contrast(0.9)',
      },

      // Checked Track Styles (Consolidated logic)
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#f2f2ea', // Overrides default MUI primary color
        // Toggle Text Visibility
        '&::before': { opacity: 1 },
        '&::after': { opacity: 0 },
      },
    },
  },

  '& .MuiSwitch-thumb': {
    width: 34,
    height: 34,
    borderRadius: '50%',
    boxShadow: '0px 2px 4px 0px rgba(0,0,0,0.25)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // Default (Unchecked) State
    backgroundImage: UK_FLAG,
    filter: 'saturate(0.9) contrast(1)',
    transition: theme.transitions.create(['width', 'transform', 'filter'], {
      duration: 200,
    }),
  },

  '& .MuiSwitch-track': {
    borderRadius: 40,
    opacity: 1,
    backgroundColor: '#f2f2ea',
    boxSizing: 'border-box',
    boxShadow: 'inset 0px 1px 4px rgba(0,0,0,0.15)',
    position: 'relative',

    '&::before, &::after': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '0.85rem',
      fontWeight: 800,
      fontFamily: '"Chiron GoRound TC", "Varela Round", sans-serif',
      zIndex: 0,
      opacity: 0,
      transition: 'opacity 0.2s ease-in-out',
      pointerEvents: 'none',
      userSelect: 'none',
    },

    '&::before': {
      content: '"中文"',
      color: '#00247d',
      left: 10,
      textShadow: '0px 1px 0px rgba(255,255,255,0.6)',
    },

    '&::after': {
      content: '"EN"',
      color: '#cf142b',
      right: 12,
      textShadow: '0px 1px 0px rgba(255,255,255,0.6)',
      opacity: 1,
    },
  },
}))

export default MaterialUISwitch
