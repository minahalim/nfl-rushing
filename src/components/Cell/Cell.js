import React from "react";
import styled, { css } from "styled-components";

import { columns } from "../../config/index";
import SortingArrow from "../SortingArrow/SortingArrow";

const commonStyles = css`
  overflow: hidden;
  padding: 0px 10px;
  white-space: nowrap;
  box-sizing: border-box;
  text-overflow: ellipsis;
  line-height: ${({ style, rowIndex }) =>
    rowIndex === 0 ? style.height - 20 : style.height}px;
  text-align: ${({ columnIndex }) => (columnIndex === 0 ? "left" : "center")};
`;

const HeaderCell = styled.div`
  ${commonStyles}
  font-weight: bold;
  background: #eeeeee;
`;

const TableCell = styled.div`
  ${commonStyles}
`;

const Filter = styled.input`
  top: 29px;
  left: 2px;
  width: 125px;
  position: absolute;
`;

const Cell = ({ columnIndex, rowIndex, style, data }) => {
  const { dataSource, filter, sorting, handleFiltering, handleSorting } = data;
  const { accessor, header, isFilterable, isSortable } = columns[columnIndex];

  const handleOnChange = (e, key) => {
    handleFiltering(key, e.target.value);
  };

  const handleSortArrowClick = (direction) => {
    if (sorting.direction === direction) {
      handleSorting(accessor, null);
    } else {
      handleSorting(accessor, direction);
    }
  };

  if (rowIndex === 0) {
    return (
      <HeaderCell
        style={style}
        rowIndex={rowIndex}
        columnIndex={columnIndex}
        title={header}
      >
        {header}
        {isFilterable && (
          <Filter
            value={filter[accessor] || ""}
            onChange={(e) => handleOnChange(e, accessor)}
            placeholder={`Filter by ${header}`}
          />
        )}
        {isSortable && (
          <>
            <SortingArrow
              direction={1}
              sorting={sorting}
              sortingKey={accessor}
              onHandleSortArrowClick={handleSortArrowClick}
            />
            <SortingArrow
              direction={0}
              sorting={sorting}
              sortingKey={accessor}
              onHandleSortArrowClick={handleSortArrowClick}
            />
          </>
        )}
      </HeaderCell>
    );
  }

  return (
    <TableCell
      style={style}
      rowIndex={rowIndex}
      columnIndex={columnIndex}
      title={dataSource[rowIndex - 1][accessor]}
    >
      {dataSource[rowIndex - 1][accessor]}
    </TableCell>
  );
};

export default Cell;
