import { createContext, useCallback, useState } from "react";

type ModalObj = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
};
export const ModalContext = createContext<ModalObj>({
  open: false,
  onOpen: () => {},
  onClose: () => {},
});
const ModalContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const openHandler = useCallback(() => setOpen(true), []);
  const closeHandler = useCallback(() => setOpen(false), []);
  return (
    <ModalContext.Provider
      value={{
        open: open,
        onOpen: openHandler,
        onClose: closeHandler,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;
