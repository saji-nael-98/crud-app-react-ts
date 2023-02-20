import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { IFormRef } from "../HOC/withModelForm/withModalForm.interface";
import { IForm } from "./Form.interface";

const Form: React.FC<IForm> = forwardRef<IFormRef, IForm>(
  ({ handleSubmit, children }, ref) => {
    const formRef = useRef<HTMLFormElement>(null);

    const clickHandler = (event: Event) => {
      formRef.current?.dispatchEvent(event);
    };
    useImperativeHandle(ref, () => ({ onClick: clickHandler }));

    return (
      <form ref={formRef} onSubmit={handleSubmit}>
        {children}
      </form>
    );
  }
);

export default Form;
