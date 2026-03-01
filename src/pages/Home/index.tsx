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
import {
  Typography,
  Icon,
  Button,
  Input,
  InputWithBackAndClear,
  SortItem,
  FilterItem,
  Badge,
  SearchInputForm,
  PostCard,
  Dropdown,
  SelectionChip,
} from '../../components';
import { postService } from '../../api/services';
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

const BadgeDemo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

const BadgeDemoRow = styled.div`
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

const DropdownDemo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
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

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 314px);
  gap: 24px;
`;

const DROPDOWN_OPTIONS = [
  { id: 'cat1', label: 'Category 1' },
  { id: 'cat2', label: 'Category 2' },
  { id: 'cat3', label: 'Category 3' },
  { id: 'cat4', label: 'Category 4' },
  { id: 'cat5', label: 'Category 5' },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    'Category 1',
  );
  const [dropdownSelected, setDropdownSelected] = useState<string[]>(['cat1']);
  const [searchValue, setSearchValue] = useState('');
  const [backAndClearValue, setBackAndClearValue] = useState('');
  const { data: posts = [], isLoading } = postService.useGetPosts();

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

      <BadgeDemo>
        <Typography variant="h2" color={themeColors.primary.dark}>
          Badge
        </Typography>
        <BadgeDemoRow>
          <Badge>Category</Badge>
          <Badge>Category 1</Badge>
          <Badge>Category 2</Badge>
          <Badge>Category 3</Badge>
        </BadgeDemoRow>
      </BadgeDemo>

      <SortDemo>
        <SortItem label="Newest first" icon={ArrowUpDown} />
        <SortItem label="Oldest first" icon={ArrowUpDown} />
        <SortItem label="Ascending" icon={ArrowUp} />
        <SortItem label="Descending" icon={ArrowDown} />
        <SortItem label="Sem ícone" />
      </SortDemo>

      <DropdownDemo>
        <Typography variant="h2" color={themeColors.primary.dark}>
          Dropdown
        </Typography>
        <Dropdown
          label="Category"
          options={DROPDOWN_OPTIONS}
          selectedIds={dropdownSelected}
          onSelect={(id) =>
            setDropdownSelected((prev) =>
              prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
            )
          }
        />
        {dropdownSelected.length > 0 && (
          <SelectionChip
            label={dropdownSelected
              .map(
                (id) => DROPDOWN_OPTIONS.find((o) => o.id === id)?.label ?? '',
              )
              .join(', ')}
            onRemove={() => setDropdownSelected([])}
          />
        )}
      </DropdownDemo>

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

      <Typography variant="h2" color={themeColors.primary.dark}>
        Posts
      </Typography>
      {isLoading ? (
        <Typography variant="bodySmall" color={themeColors.neutrals.medium}>
          loading...
        </Typography>
      ) : (
        <PostsGrid>
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </PostsGrid>
      )}
    </HomeContent>
  );
};

export default Home;
