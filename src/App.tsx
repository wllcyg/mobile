import './App.css'
import {Outlet} from "react-router";
import TabBar from "@/components/TabBar";
import {AppWrapper} from "@/style.tsx";
function App() {
    // 承接子组件
    return (
    <AppWrapper>
        <nav>
            nav1
        </nav>
        <main>
            <Outlet/>
        </main>
        <footer>
            <TabBar/>
        </footer>
    </AppWrapper>
  )
}

export default App
