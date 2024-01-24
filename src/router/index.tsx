import {lazy, LazyExoticComponent, Suspense} from "react";
import {createBrowserRouter} from 'react-router-dom'
import {JSX} from "react/jsx-runtime";
const Loading = lazy(() => import(`@/components/loading/index.tsx`));
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
const App = widthLazyLoad(lazy(() => import(`@/App.tsx`)));
const Cartton = widthLazyLoad(lazy(() => import(`@/pages/cartoon/index`)))
const Error = widthLazyLoad(lazy(() => import(`@/error.tsx`)))
const Home = widthLazyLoad(lazy(() => import(`@/pages/home/index.tsx`)))
const Login = widthLazyLoad(lazy(() => import(`@/login.tsx`)))
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
