import Box from '@mui/material/Box'
import useEmblaCarousel from 'embla-carousel-react'
import React, { useEffect } from 'react'
import StyledImage from 'src/components/StyledImage'
import 'src/styles/embla.css'

interface CarouselProps {
  items: string[]
  selectedIndex: number
}

const Carousel: React.FC<CarouselProps> = ({ items, selectedIndex }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  useEffect(() => {
    if (emblaApi) {
      emblaApi.scrollTo(selectedIndex, true)
    }
  }, [selectedIndex, emblaApi])

  return (
    <Box className="embla" width="100%" height="100%">
      <Box
        className="embla__viewport"
        ref={emblaRef}
        width="100%"
        height="100%"
      >
        <Box className="embla__container" height="100%">
          {items.map((url) => (
            <div className="embla__slide" key={url}>
              <StyledImage
                src={url}
                alt="Wedding Shoot Fullscreen"
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Carousel
