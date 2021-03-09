import React from "react";
import CsvDownload from "react-json-to-csv";

import excel from "../../static/icons/excel.png";

const DownloadCSV = ({ dataSource }) => {
  return (
    <CsvDownload data={dataSource}>
      <img src={excel} alt="" width={15} /> Export CSV
    </CsvDownload>
  );
};

export default DownloadCSV;
