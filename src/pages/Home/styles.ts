import styled from 'styled-components';
import { media } from '../../styles';

const GUTTER = 24;

export const HomePage = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${GUTTER}px;
  width: 100%;
  min-height: 0;
`;

export const PageHeader = styled.header`
  display: none;

  ${media.md`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => props.theme.spacing.md};
  `}
`;

export const ContentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${GUTTER}px;
  flex: 1;
  min-height: 0;
`;

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};

  ${media.md`
    display: none;
    gap: ${(props) => props.theme.spacing.md};
  `}
`;

export const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${GUTTER}px;

  ${media.md`
    flex-direction: row;
    align-items: flex-start;
  `}
`;

export const Sidebar = styled.aside`
  display: none;

  ${media.md`
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.spacing.lg};
    width: 240px;
    flex-shrink: 0;
    padding: ${(props) => props.theme.spacing.lg};
    background-color: ${(props) => props.theme.colors.neutrals.lightest};
    border-radius: ${(props) => props.theme.radii.lg};
    border: 1px solid ${(props) => props.theme.colors.neutrals.extraLight};
  `}
`;

export const SidebarTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const FilterSectionTitle = styled.h3`
  margin: 0;
  font-size: ${(props) => props.theme.typography.bodyLargeSemiBold.size};
  font-weight: ${(props) => props.theme.typography.bodyLargeSemiBold.weight};
  color: ${(props) => props.theme.colors.neutrals.darkest};
`;

export const FilterItemsList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarFilterItem = styled.button<{ $isSelected: boolean }>`
  display: block;
  width: 100%;
  padding: ${(props) => props.theme.spacing.sm} 0;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.neutrals.extraLight};
  background: transparent;
  text-align: left;
  font-size: ${(props) => props.theme.typography.bodySmall.size};
  font-weight: ${(props) => props.theme.typography.bodySmall.weight};
  line-height: ${(props) => props.theme.typography.bodySmall.lineHeight};
  color: ${(props) =>
    props.$isSelected
      ? props.theme.colors.neutrals.darkest
      : props.theme.colors.neutrals.medium};
  cursor: pointer;
  transition: ${(props) => props.theme.transition.interactive};

  &:hover {
    color: ${(props) => props.theme.colors.neutrals.darkest};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.accent.medium};
    outline-offset: 2px;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${GUTTER}px;
  flex: 1;
  min-width: 0;
`;

export const SortRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const PostsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${GUTTER}px;

  ${media.md`
    display: none;
  `}
`;

export const PostsGrid = styled.div`
  display: none;

  ${media.md`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(314px, 1fr));
    gap: ${GUTTER}px;
    justify-content: center;
  `}
`;

export const PostCardWrapper = styled.div``;

export const FilterBarChips = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};

  ${media.md`
    display: none;
  `}
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  color: ${(props) => props.theme.colors.neutrals.medium};
`;
