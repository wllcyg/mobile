import './App.css'
import useRoute from "@/hooks/useRoute.tsx";
import {Outlet} from "react-router";
function App() {
    const { navigate } = useRoute()
    function handleClick() {
        navigate('/cartoon')
    }
    return (
    <>
        <button onClick={() => handleClick()}>
            点击跳转
        </button>
        <Outlet/>
    </>
  )
}

export default App
