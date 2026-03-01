import { Typography } from '../../atoms/Typography';
import {
  EmptyPostsWrapper,
  EmptyPostsIcon,
  EmptyPostsTitle,
  EmptyPostsDescription,
} from './styles';
import { FileQuestion } from 'lucide-react';

export function EmptyPosts() {
  return (
    <EmptyPostsWrapper
      role="status"
      aria-live="polite"
      aria-label="No posts to display"
    >
      <EmptyPostsIcon aria-hidden>
        <FileQuestion size={64} strokeWidth={1.5} />
      </EmptyPostsIcon>
      <EmptyPostsTitle as="h2">
        <Typography variant="h3" as="span">
          No posts found
        </Typography>
      </EmptyPostsTitle>
      <EmptyPostsDescription as="p">
        <Typography variant="bodySmall" as="span">
          There are no posts to display at the moment. Try adjusting your
          filters or check back later for new content.
        </Typography>
      </EmptyPostsDescription>
    </EmptyPostsWrapper>
  );
}
