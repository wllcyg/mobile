import {useNavigate} from "react-router";

export default function (){
    const navigateHook = useNavigate();
    function navigate(path: string) {
        navigateHook(path)
    }
    return {
        navigate
    }
}