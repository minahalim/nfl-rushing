const sortData = (toBeSorted, sortingProps, type) => {
  let sortedData = toBeSorted;

  if (sortingProps.key !== undefined && sortingProps.direction !== undefined) {
    sortedData = toBeSorted.slice().sort((a, b) => {
      const pattern = /[,A-Za-z]/g;

      const item1 =
        type === "string"
          ? a[sortingProps.key]
          : +a[sortingProps.key].toString().replace(pattern, "");
      const item2 =
        type === "string"
          ? b[sortingProps.key]
          : +b[sortingProps.key].toString().replace(pattern, "");

      if (item1 < item2) {
        return sortingProps.direction ? 1 : -1;
      }
      if (item1 > item2) {
        return sortingProps.direction ? -1 : 1;
      }

      return 0;
    });
  }

  return sortedData;
};

const filterData = (toBeFiltered, filterProps) => {
  const filteredData = toBeFiltered.filter((row) => {
    return Object.keys(filterProps)
      .map((filterKey) => {
        const regex = new RegExp(filterProps[filterKey], "g");
        return regex.test(row[filterKey]);
      })
      .every((filtered) => filtered === true);
  });

  return filteredData;
};

export { sortData, filterData };
