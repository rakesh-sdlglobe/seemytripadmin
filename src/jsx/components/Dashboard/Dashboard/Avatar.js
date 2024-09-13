import React, { useMemo } from 'react';

const Avatar = ({ name }) => {
  const firstLetter = name.charAt(0).toUpperCase();

  // Function to generate a random color
  const getRandomColor = () => {
    const colors = ['#007bff', '#28a745', '#dc3545', '#ffc107', '#17a2b8', '#6f42c1', '#e83e8c'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Memoize the backgroundColor so it doesn't change on every render
  const backgroundColor = useMemo(() => getRandomColor(), []);

  return (
    <div className="d-flex align-items-center justify-content-center rounded-circle text-white"
         style={{ width: '35px', height: '35px', fontSize: '17px', backgroundColor }}>
      {firstLetter}
    </div>
  );
};

export default Avatar;
