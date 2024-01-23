import './App.css'
import {Outlet} from "react-router";
function App() {
    // 承接子组件
    return (
    <>
        <Outlet/>
    </>
  )
}

export default App
