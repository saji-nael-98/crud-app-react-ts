import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import EmployeeList from "./components/EmployeeList";
import Test from "./components/FormGenerator/FormGenerator";
const App: React.FC = () => {
  return (
    <Container className="app" maxWidth="xl">
      <Grid
        height={"100vh"}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        container
      >
        <Grid xl={4}> <Test />
          <EmployeeList />
        </Grid>
      </Grid>
     
    </Container>
  );
};
export default App;
