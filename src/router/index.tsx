import {lazy, LazyExoticComponent, Suspense} from "react";
import {createBrowserRouter} from 'react-router-dom'
import {JSX} from "react/jsx-runtime";

const Loading = lazy(() => import(`@/components/loading/index.tsx`));
const cartton = lazy(() => import(`@/pages/cartoon/index`));
const error = lazy(() => import(`@/pages/error/index.tsx`));
const home = lazy(() => import(`@/pages/home/index.tsx`))
const login = lazy(() => import(`@/pages/login/index.tsx`))
const app = lazy(() => import(`@/App.tsx`));
export function widthLazyLoad(components: string | LazyExoticComponent<() => JSX.Element>) {
    const LazyComponent = components;
    const LazeLoadComponent = (props: object) => {
        return (
            <Suspense fallback={<Loading></Loading>}>
                <LazyComponent {...props}/>
            </Suspense>
        );
    }
    return LazeLoadComponent;
}

const App = widthLazyLoad(app);
const Cartton = widthLazyLoad(cartton)
const Error = widthLazyLoad(error)
const Home = widthLazyLoad(home)
const Login = widthLazyLoad(login)
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: 'cartoon',
                element: <Cartton/>,
            },

        ]
    },
    {
        path: '/login',
        element: <Login/>,
    },
])

export default router;
