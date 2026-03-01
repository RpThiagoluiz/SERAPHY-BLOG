import { useState, useMemo } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import {
  Typography,
  Button,
  PostCard,
  Dropdown,
  SortItem,
  SelectionChip,
} from '../../components';
import type { SortOrder } from '../../components';
import type { Post } from '../../api/types/post.types';
import { usePosts } from '../../hooks/usePosts';
import { useCategories } from '../../hooks/useCategories';
import { useAuthors } from '../../hooks/useAuthors';
import { useErrorNotifications } from '../../hooks/useNotifications';
import {
  HomePage,
  PageHeader,
  ContentSection,
  FilterBar,
  FilterBarChips,
  HomeLayout,
  Sidebar,
  SidebarTitle,
  FilterSection,
  FilterSectionTitle,
  FilterItemsList,
  SidebarFilterItem,
  MainContent,
  SortRow,
  PostsList,
  PostsGrid,
  PostCardWrapper,
  LoadingContainer,
} from './styles';

function filterAndSortPosts(
  posts: Post[],
  categoryIds: string[],
  authorIds: string[],
  sortOrder: SortOrder,
): Post[] {
  let filtered = posts;

  if (categoryIds.length > 0) {
    filtered = filtered.filter(
      (p) =>
        p.categories?.some((c) => c.id && categoryIds.includes(c.id)) ?? false,
    );
  }

  if (authorIds.length > 0) {
    filtered = filtered.filter(
      (p) => p.author?.id && authorIds.includes(p.author.id),
    );
  }

  const sorted = [...filtered].sort((a, b) => {
    const dateA = new Date(a.createdAt ?? 0).getTime();
    const dateB = new Date(b.createdAt ?? 0).getTime();
    return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
  });

  return sorted;
}

const Home = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const [appliedCategoryIds, setAppliedCategoryIds] = useState<string[]>([]);
  const [appliedAuthorIds, setAppliedAuthorIds] = useState<string[]>([]);

  const [sidebarCategoryId, setSidebarCategoryId] = useState<string | null>(
    null,
  );
  const [sidebarAuthorId, setSidebarAuthorId] = useState<string | null>(null);

  const {
    data: posts = [],
    isLoading: postsLoading,
    error: postsError,
  } = usePosts();
  const { data: categories = [], error: categoriesError } = useCategories();
  const { data: authors = [], error: authorsError } = useAuthors();

  const errorNotifications = useMemo(
    () => [
      [postsError, 'Failed to load posts. Please try again.'] as const,
      [
        categoriesError,
        'Failed to load categories. Please try again.',
      ] as const,
      [authorsError, 'Failed to load authors. Please try again.'] as const,
    ],
    [postsError, categoriesError, authorsError],
  );
  useErrorNotifications(errorNotifications);

  const categoryOptions = categories.map((c) => ({
    id: c.id,
    label: c.name ?? 'Category',
  }));

  const authorOptions = authors.map((a) => ({
    id: a.id,
    label: a.name ?? 'Author',
  }));

  const handleMobileCategorySelect = (id: string) => {
    setAppliedCategoryIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const handleMobileAuthorSelect = (id: string) => {
    setAppliedAuthorIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const handleApplyFilters = () => {
    setAppliedCategoryIds(sidebarCategoryId ? [sidebarCategoryId] : []);
    setAppliedAuthorIds(sidebarAuthorId ? [sidebarAuthorId] : []);
  };

  const filteredAndSortedPosts = filterAndSortPosts(
    posts,
    appliedCategoryIds,
    appliedAuthorIds,
    sortOrder,
  );

  const isLoading = postsLoading;
  const hasError = postsError || categoriesError || authorsError;

  return (
    <HomePage>
      <PageHeader as="header">
        <Typography variant="h2" as="h1">
          DWS Blog
        </Typography>
        <SortRow>
          <Typography variant="bodySmall" as="span">
            Sort by:
          </Typography>
          <SortItem value={sortOrder} onChange={setSortOrder} />
        </SortRow>
      </PageHeader>

      <ContentSection as="section" aria-label="Filters and posts list">
        <FilterBar>
          <Dropdown
            label="Category"
            options={categoryOptions}
            selectedIds={appliedCategoryIds}
            onSelect={handleMobileCategorySelect}
          />
          <Dropdown
            label="Author"
            options={authorOptions}
            selectedIds={appliedAuthorIds}
            onSelect={handleMobileAuthorSelect}
          />
          <SortItem value={sortOrder} onChange={setSortOrder} />
        </FilterBar>
        {(appliedCategoryIds.length > 0 || appliedAuthorIds.length > 0) && (
          <FilterBarChips>
            <SelectionChip
              label={[
                ...appliedCategoryIds.map(
                  (id) => categoryOptions.find((o) => o.id === id)?.label ?? '',
                ),
                ...appliedAuthorIds.map(
                  (id) => authorOptions.find((o) => o.id === id)?.label ?? '',
                ),
              ]
                .filter(Boolean)
                .join(', ')}
              onRemove={() => {
                setAppliedCategoryIds([]);
                setAppliedAuthorIds([]);
              }}
            />
          </FilterBarChips>
        )}

        <HomeLayout>
          <Sidebar>
            <SidebarTitle>
              <SlidersHorizontal size={20} strokeWidth={2} aria-hidden />
              <Typography variant="h3" as="h2">
                Filters
              </Typography>
            </SidebarTitle>
            <FilterSection>
              <FilterSectionTitle>Category</FilterSectionTitle>
              <FilterItemsList>
                {categories.map((cat) => (
                  <SidebarFilterItem
                    key={cat.id}
                    type="button"
                    $isSelected={sidebarCategoryId === cat.id}
                    onClick={() =>
                      setSidebarCategoryId((prev) =>
                        prev === cat.id ? null : cat.id,
                      )
                    }
                  >
                    {cat.name ?? 'Category'}
                  </SidebarFilterItem>
                ))}
              </FilterItemsList>
            </FilterSection>
            <FilterSection>
              <FilterSectionTitle>Author</FilterSectionTitle>
              <FilterItemsList>
                {authors.map((auth) => (
                  <SidebarFilterItem
                    key={auth.id}
                    type="button"
                    $isSelected={sidebarAuthorId === auth.id}
                    onClick={() =>
                      setSidebarAuthorId((prev) =>
                        prev === auth.id ? null : auth.id,
                      )
                    }
                  >
                    {auth.name ?? 'Author'}
                  </SidebarFilterItem>
                ))}
              </FilterItemsList>
            </FilterSection>
            <Button variant="primary" onClick={handleApplyFilters}>
              Apply filters
            </Button>
          </Sidebar>

          <MainContent as="section" aria-label="Posts list">
            {isLoading ? (
              <LoadingContainer>
                <Typography variant="bodySmall">Loading...</Typography>
              </LoadingContainer>
            ) : hasError ? (
              <LoadingContainer>
                <Typography variant="bodySmall">
                  Failed to load. Please check your connection.
                </Typography>
              </LoadingContainer>
            ) : (
              <>
                <PostsList>
                  {filteredAndSortedPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </PostsList>
                <PostsGrid>
                  {filteredAndSortedPosts.map((post) => (
                    <PostCardWrapper key={post.id}>
                      <PostCard post={post} />
                    </PostCardWrapper>
                  ))}
                </PostsGrid>
              </>
            )}
          </MainContent>
        </HomeLayout>
      </ContentSection>
    </HomePage>
  );
};

export default Home;
