import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>This Page Doesn't Exist please go back to the Home Page</p>
      <Link to='/'>Home Page</Link>

    </>
  );
}

export default NotFound;