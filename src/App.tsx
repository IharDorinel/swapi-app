import React from 'react';

import './App.css';
import {Content} from "./components/organisms/Content";


function App() {


    const contentRender = () => {
        return <Content />
    }

  return (
    <div className="bg-sky-950 min-h-screen w-full flex flex-col justify-center px-5">
        {contentRender()}
    </div>
  );
}

export default App;
