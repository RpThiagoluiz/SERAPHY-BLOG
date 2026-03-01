import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import '../../test/mocks/postDetailsMocks';
import { mockPost, mockPost2 } from '../../test/mocks/fixtures';

import PostDetails from './index';
import { theme } from '../../styles/theme';
import { usePosts, usePostById } from '../../hooks/usePosts';
import { useAuthorById } from '../../hooks/useAuthors';

const usePostsMock = vi.mocked(usePosts);
const usePostByIdMock = vi.mocked(usePostById);
const useAuthorByIdMock = vi.mocked(useAuthorById);

function createWrapper(initialEntries: string[] = ['/post/post-1']) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });

  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <MemoryRouter initialEntries={initialEntries} initialIndex={0}>
            <Routes>
              <Route path="/post/:id" element={children} />
            </Routes>
          </MemoryRouter>
        </ThemeProvider>
      </QueryClientProvider>
    );
  };
}

describe('PostDetails', () => {
  beforeEach(() => {
    usePostByIdMock.mockReturnValue({
      data: mockPost,
      isLoading: false,
      error: null,
      isError: false,
      isSuccess: true,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof usePostById>);

    usePostsMock.mockReturnValue({
      data: [mockPost, mockPost2],
      isLoading: false,
      error: null,
      isError: false,
      isSuccess: true,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof usePosts>);

    useAuthorByIdMock.mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
      isError: false,
      isSuccess: true,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof useAuthorById>);
  });

  it('renders post title and author', () => {
    const Wrapper = createWrapper();
    render(<PostDetails />, { wrapper: Wrapper });

    expect(
      screen.getByRole('heading', { name: 'Technology Trends' }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Written by:/)).toBeInTheDocument();
    expect(screen.getAllByText('Jane Doe').length).toBeGreaterThan(0);
  });

  it('renders Back button', () => {
    const Wrapper = createWrapper();
    render(<PostDetails />, { wrapper: Wrapper });

    const backLink = screen.getByRole('link', { name: /back/i });
    expect(backLink).toBeInTheDocument();
    expect(backLink).toHaveAttribute('href', '/');
  });

  it('renders post content', () => {
    const Wrapper = createWrapper();
    render(<PostDetails />, { wrapper: Wrapper });

    expect(
      screen.getByText('Exploring the latest in tech and innovation.'),
    ).toBeInTheDocument();
  });

  it('renders Latest articles section with related posts', () => {
    const Wrapper = createWrapper();
    render(<PostDetails />, { wrapper: Wrapper });

    expect(
      screen.getByRole('heading', { name: 'Latest articles' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Another Article')).toBeInTheDocument();
  });

  it('shows Post not found when post does not exist', () => {
    usePostByIdMock.mockReturnValue({
      data: null,
      isLoading: false,
      error: null,
      isError: false,
      isSuccess: true,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof usePostById>);

    const Wrapper = createWrapper(['/post/nonexistent']);
    render(<PostDetails />, { wrapper: Wrapper });

    expect(screen.getByText('Post not found')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /back/i })).toBeInTheDocument();
  });

  it('shows skeleton when post is loading', () => {
    usePostByIdMock.mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
      isError: false,
      isSuccess: false,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof usePostById>);

    const Wrapper = createWrapper();
    render(<PostDetails />, { wrapper: Wrapper });

    expect(document.querySelector('[class*="Skeleton"]')).toBeInTheDocument();
  });

  it('fetches author by id when post has no embedded author', () => {
    const postWithoutAuthor = {
      ...mockPost,
      author: undefined,
      authorId: 'author-1',
    };
    usePostByIdMock.mockReturnValue({
      data: postWithoutAuthor,
      isLoading: false,
      error: null,
      isError: false,
      isSuccess: true,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof usePostById>);

    usePostsMock.mockReturnValue({
      data: [postWithoutAuthor],
      isLoading: false,
      error: null,
      isError: false,
      isSuccess: true,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof usePosts>);

    useAuthorByIdMock.mockReturnValue({
      data: { id: 'author-1', name: 'Jane Doe', profilePicture: '' },
      isLoading: false,
      error: null,
      isError: false,
      isSuccess: true,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof useAuthorById>);

    const Wrapper = createWrapper();
    render(<PostDetails />, { wrapper: Wrapper });

    expect(screen.getByText(/Written by:/)).toBeInTheDocument();
    expect(screen.getAllByText('Jane Doe').length).toBeGreaterThan(0);
  });
});
