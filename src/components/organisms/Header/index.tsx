import { useState } from 'react';
import { Search } from 'lucide-react';
import { Typography } from '../../atoms/Typography';
import { Icon } from '../../atoms/Icon';
import { SearchInputForm } from '../../molecules/SearchInputForm';
import { InputWithBackAndClear } from '../../molecules/InputWithBackAndClear';

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
} from './styles';
import { themeColors } from '../../../styles';

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleOpenSearch = () => setIsSearchOpen(true);
  const handleCloseSearch = () => {
    setIsSearchOpen(false);
    setSearchValue('');
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
              aria-label="Search"
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
              <SearchInputForm placeholder="Search" />
            </StyledSearchFormWrapper>
          </StyledNav>
        </StyledMain>
      </StyledHeader>

      <StyledSearchOverlay
        $isOpen={isSearchOpen}
        aria-hidden={!isSearchOpen}
        role={isSearchOpen ? 'dialog' : undefined}
        aria-modal={isSearchOpen ? true : undefined}
        aria-label={isSearchOpen ? 'Filtro de busca' : undefined}
      >
        <StyledSearchOverlayContent>
          <InputWithBackAndClear
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onBack={handleCloseSearch}
            placeholder="Search"
          />
        </StyledSearchOverlayContent>
      </StyledSearchOverlay>
    </>
  );
}
