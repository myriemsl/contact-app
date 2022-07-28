import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './Pages/Layout';


function App() {
  return (
   <BrowserRouter>
    <Layout/>
   </BrowserRouter>
  );
}

export default App;
