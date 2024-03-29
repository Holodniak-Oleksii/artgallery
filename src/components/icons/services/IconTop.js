import React from "react";

const IconTop = ({ stroke = "#4B40F7", className = "" }) => (
  <svg
    width='24'
    height='24'
    className={className}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8 21H16'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 17V21'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M7 4H17'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17 4V12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12V4'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M5 11C6.10457 11 7 10.1046 7 9C7 7.89543 6.10457 7 5 7C3.89543 7 3 7.89543 3 9C3 10.1046 3.89543 11 5 11Z'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19 11C20.1046 11 21 10.1046 21 9C21 7.89543 20.1046 7 19 7C17.8954 7 17 7.89543 17 9C17 10.1046 17.8954 11 19 11Z'
      stroke={stroke}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
export default IconTop;
