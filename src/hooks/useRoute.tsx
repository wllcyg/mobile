import {useNavigate,useLocation} from "react-router";

export default function (){
    const navigateHook = useNavigate();
    function navigate(path: string) {
        navigateHook(path)
    }
    const locationHook = useLocation();
    return {
        navigate,
        locationHook
    }
}