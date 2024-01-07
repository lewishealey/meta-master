import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import '../styles/ui.css';

function App() {
  const textbox = React.useRef<HTMLInputElement>(undefined);
  const [pageData, setPageData] = useState([]);

  const countRef = React.useCallback((element: HTMLInputElement) => {
    if (element) element.value = '5';
    textbox.current = element;
  }, []);

  const onCreate = () => {
    const count = parseInt(textbox.current.value, 10);
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*');
  };

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };

  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
      if (type === "page-data") {
        setPageData(message);
      }
    };
  }, []);

  console.log("pageData", pageData);

  return (
    <div className="flex h-full">
      {/* <img src={logo} />
      <h2>Rectangle Creator</h2>
      <p>
        Count: <input ref={countRef} />
      </p>
      <button id="create" onClick={onCreate}>
        Create
      </button>
      <button onClick={onCancel}>Cancel</button> */}
      <div className="flex flex-1 flex-col h-full space-y-4 p-2">
        <nav className='flex'>
          <button>Icon</button>
          <button>Icon</button>
          <button>Icon</button>
          <button>Icon</button>
        </nav>
        <div>
          Actions to set-up - Search and replace - Append/prepend - Variables
          (from file name or properties) - Filters from names
        </div>
      </div>
      <div className="flex flex-1 flex-col space-y-2 border-l p-2">
        <input type="text" placeholder="Search previews" />
        <span>Preview of data</span>
      </div>
    </div>
  );
}

export default App;
