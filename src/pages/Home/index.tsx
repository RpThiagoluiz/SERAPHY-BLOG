import { useState } from 'react';
import styled from 'styled-components';
import {
  Search,
  ArrowLeft,
  Filter,
  ArrowUpDown,
  ArrowUp,
  ArrowDown,
} from 'lucide-react';
import { Typography } from '../../components/Typography';
import { Icon } from '../../components/Icon';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { InputWithBackAndClear } from '../../components/InputWithBackAndClear';
import { SortItem } from '../../components/SortItem';
import { FilterItem } from '../../components/FilterItem';
import { SearchInputForm } from '../../components/SearchInputForm';
import { themeColors } from '../../styles';

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

const IconDemo = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};
`;

const ButtonDemo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};
`;

const SortDemo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};
`;

const FilterDemo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};
  margin-top: 200px;
`;

const InputDemo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  max-width: 400px;
`;

const InputWithBackAndClearDemo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  max-width: 400px;
`;

const SearchDemo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
  max-width: 400px;
  margin: 200px 60px;
`;

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    'Category 1',
  );
  const [searchValue, setSearchValue] = useState('');
  const [backAndClearValue, setBackAndClearValue] = useState('');

  return (
    <HomeContent>
      <Typography variant="h1" color={themeColors.primary.dark}>
        Seraphy Blog | This is H1 variant - Dark Color
      </Typography>

      <IconDemo>
        <Icon
          icon={Search}
          size="md"
          background="neutrals.darkest"
          color="neutrals.lightest"
          aria-label="Buscar"
        />
        <Icon
          icon={Search}
          size="sm"
          ring
          background="neutrals.darkest"
          color="neutrals.lightest"
          aria-label="Buscar"
        />
        <Icon icon={Search} size="sm" aria-label="Buscar" />
        <Icon
          icon={Search}
          size="sm"
          color={themeColors.neutrals.extraLight}
          aria-label="Buscar"
        />
      </IconDemo>

      <InputDemo>
        <Typography variant="h2" color={themeColors.primary.dark}>
          Input (componente UI reutilizável)
        </Typography>
        <Input placeholder="Digite seu email..." type="email" />
        <Input placeholder="Digite seu nome..." />
      </InputDemo>

      <InputWithBackAndClearDemo>
        <Typography variant="h2" color={themeColors.primary.dark}>
          InputWithBackAndClear
        </Typography>
        <InputWithBackAndClear
          value={backAndClearValue}
          onChange={(e) => setBackAndClearValue(e.target.value)}
          onBack={() => setBackAndClearValue('')}
          placeholder="Digite algo..."
        />
      </InputWithBackAndClearDemo>

      <SearchDemo>
        <SearchInputForm
          placeholder="Search"
          onSearch={(value) => setSearchValue(value)}
        />
        {searchValue && (
          <Typography
            variant="bodySmall"
            color={themeColors.neutrals.extraDark}
          >
            Última busca: &quot;{searchValue}&quot;
          </Typography>
        )}
      </SearchDemo>

      <ButtonDemo>
        <Button variant="primary">Apply filters</Button>
        <Button variant="primary" icon={Filter}>
          Apply filters
        </Button>
        <Button variant="secondary">Back</Button>
        <Button variant="secondary" icon={ArrowLeft}>
          Back
        </Button>
      </ButtonDemo>

      <SortDemo>
        <SortItem label="Newest first" icon={ArrowUpDown} />
        <SortItem label="Oldest first" icon={ArrowUpDown} />
        <SortItem label="Ascending" icon={ArrowUp} />
        <SortItem label="Descending" icon={ArrowDown} />
        <SortItem label="Sem ícone" />
      </SortDemo>

      <FilterDemo>
        <FilterItem
          label="Category 1"
          isSelected={selectedCategory === 'Category 1'}
          onClick={() => setSelectedCategory('Category 1')}
        />
        <FilterItem
          label="Category 2"
          isSelected={selectedCategory === 'Category 2'}
          onClick={() => setSelectedCategory('Category 2')}
        />
        <FilterItem
          label="Category 3"
          isSelected={selectedCategory === 'Category 3'}
          onClick={() => setSelectedCategory('Category 3')}
        />
      </FilterDemo>
    </HomeContent>
  );
};

export default Home;
