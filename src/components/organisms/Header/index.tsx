import { useState } from 'react';
import { Search } from 'lucide-react';
import { Typography } from '../../atoms/Typography';
import { Icon } from '../../atoms/Icon';
import { SearchInputForm } from '../../molecules/SearchInputForm';
import { InputWithBackAndClear } from '../../molecules/InputWithBackAndClear';
import { useSearch } from '../../../context/useSearch';

import {
  StyledHeader,
  StyledMain,
  StyledBrandLink,
  StyledBrandTextBlock,
  StyledBrandSecondary,
  StyledNav,
  StyledSearchButton,
  StyledSearchFormWrapper,
  StyledSearchOverlay,
  StyledSearchOverlayContent,
  StyledLastSearches,
  StyledLastSearchesTitle,
  StyledLastSearchItem,
} from './styles';
import { themeColors } from '../../../styles';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [overlaySearchValue, setOverlaySearchValue] = useState('');
  const { searchQuery, performSearch, lastSearches } = useSearch();

  const handleOpenSearch = () => {
    setOverlaySearchValue(searchQuery);
    setIsSearchOpen(true);
  };

  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setOverlaySearchValue('');
  };

  const handleSearchSubmit = (value: string) => {
    performSearch(value);
    handleCloseSearch();
  };

  const handleDesktopSearch = (value: string) => {
    performSearch(value);
  };

  const handleLastSearchClick = (term: string) => {
    performSearch(term);
    handleCloseSearch();
  };

  return (
    <>
      <StyledHeader>
        <StyledMain>
          <StyledBrandLink to="/" aria-label="Go to home">
            <StyledBrandTextBlock>
              <Typography variant="h2">dentsu</Typography>
              <StyledBrandSecondary>
                <Typography variant="bodySmall">world services</Typography>
              </StyledBrandSecondary>
            </StyledBrandTextBlock>
          </StyledBrandLink>
          <StyledNav aria-label="Search">
            <StyledSearchButton
              type="button"
              aria-label="Open search"
              onClick={handleOpenSearch}
            >
              <Icon
                icon={Search}
                size="md"
                aria-hidden
                background={themeColors.primary.light}
                color={themeColors.neutrals.lightest}
              />
            </StyledSearchButton>
            <StyledSearchFormWrapper>
              <SearchInputForm
                placeholder="Search"
                onSearch={handleDesktopSearch}
              />
            </StyledSearchFormWrapper>
          </StyledNav>
        </StyledMain>
      </StyledHeader>

      <StyledSearchOverlay
        $isOpen={isSearchOpen}
        aria-hidden={!isSearchOpen}
        role={isSearchOpen ? 'dialog' : undefined}
        aria-modal={isSearchOpen ? true : undefined}
        aria-label={isSearchOpen ? 'Search' : undefined}
      >
        <StyledSearchOverlayContent>
          <InputWithBackAndClear
            value={overlaySearchValue}
            onChange={(e) => setOverlaySearchValue(e.target.value)}
            onBack={handleCloseSearch}
            placeholder="Search"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearchSubmit(overlaySearchValue);
              }
            }}
          />
        </StyledSearchOverlayContent>
        {isSearchOpen && lastSearches.length > 0 && (
          <StyledLastSearches as="section" aria-label="Recent searches">
            <StyledLastSearchesTitle as="h2">
              <Typography variant="bodySmall" as="span">
                Recent searches
              </Typography>
            </StyledLastSearchesTitle>
            <ul>
              {lastSearches.map((term) => (
                <li key={term}>
                  <StyledLastSearchItem
                    type="button"
                    onClick={() => handleLastSearchClick(term)}
                  >
                    <Typography variant="bodySmall" as="span">
                      {term}
                    </Typography>
                  </StyledLastSearchItem>
                </li>
              ))}
            </ul>
          </StyledLastSearches>
        )}
      </StyledSearchOverlay>
    </>
  );
}
