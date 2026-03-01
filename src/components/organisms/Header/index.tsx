import { Search } from 'lucide-react';
import { Typography } from '../../atoms/Typography';
import { Icon } from '../../atoms/Icon';
import { SearchInputForm } from '../../molecules/SearchInputForm';

import {
  StyledHeader,
  StyledMain,
  StyledBrandLink,
  StyledBrandTextBlock,
  StyledBrandSecondary,
  StyledNav,
  StyledSearchButton,
  StyledSearchFormWrapper,
} from './styles';
import { themeColors } from '../../../styles';

export function Header() {
  return (
    <StyledHeader>
      <StyledMain>
        <StyledBrandLink to="/" aria-label="Ir para página inicial">
          <StyledBrandTextBlock>
            <Typography variant="h2">dentsu</Typography>
            <StyledBrandSecondary>
              <Typography variant="bodySmall">world services</Typography>
            </StyledBrandSecondary>
          </StyledBrandTextBlock>
        </StyledBrandLink>
        <StyledNav aria-label="Busca">
          <StyledSearchButton type="button" aria-label="Buscar">
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
  );
}
