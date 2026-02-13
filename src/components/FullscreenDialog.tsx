import CloseIcon from '@mui/icons-material/Close'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import type { TransitionProps } from '@mui/material/transitions'
import React from 'react'

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<unknown>
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

interface FullscreenDialogProps {
  open: boolean
  handleClose: (open: boolean) => void
  children: React.ReactNode
}
const FullscreenDialog: React.FC<FullscreenDialogProps> = ({
  open,
  handleClose,
  children,
}) => {
  const onClose = () => {
    handleClose(false)
  }
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={onClose}
      slots={{ transition: Transition }}
      slotProps={{
        paper: {
          style: { backgroundColor: 'transparent' },
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={(theme) => ({
          position: 'absolute',
          right: 8,
          top: 4,
          color: theme.palette.grey[500],
          zIndex: 10,
        })}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      {children}
    </Dialog>
  )
}

export default FullscreenDialog
