import styled from 'styled-components';
import { Search } from 'lucide-react';
import { Icon } from '../atoms/Icon';
import { Input } from '../atoms/Input';
import { themeColors } from '../../styles';

export interface SearchInputFormProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onSubmit'
> {
  onSearch?: (value: string) => void;
}

const SEARCH_BUTTON_SIZE = 40;
const GAP_RIGHT = 8;

const StyledForm = styled.form`
  width: 100%;
`;

const StyledContainer = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  max-width: 100%;
`;

const SearchInput = styled(Input)`
  padding-right: 48px;
  background-color: ${(props) => props.theme.colors.neutrals.lightest};
`;

const StyledSearchButton = styled.button`
  position: absolute;
  right: ${GAP_RIGHT}px;
  top: 50%;
  transform: translateY(-50%);
  width: ${SEARCH_BUTTON_SIZE}px;
  height: ${SEARCH_BUTTON_SIZE}px;
  min-width: ${SEARCH_BUTTON_SIZE}px;
  min-height: ${SEARCH_BUTTON_SIZE}px;
  padding: 0;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: ${(props) => props.theme.transition.interactive};

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent.medium};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export function SearchInputForm({
  onSearch,
  placeholder = 'Search',
  ...inputProps
}: SearchInputFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector('input');
    const value = input?.value ?? '';
    onSearch?.(value);
  };

  return (
    <StyledForm onSubmit={handleSubmit} data-search-input>
      <StyledContainer>
        <SearchInput placeholder={placeholder} {...inputProps} />
        <StyledSearchButton type="submit" aria-label="Buscar">
          <Icon
            icon={Search}
            size="md"
            background={themeColors.primary.light}
            color={themeColors.neutrals.lightest}
            aria-hidden
          />
        </StyledSearchButton>
      </StyledContainer>
    </StyledForm>
  );
}
