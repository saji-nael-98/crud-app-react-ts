import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import { capitalize } from "../../utils/string";
export interface TableColumn {
  name: string;
  align?: "right" | "left" | "center";
}

interface IMyTable {
  data: any[];
  columns: TableColumn[];
}
const MyTable: React.FC<{
  setup: IMyTable;
}> = ({ setup: { columns, data } }) => {
  return (
    <TableContainer sx={{ maHeight: "350px" }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map((item) => (
              <TableCell key={item.name}>
                {<strong>{capitalize(item.name)}</strong>}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((record) => {
            return (
              <TableRow key={record.id}>
                {Object.values(record).map((d) => (
                  <TableCell key={record.id + "" + d}>{d}</TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default MyTable;
