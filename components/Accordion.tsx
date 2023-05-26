import { FC, ReactNode, useRef, useState } from "react";

import styled from "styled-components";

type TAccordion = {
  children: ReactNode;
  label: string;
};
const Accordion: FC<TAccordion> = ({ children, label }) => {
  const [isOpen, setIsOpen] = useState(true);
  const panelRef = useRef() as any;

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <Headline onClick={toggleOpen}>
        <span>{label}</span>
        <IconWrap isOpen={isOpen}>{Icons.ArrowDown}</IconWrap>
      </Headline>
      <Panel
        isOpen={isOpen}
        ref={panelRef}
        height={
          panelRef?.current ? panelRef?.current?.scrollHeight + "px" : "auto"
        }
      >
        {children}
      </Panel>
    </>
  );
};

export default Accordion;

const Headline = styled.div`
  box-sizing: border-box;
  display: flex;
  padding: 15px 20px;
  width: 100%;
  gap: 5px;
  justify-content: space-between;
  background: var(--midnight-green);

  box-shadow: 0px 8px 11px -3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  cursor: pointer;
`;

const IconWrap = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  svg {
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "none")};
    transition: all 0.2s ease-in-out;
    path {
      fill: var(--primary-green);
    }
  }
`;

const Panel = styled.div<{ isOpen: boolean; height: string }>`
  max-height: ${({ isOpen, height }) => (isOpen ? height : "0px")};
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  overflow: hidden;
  transition: all 0.2s ease-in-out;

  width: 100%;
`;
