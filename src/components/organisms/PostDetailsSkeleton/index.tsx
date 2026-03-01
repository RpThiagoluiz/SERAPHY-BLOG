import { Skeleton } from '../../atoms/Skeleton';
import { PostCardSkeleton } from '../PostCardSkeleton';
import {
  SkeletonPage,
  SkeletonBack,
  SkeletonHeader,
  SkeletonTitle,
  SkeletonAuthorBlock,
  SkeletonAvatar,
  SkeletonImage,
  SkeletonContent,
  SkeletonLatestSection,
  SkeletonLatestTitle,
  SkeletonGrid,
} from './styles';

export function PostDetailsSkeleton() {
  return (
    <SkeletonPage aria-hidden>
      <SkeletonBack>
        <Skeleton $width="24px" $height="24px" />
        <Skeleton $width="48px" $height="20px" />
      </SkeletonBack>
      <SkeletonHeader>
        <SkeletonTitle>
          <Skeleton $width="90%" $height="40px" />
          <Skeleton $width="70%" $height="40px" />
        </SkeletonTitle>
        <SkeletonAuthorBlock>
          <SkeletonAvatar />
          <div>
            <Skeleton $width="120px" $height="16px" />
            <Skeleton $width="80px" $height="14px" />
          </div>
        </SkeletonAuthorBlock>
      </SkeletonHeader>
      <SkeletonImage>
        <Skeleton $width="100%" $height="320px" />
      </SkeletonImage>
      <SkeletonContent>
        <Skeleton $width="100%" $height="16px" />
        <Skeleton $width="100%" $height="16px" />
        <Skeleton $width="95%" $height="16px" />
        <Skeleton $width="100%" $height="16px" />
        <Skeleton $width="80%" $height="16px" />
      </SkeletonContent>
      <SkeletonLatestSection>
        <SkeletonLatestTitle>
          <Skeleton $width="180px" $height="28px" />
        </SkeletonLatestTitle>
        <SkeletonGrid>
          <PostCardSkeleton />
          <PostCardSkeleton />
          <PostCardSkeleton />
        </SkeletonGrid>
      </SkeletonLatestSection>
    </SkeletonPage>
  );
}
