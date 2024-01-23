import {lazy, Suspense} from "react";
import {createBrowserRouter} from 'react-router-dom'

function widthLazyLoad(componentPath: string) {
    const LazyComponent = lazy(() => import(`../${componentPath}`));
    const LazeLoadComponent = (props: object) => {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <LazyComponent {...props}/>
            </Suspense>
        );
    }
    return LazeLoadComponent;
}

const App = widthLazyLoad('App.tsx');
const Cartton = widthLazyLoad('pages/cartoon/index.tsx')
const Error = widthLazyLoad('pages/error/index.tsx')
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <Error/>,
    },
    {
        path: '/cartoon',
        element: <Cartton/>,
    }
])

export default router;