import React, {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { FaX } from "react-icons/fa6";
import UseOutsideClick from "../hooks/useOutsideClick";

const ModalContext = createContext<any>({});

function Modal({ children }) {
  const [openModal, setOpenModal] = useState(false);

  const close = () => setOpenModal(false);
  const open = () => setOpenModal(true);

  return (
    <ModalContext.Provider value={{ openModal, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: open });
}

function Close({ children }) {
  const { close } = useContext(ModalContext);
  return cloneElement(children, { onClick: close });
}

function CloseFn() {
  close();
}

function Window({ children }) {
  const { openModal, close } = useContext(ModalContext);

  const ref = UseOutsideClick(close);

  if (!openModal) return null;

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-screen z-50 transition-all duration-500 backdrop-blur-sm bg-modal_backdrop">
      <div
        className="fixed w-4/5 sm:w-1/2 mx-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bg_white rounded-md shadow-lg px-6 py-3 transition-all duration-500"
        ref={ref}
      >
        <button onClick={close} className="absolute top-3 right-3">
          <FaX />
        </button>
        {/* {children} */}
        {cloneElement(children, { onCloseModal: close })}
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Close = Close;
Modal.Window = Window;
Modal.CloseFn = CloseFn;

export default Modal;
