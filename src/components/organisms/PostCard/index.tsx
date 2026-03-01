import { Typography } from '../../atoms/Typography';
import { Badge } from '../../atoms/Badge';
import { ImageWithFallback } from '../../molecules/ImageWithFallback';
import { themeColors } from '../../../styles';
import { formatPostDate } from '../../../utils/date';
import { extractExcerpt } from '../../../utils/text';
import type { PostCardProps } from './types';
import {
  StyledLink,
  StyledArticle,
  StyledBody,
  StyledHeader,
  StyledDot,
  StyledTextBlock,
  StyledTitle,
  StyledDescription,
  StyledBadges,
} from './styles';

export function PostCard({ post }: PostCardProps) {
  const excerpt = extractExcerpt(post.content);
  const formattedDate = formatPostDate(post.createdAt);
  const authorName = post.author?.name ?? 'Unknown';

  return (
    <StyledLink to={`/post/${post.id}`}>
      <StyledArticle>
        <ImageWithFallback
          src={post.thumbnail_url}
          alt={post.title ?? 'Post thumbnail'}
          height={196}
        />
        <StyledBody>
          <StyledHeader>
            <time dateTime={post.createdAt ?? ''}>
              <Typography variant="caption" color={themeColors.neutrals.dark}>
                {formattedDate}
              </Typography>
            </time>
            <StyledDot aria-hidden />
            <Typography variant="caption" color={themeColors.neutrals.dark}>
              {authorName}
            </Typography>
          </StyledHeader>
          <StyledTextBlock>
            <StyledTitle>
              <Typography variant="h3" color={themeColors.neutrals.darkest}>
                {post.title ?? 'Untitled'}
              </Typography>
            </StyledTitle>
            <StyledDescription>
              <Typography
                variant="bodySmall"
                color={themeColors.neutrals.extraDark}
              >
                {excerpt || 'No description available.'}
              </Typography>
            </StyledDescription>
          </StyledTextBlock>
          {post.categories && post.categories.length > 0 && (
            <StyledBadges>
              {post.categories.map((category) => (
                <li key={category.id}>
                  <Badge>{category.name ?? 'Category'}</Badge>
                </li>
              ))}
            </StyledBadges>
          )}
        </StyledBody>
      </StyledArticle>
    </StyledLink>
  );
}
