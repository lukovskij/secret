// src/App.js
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react'

import Router from './router'


function App() {
  const {
    isLoading,
    error,
    data,
  } = useVisitorData();


  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (data) {
    // perform some logic based on the visitor data
    return (
      <>
       <Router visitorId={data.visitorId}/>
       </>
    );
  } else {
    return null;
  }
}

export default App;