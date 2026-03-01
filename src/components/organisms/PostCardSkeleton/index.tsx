import { Skeleton } from '../../atoms/Skeleton';
import {
  SkeletonCard,
  SkeletonImage,
  SkeletonBody,
  SkeletonHeader,
  SkeletonTextBlock,
  SkeletonBadges,
} from './styles';

export function PostCardSkeleton() {
  return (
    <SkeletonCard aria-hidden>
      <SkeletonImage />
      <SkeletonBody>
        <SkeletonHeader>
          <Skeleton $width="60px" $height="12px" />
          <Skeleton $width="80px" $height="12px" />
        </SkeletonHeader>
        <SkeletonTextBlock>
          <Skeleton $width="90%" $height="20px" />
          <Skeleton $width="70%" $height="20px" />
          <Skeleton $width="100%" $height="16px" />
          <Skeleton $width="85%" $height="16px" />
        </SkeletonTextBlock>
        <SkeletonBadges>
          <Skeleton $width="72px" $height="24px" />
          <Skeleton $width="64px" $height="24px" />
        </SkeletonBadges>
      </SkeletonBody>
    </SkeletonCard>
  );
}
