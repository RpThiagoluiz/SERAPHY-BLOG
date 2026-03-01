import { useState, type ImgHTMLAttributes } from 'react';
import { StyledImage, StyledImagePlaceholder } from './styles';

export interface ImageWithFallbackProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'src'
> {
  src?: string | null;
  alt: string;
  height?: number;
  borderRadius?: string;
  allSides?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  height = 196,
  borderRadius = 'xl',
  allSides = false,
  onError,
  ...imgProps
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const showPlaceholder = !src || hasError;

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    setHasError(true);
    onError?.(e);
  };

  if (showPlaceholder) {
    return (
      <StyledImagePlaceholder
        $height={height}
        $borderRadius={borderRadius}
        $allSides={allSides}
        aria-hidden
      />
    );
  }

  return (
    <StyledImage
      src={src}
      alt={alt}
      $height={height}
      $borderRadius={borderRadius}
      $allSides={allSides}
      onError={handleError}
      {...imgProps}
    />
  );
}
