import { TextField, StandardTextFieldProps } from "@mui/material";
import { Control, FieldValues, Controller, Path } from "react-hook-form";
import { PathValue } from "react-hook-form/dist/types";
interface MyTextFieldProps<T extends FieldValues>
  extends StandardTextFieldProps {
  control: Control<T>;
  name: Path<T>;
  type: TextFieldType;
  defaultValue?: PathValue<T, Path<T>>;
}

type TextFieldType = "text";

function FormTextField<T extends FieldValues>({
  name,
  control,
  defaultValue,
  size = "small",
  ...props
}: MyTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => <TextField size={size} {...field} {...props} fullWidth />}
    />
  );
}
export default FormTextField;
