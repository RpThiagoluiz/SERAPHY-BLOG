import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, User } from 'lucide-react';
import {
  Typography,
  Button,
  PostCard,
  PostDetailsSkeleton,
  ImageWithFallback,
} from '../../components';
import { themeColors } from '../../styles';
import { usePostById } from '../../hooks/usePosts';
import { usePosts } from '../../hooks/usePosts';
import { useAuthorById } from '../../hooks/useAuthors';
import { formatPostDate } from '../../utils/date';
import {
  PostDetailsPage,
  BackButtonWrapper,
  ContentColumn,
  ArticleHeader,
  AuthorBlock,
  AuthorRow,
  AuthorAvatar,
  AuthorAvatarImg,
  AuthorIconWrapper,
  AuthorInfo,
  FeaturedImageWrapper,
  ArticleContent,
  LatestSection,
  LatestTitle,
  LatestGrid,
} from './styles';

export default function PostDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading: postLoading } = usePostById(id);
  const { data: posts = [] } = usePosts();
  const authorId = post?.authorId ?? post?.author?.id;
  const { data: authorById } = useAuthorById(
    authorId && !post?.author ? authorId : undefined,
  );

  const author = post?.author ?? authorById;
  const authorName = author?.name ?? 'Unknown';

  const latestPosts = useMemo(() => {
    const others = posts.filter((p) => p.id !== id);
    return others.slice(0, 3);
  }, [posts, id]);

  if (postLoading) {
    return <PostDetailsSkeleton />;
  }

  if (!post) {
    return (
      <PostDetailsPage>
        <BackButtonWrapper>
          <Link to="/">
            <Button variant="secondary" icon={ArrowLeft}>
              Back
            </Button>
          </Link>
        </BackButtonWrapper>
        <ContentColumn>
          <Typography
            variant="h2"
            color={themeColors.neutrals.darkest}
            as="div"
          >
            Post not found
          </Typography>
        </ContentColumn>
      </PostDetailsPage>
    );
  }

  return (
    <PostDetailsPage>
      <BackButtonWrapper>
        <Link to="/">
          <Button variant="secondary" icon={ArrowLeft}>
            Back
          </Button>
        </Link>
      </BackButtonWrapper>

      <ContentColumn>
        <ArticleHeader>
          <Typography variant="h2" color={themeColors.neutrals.darkest}>
            {post.title ?? 'Untitled'}
          </Typography>
          <AuthorBlock>
            <AuthorRow>
              <AuthorAvatar>
                {author?.profilePicture ? (
                  <AuthorAvatarImg
                    src={author.profilePicture}
                    alt={author.name ?? 'Author avatar'}
                    aria-hidden
                  />
                ) : (
                  <AuthorIconWrapper aria-hidden>
                    <User size={24} strokeWidth={2} />
                  </AuthorIconWrapper>
                )}
              </AuthorAvatar>
              <AuthorInfo>
                <Typography
                  variant="bodySmall"
                  color={themeColors.neutrals.darkest}
                >
                  Written by: <strong>{authorName}</strong>
                </Typography>
                <Typography
                  variant="caption"
                  color={themeColors.neutrals.medium}
                >
                  {formatPostDate(post.createdAt)}
                </Typography>
              </AuthorInfo>
            </AuthorRow>
          </AuthorBlock>
        </ArticleHeader>

        <article>
          <FeaturedImageWrapper>
            <ImageWithFallback
              src={post.thumbnail_url}
              alt={post.title ?? 'Featured image'}
              height={320}
              allSides
            />
          </FeaturedImageWrapper>

          <ArticleContent>
            {post.content
              ?.split('\n\n')
              .map((paragraph, i) => <p key={i}>{paragraph}</p>) ?? (
              <p>{post.content ?? ''}</p>
            )}
          </ArticleContent>
        </article>

        <LatestSection aria-labelledby="latest-articles-heading">
          <LatestTitle id="latest-articles-heading">
            Latest articles
          </LatestTitle>
          <LatestGrid>
            {latestPosts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </LatestGrid>
        </LatestSection>
      </ContentColumn>
    </PostDetailsPage>
  );
}
