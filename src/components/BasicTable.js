import { Table } from "rsuite";
import React from "react";
import { mockUsers } from "./mockUsers"; // Import the modified mockTreeData function

const { Column, HeaderCell, Cell } = Table;

const data = mockUsers({
  limits: [8],
  labels: "Campaigns",
  getRowData: (layer, value) => {
    if (layer === 0) {
      return {
        clicks: Math.floor(Math.random() * 10000),
        cost: Math.random() * 1000,
        conversion: Math.random(),
        revenue: Math.random() * 10000,
      };
    }
    return {};
  },
});

const BasicTable = () => {
  const [sortColumn, setSortColumn] = React.useState();
  const [sortType, setSortType] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === "string") {
          x = x.charCodeAt();
        }
        if (typeof y === "string") {
          y = y.charCodeAt();
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSortColumn(sortColumn);
      setSortType(sortType);
    }, 500);
  };

  return (
    <Table
      className="suite-table w-full"
      width={600}
      height={420}
      data={getData()}
      sortColumn={sortColumn}
      sortType={sortType}
      onSortColumn={handleSortColumn}
      loading={loading}>
      <Column flexGrow={1} sortable>
        <HeaderCell>Campaigns</HeaderCell>
        <Cell dataKey="label" />
      </Column>

      <Column flexGrow={1} sortable>
        <HeaderCell>Clicks</HeaderCell>
        <Cell dataKey="clicks" />
      </Column>
      <Column flexGrow={1} sortable>
        <HeaderCell>Cost</HeaderCell>
        <Cell dataKey="cost" />
      </Column>

      <Column flexGrow={1} sortable>
        <HeaderCell>Conversion</HeaderCell>
        <Cell dataKey="conversion" />
      </Column>

      <Column flexGrow={1} sortable>
        <HeaderCell>Revenue</HeaderCell>
        <Cell dataKey="revenue" />
      </Column>
    </Table>
  );
};

export default BasicTable;
