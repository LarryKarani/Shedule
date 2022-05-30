import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/layout";

function App() {
  return (
    <div className='h-full bg-gray-100'>
       <BrowserRouter>
        <Layout/>
      </BrowserRouter>
    </div>
  )
}

export default App;
