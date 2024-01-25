import {Container} from "@/components/TabBar/style.tsx";
import icon from "@/components/TabBar/icon";
import {useEffect, useRef, useState} from "react";
import {setColor,setActiveIndex} from '@/store/tabSlice/index.tsx'
import {useDispatch, useSelector} from "react-redux";
import routerHook from '@/hooks/useRoute.tsx'

const TabBar = () => {
    const activeIndex = useSelector(state => state.tab.activeIndex)
    const dispatch = useDispatch();
    const {navigate,locationHook} = routerHook();
    const menuList = icon.menuList;
    const [left, setLeft] = useState('')
    const menuRef = useRef<HTMLElement | null>(null);

    function handleChangeItem(index: number) {
        dispatch(setActiveIndex(index))
        dispatch(setColor(menuList[index].color))
        navigate(menuList[index].path)
    }

    useEffect(() => {
        const patnName = locationHook.pathname;
        if (patnName !== '/'){
            let path = patnName.split('/')[1];
            let resInex = icon.menuList.findIndex(item => item.path === path)
            if (resInex !== -1){
                handleChangeItem(resInex)
            }
        }
    }, []);
    useEffect(() => {
        if (menuRef.current) {
            const element = menuRef.current.querySelector('.active') as HTMLElement;
            const menuBorder = menuRef.current.querySelector('.menu__border') as HTMLElement;
            const offsetActiveItem = element.getBoundingClientRect();
            const left = Math.floor(offsetActiveItem.left - menuRef.current.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width) / 2) + "px";
            setLeft(left)
        }
    }, [activeIndex])
    return (
        <Container color={menuList[activeIndex].color} left={left} >
            <menu className='menu' ref={menuRef}>
                {
                    menuList.map((e, index) => {
                        return (
                            <button
                                onClick={() => handleChangeItem(index)}
                                className={`menu__item ${activeIndex === index ? 'active' : ''}`} key={e.id}>
                                {e.icon}
                            </button>
                        )
                    })
                }
                <div className="menu__border"></div>
            </menu>
            <div className="svg-container">
                <svg viewBox="0 0 202.9 45.5">
                    <clipPath id="menu" clipPathUnits="objectBoundingBox"
                              transform="scale(0.0049285362247413 0.021978021978022)">
                        <path d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"/>
                    </clipPath>
                </svg>
            </div>
        </Container>
    );
};

export default TabBar;
