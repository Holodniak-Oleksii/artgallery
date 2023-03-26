import React from 'react';

const Icon = ({ fill = '#2081E2' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 18.0001C6.958 18.0071 2 15.3141 2 12.0001C2 8.68608 6.984 5.98308 12 6.00008C17.016 6.01708 22 8.68608 22 12.0001C22 15.3141 17.042 17.9931 12 18.0001ZM12 16.0001C13.0609 16.0001 14.0783 15.5787 14.8284 14.8285C15.5786 14.0784 16 13.0609 16 12.0001C16 10.9392 15.5786 9.9218 14.8284 9.17165C14.0783 8.42151 13.0609 8.00008 12 8.00008C10.9391 8.00008 9.92172 8.42151 9.17157 9.17165C8.42143 9.9218 8 10.9392 8 12.0001C8 13.0609 8.42143 14.0784 9.17157 14.8285C9.92172 15.5787 10.9391 16.0001 12 16.0001ZM12 14.0001C11.4696 14.0001 10.9609 13.7894 10.5858 13.4143C10.2107 13.0392 10 12.5305 10 12.0001C10 11.4696 10.2107 10.9609 10.5858 10.5859C10.9609 10.2108 11.4696 10.0001 12 10.0001C12.5304 10.0001 13.0391 10.2108 13.4142 10.5859C13.7893 10.9609 14 11.4696 14 12.0001C14 12.5305 13.7893 13.0392 13.4142 13.4143C13.0391 13.7894 12.5304 14.0001 12 14.0001Z"
      fill={fill}
    />
  </svg>
);
export default Icon;