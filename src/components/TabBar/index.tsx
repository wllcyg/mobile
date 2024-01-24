import {Container} from "@/components/TabBar/style.tsx";
import icon from "@/components/TabBar/icon";
import {useState} from "react";

const TabBar = () => {
    const menuList = [
        {
            path: "首页",
            id: 1,
            color: '#ff8c00',
            icon: icon.home
        },
        {
            path: "动画",
            id: 2,
            color: '#f54888',
            icon: icon.desk
        },
        {
            path: "游戏",
            id: 3,
            color: '#4343f5',
            icon: icon.home
        },
        {
            path: "音乐",
            id: 4,
            color: '#e0b115',
            icon: icon.music
        },
        {
            path: "图片",
            id: 5,
            color: '#65ddb7',
            icon: icon.imgpath
        },
    ]
    const [activeIndex, setActiveIndex] = useState(0)
    function handleChangeItem(index: number) {
        setActiveIndex(index)
    }
    return (
        <Container color={menuList[activeIndex].color}>
            <menu className='menu'>
                {
                    menuList.map((e,index) => {
                        return (
                            <button
                                onClick={() => handleChangeItem(index)}
                                className={`menu__item ${ activeIndex === index ? 'active' : ''}`} key={e.id}>
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
