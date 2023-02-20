import React, { useContext, useRef } from "react";
import ModalContextProvider, {
  ModalContext,
} from "../../../store/model-context";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { capitalize } from "../../../utils/string";
import { IFormRef } from "./withModalForm.interface";
interface IFormDialog {
  title: string;
  children: React.ReactNode;
  onSave: any;
}
const FormDialog: React.FC<IFormDialog> = ({ title, children, onSave }) => {
  const { open, onClose } = useContext(ModalContext);
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>{capitalize(title)}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button
          onClick={onSave}
          type="submit"
          variant="contained"
          color="success"
          id="hook-form"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
const withModelForm = (Component: any) => {
  const NewComponent = () => {
    const childRef = useRef<IFormRef>(null);

    /*const handleClick = () => {
      const event = new Event("submit", { bubbles: true });
      formRef.current!.dispatchEvent(event);
    };*/
    const submitHandler = (
      event: React.MouseEventHandler<HTMLButtonElement>
    ) => {
      if (childRef.current) {
        const event = new Event("submit", { bubbles: true });

        childRef.current.onClick(event);
      }
    };
    return (
     
        <FormDialog title="add new employee" onSave={submitHandler}>
          <Component ref={childRef} />
        </FormDialog>
    
    );
  };
  return NewComponent;
};
export default withModelForm;
