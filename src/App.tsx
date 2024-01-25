import './App.css'
import {Outlet} from "react-router";
import TabBar from "@/components/TabBar";
import {AppWrapper} from "@/style.tsx";
import { useSelector} from "react-redux";
function App() {

    // 承接子组件
    const color = useSelector(state => state.tab.bgColor)
    return (
    <AppWrapper colorbg={color}>
        <nav>
            nav1
        </nav>
        <main>
            <Outlet/>
        </main>
        <footer>
            <TabBar />
        </footer>
    </AppWrapper>
  )
}

export default App
