import { useMemo } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import {
  Typography,
  PostCard,
  PostCardSkeleton,
  Dropdown,
  SortItem,
  SelectionChip,
  FilterBarSkeleton,
  FiltersSkeleton,
  EmptyPosts,
} from '../../components';
import type { SortOrder } from '../../components';
import type { Post } from '../../api/types/post.types';
import { useSearch } from '../../context/useSearch';
import { usePosts } from '../../hooks/usePosts';
import { useCategories } from '../../hooks/useCategories';
import { useAuthors } from '../../hooks/useAuthors';
import { useFiltersFromUrl } from '../../hooks/useFiltersFromUrl';
import { useErrorNotifications } from '../../hooks/useNotifications';
import { matchesSearch } from '../../utils/text';
import {
  HomePage,
  PageHeader,
  PageHeaderLeft,
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
  searchQuery: string,
): Post[] {
  let filtered = posts;

  if (searchQuery.trim()) {
    filtered = filtered.filter((p) =>
      matchesSearch(
        searchQuery,
        p.title,
        p.content,
        p.author?.name,
        ...(p.categories?.map((c) => c.name) ?? []),
      ),
    );
  }

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
  const { searchQuery } = useSearch();
  const {
    categoryIds: appliedCategoryIds,
    authorIds: appliedAuthorIds,
    sortOrder,
    setCategoryIds,
    setAuthorIds,
    setSortOrder,
    clearAllFilters,
  } = useFiltersFromUrl();

  const {
    data: posts = [],
    isLoading: postsLoading,
    error: postsError,
  } = usePosts();
  const {
    data: categories = [],
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useCategories();
  const {
    data: authors = [],
    isLoading: authorsLoading,
    error: authorsError,
  } = useAuthors();

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

  const handleCategorySelect = (id: string) => {
    setCategoryIds(
      appliedCategoryIds.includes(id)
        ? appliedCategoryIds.filter((x) => x !== id)
        : [...appliedCategoryIds, id],
    );
  };

  const handleAuthorSelect = (id: string) => {
    setAuthorIds(
      appliedAuthorIds.includes(id)
        ? appliedAuthorIds.filter((x) => x !== id)
        : [...appliedAuthorIds, id],
    );
  };

  const handleClearFilters = clearAllFilters;

  const hasActiveFilters =
    appliedCategoryIds.length > 0 ||
    appliedAuthorIds.length > 0 ||
    searchQuery.trim().length > 0;

  const appliedFiltersLabel = [
    ...(searchQuery.trim() ? [`"${searchQuery}"`] : []),
    ...appliedCategoryIds.map(
      (id) => categoryOptions.find((o) => o.id === id)?.label ?? '',
    ),
    ...appliedAuthorIds.map(
      (id) => authorOptions.find((o) => o.id === id)?.label ?? '',
    ),
  ]
    .filter(Boolean)
    .join(', ');

  const filteredAndSortedPosts = filterAndSortPosts(
    posts,
    appliedCategoryIds,
    appliedAuthorIds,
    sortOrder,
    searchQuery,
  );

  const isPostsLoading = postsLoading;
  const isFiltersLoading = categoriesLoading || authorsLoading;
  const hasError = postsError || categoriesError || authorsError;
  const hasNoPosts =
    !isPostsLoading && !hasError && filteredAndSortedPosts.length === 0;

  return (
    <HomePage>
      <PageHeader as="header">
        <PageHeaderLeft>
          <Typography variant="h2" as="h1">
            DWS Blog
          </Typography>
          {hasActiveFilters && (
            <SelectionChip
              label={appliedFiltersLabel}
              onRemove={handleClearFilters}
            />
          )}
        </PageHeaderLeft>
        <SortRow>
          <Typography variant="bodySmall" as="span">
            Sort by:
          </Typography>
          <SortItem value={sortOrder} onChange={setSortOrder} />
        </SortRow>
      </PageHeader>

      <ContentSection as="section" aria-label="Filters and posts list">
        {isFiltersLoading ? (
          <FilterBarSkeleton />
        ) : (
          <FilterBar>
            <Dropdown
              label="Category"
              options={categoryOptions}
              selectedIds={appliedCategoryIds}
              onSelect={handleCategorySelect}
            />
            <Dropdown
              label="Author"
              options={authorOptions}
              selectedIds={appliedAuthorIds}
              onSelect={handleAuthorSelect}
            />
            <SortItem value={sortOrder} onChange={setSortOrder} />
          </FilterBar>
        )}
        {hasActiveFilters && (
          <FilterBarChips>
            <SelectionChip
              label={appliedFiltersLabel}
              onRemove={handleClearFilters}
            />
          </FilterBarChips>
        )}

        <HomeLayout>
          {isFiltersLoading ? (
            <FiltersSkeleton />
          ) : (
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
                      $isSelected={appliedCategoryIds.includes(cat.id)}
                      onClick={() => handleCategorySelect(cat.id)}
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
                      $isSelected={appliedAuthorIds.includes(auth.id)}
                      onClick={() => handleAuthorSelect(auth.id)}
                    >
                      {auth.name ?? 'Author'}
                    </SidebarFilterItem>
                  ))}
                </FilterItemsList>
              </FilterSection>
            </Sidebar>
          )}

          <MainContent as="section" aria-label="Posts list">
            {isPostsLoading ? (
              <>
                <PostsList>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <PostCardWrapper key={i}>
                      <PostCardSkeleton />
                    </PostCardWrapper>
                  ))}
                </PostsList>
                <PostsGrid>
                  {Array.from({ length: 6 }).map((_, i) => (
                    <PostCardWrapper key={i}>
                      <PostCardSkeleton />
                    </PostCardWrapper>
                  ))}
                </PostsGrid>
              </>
            ) : hasError ? (
              <LoadingContainer>
                <Typography variant="bodySmall">
                  Failed to load. Please check your connection.
                </Typography>
              </LoadingContainer>
            ) : hasNoPosts ? (
              <EmptyPosts />
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
