import { BrowserRouter } from "react-router-dom";
import './index.css'
import './App.css'
import { AppRouter } from './router/AppRouter';
import { MainLayout } from "./Layout/MainLayout";

function App() {

  return (
    <BrowserRouter>
    <MainLayout>
      <AppRouter/>
    </MainLayout>
    </BrowserRouter>
  )
}

export default App
