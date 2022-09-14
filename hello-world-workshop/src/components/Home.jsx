import React from 'react';

const message = 'Welcome to the application!';

function Home() {
  return (
    <div
      style={{
        textAlign: 'center'
      }}
    >
      {message}
    </div>
  );
}

export default Home;