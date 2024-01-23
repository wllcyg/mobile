import {lazy, Suspense} from "react";
import {createBrowserRouter} from 'react-router-dom'
const Loading = lazy(() => import(`@/components/loading/index.tsx`));
export function widthLazyLoad(componentPath: string) {
    const LazyComponent = lazy(() => import(`../${componentPath}`));
    const LazeLoadComponent = (props: object) => {
        return (
            <Suspense fallback={<Loading></Loading>}>
                <LazyComponent {...props}/>
            </Suspense>
        );
    }
    return LazeLoadComponent;
}

const App = widthLazyLoad('App.tsx');
const Cartton = widthLazyLoad('pages/cartoon/index.tsx')
const Error = widthLazyLoad('pages/error/index.tsx')
const Home = widthLazyLoad('pages/home/index.tsx')
const Login = widthLazyLoad('pages/login/index.tsx')
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
