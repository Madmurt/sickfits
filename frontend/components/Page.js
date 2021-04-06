import React from 'react';

export default function Page({ children }) {
  return (
    <>
      <h2>This is a page!</h2>
      <div>{children}</div>
    </>
  );
}
