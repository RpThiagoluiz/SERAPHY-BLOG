import styled from 'styled-components';
import { Search, ArrowLeft, Filter } from 'lucide-react';
import { Typography } from '../../components/Typography';
import { Icon } from '../../components/Icon';
import { Button } from '../../components/Button';
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
    </HomeContent>
  );
};

export default Home;
