import { indigo } from '@mui/material/colors'
import { styled } from '@mui/material/styles'
import Switch from '@mui/material/Switch'

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 72,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(1px)',
    '&.Mui-checked': {
      transform: 'translateX(37px)',
      '& .MuiSwitch-thumb:before': {
        // --- Checked State: Taiwan Flag (Chinese) ---
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600"><rect width="900" height="600" fill="%23fe0000"/><rect width="450" height="300" fill="%23000095"/><g fill="%23fff" transform="translate(225,150)"><path d="M0-100l13 62 50-37-25 58 61-2l-51 35 44 44-59-20 13 62-37-50-37 50 13-62-59 20 44-44-51-35 61 2-25-58 50 37z"/><circle r="43.75"/></g></svg>')`,
      },
      '& + .MuiSwitch-track': {
        backgroundColor: 'transparent !important',
        '&::before': {
          display: 'block', // Show ZH when checked (On)
        },
        '&::after': {
          display: 'none', // Hide EN when checked (On)
        },
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: 'transparent',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: '50%',
      filter: 'saturate(0.8) brightness(1)',
      transition: theme.transitions.create(['filter'], {
        duration: 500,
      }),
      boxShadow: `
        inset 0 2px 3px rgba(255, 255, 255, 0.4),
        inset 0 -3px 5px rgba(0, 0, 0, 0.4),
        0 3px 6px rgba(0, 0, 0, 0.3)
      `,
      // --- Unchecked State: UK Flag (English) ---
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30"><clipPath id="t"><path d="M30,15h30v15zv15h-30zh-30v-15zv-15h30z"/></clipPath><path d="M0,0v30h60v-30z" fill="%2300247d"/><path d="M0,0l60,30m0-30l-60,30" stroke="%23fff" stroke-width="6"/><path d="M0,0l60,30m0-30l-60,30" clip-path="url(%23t)" stroke="%23cf142b" stroke-width="4"/><path d="M30,0v30m-30-15h60" stroke="%23fff" stroke-width="10"/><path d="M30,0v30m-30-15h60" stroke="%23cf142b" stroke-width="6"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    backgroundColor: 'transparent !important', // Force transparency
    opacity: '1 !important',
    position: 'relative',
    '&::before, &::after': {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: 16,
      fontWeight: 800,
      fontFamily: 'Chiron GoRound TC, Noto Sans, sans-serif',
    },
    '&::before': {
      content: '"中文"',
      color: theme.palette.primary.main,
      fontWeight: 800,
      left: -2,
      display: 'none', // Show ZH when unchecked (Off)
    },
    '&::after': {
      content: '"EN"',
      color: indigo[700],
      right: 4,
      display: 'block', // Hide EN when unchecked (Off)
    },
  },
  '@media (hover: hover)': {
    '&:hover': {
      '& .MuiSwitch-thumb:before': {
        filter: 'saturate(1) brightness(1)',
      },
    },
  },
}))

export default MaterialUISwitch
