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
import { SortItem } from '../../components/SortItem';
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
  margin-top: 200px;
`;

const Home = () => {
  return (
    <HomeContent>
      <Typography variant="h1" color={themeColors.primary.dark}>
        Seraphy Blog | This is H1 variant - Dark Color
      </Typography>

      <IconDemo>
        <Icon icon={Search} size="md" aria-label="Buscar" />
        <Icon icon={Search} size="sm" ring aria-label="Buscar" />
      </IconDemo>

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
    </HomeContent>
  );
};

export default Home;
