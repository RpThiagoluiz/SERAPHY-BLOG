import { Skeleton } from '../../atoms/Skeleton';
import {
  SkeletonSidebar,
  SkeletonTitle,
  SkeletonSection,
  SkeletonSectionTitle,
  SkeletonFilterItem,
  SkeletonButton,
  SkeletonFilterBar,
} from './styles';

const FILTER_ITEMS_COUNT = 4;

export function FilterBarSkeleton() {
  return (
    <SkeletonFilterBar aria-hidden>
      <Skeleton $width="100px" $height="40px" />
      <Skeleton $width="100px" $height="40px" />
      <Skeleton $width="120px" $height="40px" />
    </SkeletonFilterBar>
  );
}

export function FiltersSkeleton() {
  return (
    <SkeletonSidebar aria-hidden>
      <SkeletonTitle>
        <Skeleton $width="24px" $height="24px" />
        <Skeleton $width="80px" $height="20px" />
      </SkeletonTitle>
      <SkeletonSection>
        <SkeletonSectionTitle>
          <Skeleton $width="60px" $height="16px" />
        </SkeletonSectionTitle>
        {Array.from({ length: FILTER_ITEMS_COUNT }).map((_, i) => (
          <SkeletonFilterItem key={i}>
            <Skeleton $width="100%" $height="14px" />
          </SkeletonFilterItem>
        ))}
      </SkeletonSection>
      <SkeletonSection>
        <SkeletonSectionTitle>
          <Skeleton $width="50px" $height="16px" />
        </SkeletonSectionTitle>
        {Array.from({ length: FILTER_ITEMS_COUNT }).map((_, i) => (
          <SkeletonFilterItem key={i}>
            <Skeleton $width="100%" $height="14px" />
          </SkeletonFilterItem>
        ))}
      </SkeletonSection>
      <SkeletonButton>
        <Skeleton $width="100%" $height="40px" />
      </SkeletonButton>
    </SkeletonSidebar>
  );
}
