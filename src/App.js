import React, { useState } from "react";
import { VariableSizeGrid as Grid } from "react-window";

import data from "./rushing.json";
import { columns } from "./config";
import Cell from "./components/Cell/Cell";
import { sortData, filterData } from "./utils";
import DownloadCSV from "./components/DownloadCSV/DownloadCSV";

function App() {
  const [dataSource, setDataSource] = useState(data);
  const [filter, setFilter] = useState({});
  const [sorting, setSorting] = useState({});
  
  const handleFiltering = (key, value) => {
    const newFilter = {
      ...filter,
      [key]: value,
    };

    setFilter(newFilter);

    const filteredData = filterData(data, newFilter);

    if (sorting.direction !== null && sorting.key) {
      const sortingColumnType = columns.find(
        (column) => column.accessor === sorting.key
      ).type;

      setDataSource(sortData(filteredData, sorting, sortingColumnType));
    } else {
      setDataSource(filteredData);
    }
  };

  const handleSorting = (key, direction) => {
    const newSorting = {
      key,
      direction,
    };

    setSorting(newSorting);

    if (direction !== null && newSorting.key) {
      const sortingColumnType = columns.find(
        (column) => column.accessor === newSorting.key
      ).type;

      setDataSource(sortData(dataSource, newSorting, sortingColumnType));
    } else {
      setDataSource(filterData(data, filter));
    }
  };

  return (
    <>
      <DownloadCSV dataSource={dataSource} />
      <Grid
        rowHeight={(index) => (index === 0 ? 50 : 35)}
        itemData={{
          dataSource,
          filter,
          sorting,
          handleFiltering,
          handleSorting,
        }}
        width={window.innerWidth}
        height={window.innerHeight}
        columnCount={columns.length}
        rowCount={dataSource.length + 1}
        columnWidth={(index) => columns[index].width}
      >
        {Cell}
      </Grid>
    </>
  );
}

export default App;
