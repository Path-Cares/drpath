import React from "react";
import classNames from "classnames";

interface ProgressProps {
  value: number;
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({ value, className }) => {
  return (
    <div
      className={classNames("w-full h-3 bg-gray-200 rounded-full", className)}
    >
      <div
        className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};
