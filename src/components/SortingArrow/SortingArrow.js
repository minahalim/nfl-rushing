import React from "react";
import styled from "styled-components";

const SortArrow = styled.span`
  color: grey;
  cursor: pointer;
  position: absolute;
  color: ${({ isActive }) => isActive && "blue"};
  right: ${({ direction }) => (direction === 1 ? -1 : 0)}px;
  bottom: ${({ direction }) => (direction === 1 ? "5px" : null)};
  transform: rotate(${({ direction }) => (direction === 1 ? "90" : "270")}deg);
`;

const SortingArrow = ({
  sortingKey,
  direction,
  sorting,
  onHandleSortArrowClick,
}) => {
  return (
    <SortArrow
      direction={direction}
      onClick={() => onHandleSortArrowClick(direction)}
      isActive={sorting.direction === direction && sortingKey === sorting.key}
      title={
        sorting.direction === direction
          ? "Click to cancel Sorting"
          : `Click to sort ${direction === 1 ? "descending" : "ascending"}`
      }
    >
      {direction === 1 ? `\u27A4` : `\u27A4`}
    </SortArrow>
  );
};

export default SortingArrow;
