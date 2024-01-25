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
const Error = widthLazyLoad(lazy(() => import(`@/error.tsx`)))
const Login = widthLazyLoad(lazy(() => import(`@/login.tsx`)))

const Home = widthLazyLoad(lazy(() => import(`@/pages/home/index.tsx`)))
const Cartton = widthLazyLoad(lazy(() => import(`@/pages/cartoon/index`)))
const Fiction = widthLazyLoad(lazy(() => import(`@/pages/fiction/index.tsx`)))
const Picture = widthLazyLoad(lazy(() => import(`@/pages/picture/index.tsx`)))
const Tools = widthLazyLoad(lazy(() => import(`@/pages/tools/index.tsx`)))
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
                path: 'fiction',
                element: <Fiction/>,
            },
            {
                path: 'picture',
                element: <Picture/>,
            },
            {
                path: 'tools',
                element: <Tools/>,
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
