import React from "react";

import { XCircleIcon } from "@heroicons/react/24/solid";

const Modal = ({
  children,
}) => {
  return (
        <div className="absolute w-full h-full z-20 flex items-center justify-center bg-modelgrey">
          <div onClick={onclose} className="absolute top-4 right-4 cursor-pointer">
            <XCircleIcon className="w-8 sm:w-10 text-white" />
          </div>
          {children}
        </div>
  );
};

export default Modal;
