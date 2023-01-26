import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import EmployeeList from "./components/EmployeeList";
import { COUNTER_STATE } from "./constant/selectors";
const App: React.FC = () => {
  const { counter } = useSelector(COUNTER_STATE);
  return (
    <Container className="app" maxWidth="xl">
      <Grid
        height={"100vh"}
        display="flex"
        justifyContent={"center"}
        alignItems={"center"}
        container
      >
        <EmployeeList />
      </Grid>
    </Container>
  );
};
export default App;
