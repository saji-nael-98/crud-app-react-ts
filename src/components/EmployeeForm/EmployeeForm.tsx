import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Form from "../Form/Form";
import withModelForm from "../HOC/withModelForm";
import { Gender, IEmployee } from "./EmployeeForm.interface";
import React, { useRef } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextField from "../UI/FormTextField";
const schema = yup.object().shape({
  name: yup.string().required(),
});

interface FormGeneratorProps{

}
const FormGenerator=()=>{
  const formRef=useRef<Form>();
  return <Form ref={ref}>

  </Form>
}
const Template = React.forwardRef((props, ref) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IEmployee>({
    defaultValues: {
      name: "",
      gender: Gender.MALE,
    },
    resolver: yupResolver(schema),
  });

  const submitHandler: SubmitHandler<IEmployee> = (data) => {alert(data.name)};

  return (
    <Form handleSubmit={handleSubmit(submitHandler)} ref={ref}>
      <FormTextField<IEmployee> name="name" type="text" control={control}  />
    </Form>
  );
});
const EmployeeFrom = withModelForm(Template);
export default EmployeeFrom;
