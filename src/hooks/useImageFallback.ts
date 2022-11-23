import moviePlaceholder from '@src/assets/movie-placeholder.png'
import { useEffect, useState } from 'react'

export const useImageFallback = (imageUrl: string | null | undefined) => {
  const [imageSrc, setImageSrc] = useState(moviePlaceholder)

  const imageOnErrorHandler = () => {
    if (imageSrc !== moviePlaceholder) {
      setImageSrc(moviePlaceholder)
    }
  }

  useEffect(() => {
    if (imageUrl) {
      setImageSrc(imageUrl)
    }
  }, [imageUrl])

  return { imageOnErrorHandler, imageSrc }
}
