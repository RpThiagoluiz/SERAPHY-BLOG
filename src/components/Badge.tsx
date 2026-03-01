import styled from 'styled-components';
import { typographyVariants } from '../styles';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const BORDER_RADIUS = 42;
const PADDING = '8px 12px';

const StyledBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${PADDING};
  border-radius: ${BORDER_RADIUS}px;
  background-color: ${(props) => props.theme.colors.neutrals.extraLight};
  color: ${(props) => props.theme.colors.neutrals.darkest};
  ${typographyVariants.bodySmall}
`;

export function Badge({ children, ...rest }: BadgeProps) {
  return <StyledBadge {...rest}>{children}</StyledBadge>;
}
