import './App.css';
import List from './components/orders/List';
import Layout from './layout/Layout';
import { Route, Routes } from "react-router-dom"
import CriticalOrderList from './components/orders/criticalOrderList';

function App() {
  return (
    <>

      <Layout>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/criticalOrderList" element={<CriticalOrderList />} />
        </Routes>
      </Layout>

    </>
  );
}

export default App;
