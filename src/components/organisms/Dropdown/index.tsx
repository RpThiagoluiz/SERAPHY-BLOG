import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import styled from 'styled-components';
import { DropdownTrigger } from '../../atoms/DropdownTrigger';
import { DropdownMenu } from '../../molecules/DropdownMenu';
import type { DropdownOptionItem } from '../../molecules/DropdownMenu';

export interface DropdownProps {
  label?: string;
  options: DropdownOptionItem[];
  selectedIds: string[];
  onSelect: (id: string) => void;
}

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export function Dropdown({
  label = 'Category',
  options,
  selectedIds,
  onSelect,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleTriggerClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (id: string) => {
    onSelect(id);
  };

  return (
    <DropdownWrapper ref={wrapperRef}>
      <DropdownTrigger
        label={label}
        icon={ChevronDown}
        isOpen={isOpen}
        onClick={handleTriggerClick}
        aria-haspopup="listbox"
      />
      {isOpen && (
        <DropdownMenu
          options={options}
          selectedIds={selectedIds}
          onSelect={handleSelect}
        />
      )}
    </DropdownWrapper>
  );
}
