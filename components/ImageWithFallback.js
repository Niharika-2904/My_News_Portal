
import Image from 'next/image'
import { useState } from 'react'

export default function ImageWithFallback({ src, alt, className, ...props }) {
  const [imgSrc, setImgSrc] = useState(src || '/placeholder.jpg')

  return (
    <Image
      src={imgSrc}
      alt={alt || 'image'}
      onError={() => setImgSrc('/placeholder.jpg')}
      {...props}
      className={className}
    />
  )
}
