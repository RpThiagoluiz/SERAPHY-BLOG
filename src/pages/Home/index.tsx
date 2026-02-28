import styled from 'styled-components';
import { Search } from 'lucide-react';
import { Typography } from '../../components/Typography';
import { Icon } from '../../components/Icon';
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
    </HomeContent>
  );
};

export default Home;
