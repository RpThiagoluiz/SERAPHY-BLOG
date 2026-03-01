import { useRef } from 'react';
import styled from 'styled-components';
import { ArrowLeft, X } from 'lucide-react';
import { Icon } from '../atoms/Icon';
import { Input } from '../atoms/Input';

export interface InputWithBackAndClearProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBack?: () => void;
}

const ICON_SIZE = 40;
const GAP = 8;

const Container = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  max-width: 100%;
`;

const StyledInput = styled(Input)<{ $hasClearButton: boolean }>`
  padding-left: ${ICON_SIZE + GAP}px;
  padding-right: ${(props) => (props.$hasClearButton ? ICON_SIZE + GAP : 16)}px;
`;

const IconButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  min-width: ${ICON_SIZE}px;
  min-height: ${ICON_SIZE}px;
  padding: 0;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: ${(props) => props.theme.transition.interactive};
  cursor: pointer;

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

const BackButton = styled(IconButton)`
  left: ${GAP}px;
`;

const ClearButton = styled(IconButton)`
  right: ${GAP}px;
`;

export function InputWithBackAndClear({
  value,
  onChange,
  onBack,
  placeholder,
  ...inputProps
}: InputWithBackAndClearProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const hasValue = value.length > 0;

  const handleClear = () => {
    const syntheticEvent = {
      target: { value: '' },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange(syntheticEvent);
    containerRef.current?.querySelector('input')?.focus();
  };

  return (
    <Container ref={containerRef}>
      <BackButton type="button" onClick={onBack} aria-label="Voltar">
        <Icon
          icon={ArrowLeft}
          size="md"
          color="neutrals.extraDark"
          aria-hidden
        />
      </BackButton>
      <StyledInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        $hasClearButton={hasValue}
        {...inputProps}
      />
      {hasValue && (
        <ClearButton type="button" onClick={handleClear} aria-label="Limpar">
          <Icon icon={X} size="sm" color="neutrals.extraDark" aria-hidden />
        </ClearButton>
      )}
    </Container>
  );
}
