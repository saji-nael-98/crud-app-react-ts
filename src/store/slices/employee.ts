import { IEmployee } from "./../../interfaces/Employee.interface";
import { createSlice } from "@reduxjs/toolkit";
interface IInitialState {
  data: IEmployee[];
  isLoading: boolean;
  error: string | null;
}
const initialState: IInitialState = {
  data: [],
  isLoading: false,
  error: null,
};
const employeeSlice = createSlice({
  name: "employee",
  initialState: initialState,
  reducers: {
    
  },
});
export default employeeSlice.reducer;
