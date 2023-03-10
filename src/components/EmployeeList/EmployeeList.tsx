import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MyTable from "../Table";
import { Paper, Stack } from "@mui/material";
import { TableColumn } from "../Table/Table";
import ModalContextProvider, { ModalContext } from "../../store/model-context";
import EmployeeFormContainer from "../EmployeeForm";
const columns: TableColumn[] = [
  {
    name: "id",
  },
  {
    name: "name",
  },
  {
    name: "age",
  },
];
const EmployeeList: React.FC<{}> = () => {
  const { onOpen } = useContext(ModalContext);
  return (
    <Paper>
      <Stack>
        <Grid
          container
          paddingX={"10px"}
          display="flex"
          alignItems={"center"}
          height="70px"
          style={{ backgroundColor: "#435D7D" }}
        >
          <Grid item xs={6}>
            <Typography component={"h2"} color="white">
              Manage <strong>Employees</strong>
            </Typography>
          </Grid>
          <Grid item xs={6} display="flex" justifyContent={"flex-end"}>
            <Button
              onClick={() => onOpen()}
              variant="contained"
              color="success"
              size="small"
            >
              add new employee
            </Button>
          </Grid>
        </Grid>
        <MyTable
          setup={{
            data: [
              {
                id: 1,
                name: "saji",
                age: 25,
              },
            ],
            columns: columns,
          }}
        />
      </Stack>
    </Paper>
  );
};
const EmployeeListContainer = () => (
  <ModalContextProvider>
    <EmployeeFormContainer />
    <EmployeeList />
  </ModalContextProvider>
);
export default EmployeeListContainer;
