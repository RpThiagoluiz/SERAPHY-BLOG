import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import '../../test/mocks/homeMocks';
import { mockPost, mockCategory, mockAuthor } from '../../test/mocks/fixtures';

import Home from './index';
import { SearchProvider } from '../../context/SearchContext';
import { theme } from '../../styles/theme';
import { usePosts } from '../../hooks/usePosts';
import { useCategories } from '../../hooks/useCategories';
import { useAuthors } from '../../hooks/useAuthors';

const usePostsMock = vi.mocked(usePosts);
const useCategoriesMock = vi.mocked(useCategories);
const useAuthorsMock = vi.mocked(useAuthors);

function createWrapper(initialEntries: string[] = ['/']) {
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
              <Route
                path="/"
                element={<SearchProvider>{children}</SearchProvider>}
              />
            </Routes>
          </MemoryRouter>
        </ThemeProvider>
      </QueryClientProvider>
    );
  };
}

describe('Home', () => {
  beforeEach(() => {
    usePostsMock.mockReturnValue({
      data: [mockPost],
      isLoading: false,
      error: null,
      isError: false,
      isSuccess: true,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof usePosts>);

    useCategoriesMock.mockReturnValue({
      data: [mockCategory],
      isLoading: false,
      error: null,
      isError: false,
      isSuccess: true,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof useCategories>);

    useAuthorsMock.mockReturnValue({
      data: [mockAuthor],
      isLoading: false,
      error: null,
      isError: false,
      isSuccess: true,
      refetch: vi.fn(),
    } as unknown as ReturnType<typeof useAuthors>);
  });

  it('renders with title and posts data', () => {
    const Wrapper = createWrapper();
    render(<Home />, { wrapper: Wrapper });

    expect(screen.getByText('DWS Blog')).toBeInTheDocument();
    expect(screen.getAllByText('Technology Trends').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Technology').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Jane Doe').length).toBeGreaterThan(0);
  });

  it('renders filters from URL params', () => {
    const Wrapper = createWrapper(['/?search=tech&categories=cat-1']);

    render(<Home />, { wrapper: Wrapper });

    expect(screen.getAllByLabelText('Clean selection').length).toBeGreaterThan(
      0,
    );
    expect(screen.getAllByText('"tech", Technology').length).toBeGreaterThan(0);
  });

  it('filters posts by search query from URL', () => {
    const Wrapper = createWrapper(['/?search=Technology']);

    render(<Home />, { wrapper: Wrapper });

    expect(screen.getAllByText('Technology Trends').length).toBeGreaterThan(0);
  });

  it('shows empty state when no posts match filters', () => {
    const Wrapper = createWrapper(['/?search=nomatchxyz123']);

    render(<Home />, { wrapper: Wrapper });

    expect(
      screen.getByRole('heading', { name: /No posts found/i }),
    ).toBeInTheDocument();
  });

  it('clears all filters when SelectionChip remove is clicked', async () => {
    const Wrapper = createWrapper(['/?search=tech&categories=cat-1']);

    render(<Home />, { wrapper: Wrapper });

    const clearButtons = screen.getAllByLabelText('Clean selection');
    expect(clearButtons.length).toBeGreaterThan(0);
    fireEvent.click(clearButtons[0]);

    await waitFor(() => {
      expect(screen.queryAllByLabelText('Clean selection')).toHaveLength(0);
    });
  });

  it('toggles category filter on sidebar click', async () => {
    const Wrapper = createWrapper();

    render(<Home />, { wrapper: Wrapper });

    const sidebar = document.querySelector('aside');
    const sidebarCategoryButton = sidebar?.querySelector(
      'button:not([aria-haspopup])',
    ) as HTMLButtonElement;

    expect(sidebarCategoryButton).toBeTruthy();
    fireEvent.click(sidebarCategoryButton!);

    await waitFor(() => {
      expect(
        screen.getAllByLabelText('Clean selection').length,
      ).toBeGreaterThan(0);
    });
  });

  it('shows skeleton when filters are loading', () => {
    useCategoriesMock.mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    } as unknown as ReturnType<typeof useCategories>);

    useAuthorsMock.mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    } as unknown as ReturnType<typeof useAuthors>);

    const Wrapper = createWrapper();
    render(<Home />, { wrapper: Wrapper });

    expect(screen.getByText('DWS Blog')).toBeInTheDocument();
    expect(document.querySelector('[class*="Skeleton"]')).toBeInTheDocument();
  });
});
