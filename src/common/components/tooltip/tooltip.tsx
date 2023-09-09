import React from "react";

const Tooltip = ({ isicon = false, title = "", tip = "", Icon }: any) => {
  return (
    <>
      <button
        data-tooltip-target="tooltip-dark"
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {tip}
      </button>
      <div
        id="tooltip-dark"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        {isicon ? Icon : title}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
    </>
  );
};

export default Tooltip;
