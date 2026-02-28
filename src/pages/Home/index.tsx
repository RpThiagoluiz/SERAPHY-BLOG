import styled from 'styled-components';
import { Typography } from '../../components/Typography';
import { themeColors } from '../../styles';

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.md};
`;

const Home = () => {
  return (
    <HomeContent>
      <Typography variant="h1" color={themeColors.primary.dark}>
        Seraphy Blog | This is H1 variant - Dark Color
      </Typography>

      <Typography variant="h2" color={themeColors.neutrals.extraDark}>
        This is H2 variant - Extra Dark Color
      </Typography>

      <Typography variant="h3" color={themeColors.secondary.base}>
        This is H3 variant - Secondary Color
      </Typography>

      <Typography variant="bodyLarge">
        This is Body Large variant - Default Color Blog
        {' · '}
        This is Body Large variant
      </Typography>

      <Typography variant="bodySmall" color={themeColors.neutrals.dark}>
        This is bodySmall variant - Dark Color
      </Typography>

      <Typography variant="caption" color={themeColors.accent.base}>
        This is caption variant - Accent Color
      </Typography>
    </HomeContent>
  );
};

export default Home;
