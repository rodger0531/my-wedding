import Box from '@mui/material/Box'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useEffect } from 'react'
import StyledImage from 'src/components/StyledImage'
import { useDotButton } from 'src/hooks/useDotButton'
import { usePrevNextButtons } from 'src/hooks/usePrevNextButtons'
import { NextButton, PrevButton } from './CarouselArrow'
import { DotButton } from './CarouselDot'

interface CarouselProps {
  items: string[]
  entryIndex: number
}

const Carousel: React.FC<CarouselProps> = ({ items, entryIndex }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  useEffect(() => {
    if (emblaApi) {
      emblaApi.goTo(entryIndex, true)
    }
  }, [entryIndex, emblaApi])

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        maxWidth: '48rem',
        margin: 'auto',
      }}
    >
      <Box
        className="embla__viewport"
        ref={emblaRef}
        width="100%"
        height="100%"
        sx={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          className="embla__container"
          sx={{
            display: 'flex',
            height: '100%',
            touchAction: 'pan-y pinch-zoom',
            marginLeft: 'calc(1rem * -1)',
          }}
        >
          {items.map((url) => (
            <Box
              key={url}
              sx={{
                flex: '0 0 100%',
                minWidth: 0,
                paddingLeft: '1rem',
              }}
            >
              <StyledImage
                src={url}
                alt="Wedding Shoot Fullscreen"
                loading="lazy"
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        className="embla__controls"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: { xs: 0, sm: '50%' },
          transform: { xs: 'none', sm: 'translateX(-50%)' },
          width: { xs: '100%', sm: '45%' },
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <PrevButton onClick={onPrevButtonClick} />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginRight: 'calc((2.6rem - 1.4rem) / 2 * -1)',
          }}
        >
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              selected={index === selectedIndex}
            />
          ))}
        </Box>
        <NextButton onClick={onNextButtonClick} />
      </Box>
    </Box>
  )
}

export default Carousel
