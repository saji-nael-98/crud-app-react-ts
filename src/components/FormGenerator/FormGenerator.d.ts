import { Path } from "react-hook-form";
import { FieldValues } from "react-hook-form";
//fields type supported
type FieldType = "text";
//generic
export interface Field<T extends FieldValues> {
  name: Path<T>;
  required: boolean;
  type: FieldType;
  onChange: (value) => void;
  onValidate: (value) => boolean;
}
interface Employee extends FieldValues {}
interface EmployeeForm {
  name: Field<Employee>;
}
