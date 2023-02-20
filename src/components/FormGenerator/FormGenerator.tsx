import { TextField } from "@mui/material";
import React, { ChangeEventHandler, useState } from "react";
import {
  Control,
  Controller,
  FieldValues,
  Path,
  useController,
  useForm,
} from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import Field from './FormGenerator'

interface FormGeneratorProps<T extends FieldValues> {
  control: Control<T>;
  submitHandler: SubmitHandler<T>;
}
interface FormFieldProp<T extends FieldValues> {
  control: Control<T, any>;
  name: Path<T>;
}
function hasKey(obj: any, key: string): boolean {
  return key in obj;
}
const FormField = function <T extends FieldValues>({
  control,
  name,
}: FormFieldProp<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => <TextField {...field} />}
    />
  );
};
function FormGenerator<T extends FieldValues>({
  control,
  field,
  submitHandler,
}: FormGeneratorProps<T>) {
  return (
    <form onSubmit={submitHandler}>
      <FormField control={control} name={field.name} />
      <input type={"submit"} />
    </form>
  );
}
interface IEmployee {
  number: string;
  age:number
}
//fields type
interface EmployeeForm {
  name: Field<IEmployee>;
}

const Test = () => {
  const formFields:EmployeeFormFields<IEmployee>={
    name:{
      name:'number',
      required:true,
      pattern:'asdasdasdsa'
    },
    age:{
      name:'number',
      required:false,
    }
  }
  const { Form ,state} = useGeneratedForm<IEmployee>({
    fields: {
      name: "number",
    },
  });
  const { control, handleSubmit } = useForm<IEmployee>();
  
  
  
  
  
  const onSubmit = (data: IEmployee) => {};
  return (
    <>
      <FormGenerator<IEmployee>
        control={control}
        field={fld}
        submitHandler={handleSubmit(onSubmit)}
      />
      {Form}
    </>
  );
};
interface FormFields<T extends FieldValues>{
  name:Field<T>,
  age:<Field<T>
}
interface useGeneratedFormProps<T extends FieldValues> {
  fields: Field<T>;
}
const useGeneratedForm = function <T extends FieldValues>(
  props: useGeneratedFormProps<T>
) {
  const [state,setState]=useState<Field<T>>(props.fields)
  const Form = () => <div>sa</div>;
  return { state,Form: <Form /> };
};
export default Test;
