import {CartoonWrapper} from "@/pages/cartoon/style.tsx";
import {BodySlot} from "@/pages/cartoon/components/body";
import {FacialSlot} from "@/pages/cartoon/components/facial";
import {HeadSlot} from "@/pages/cartoon/components/head";
import {FacialHairSlot} from "@/pages/cartoon/components/facialhair";
import {GlassesSlot} from "@/pages/cartoon/components/glasses";
import {useEffect, useRef, useState} from "react";
import BScroll from "@better-scroll/core";
import domtoimage from 'dom-to-image'
const Cartoon = () => {
    const skinColor = ['#EDB98A', '#FFD11B', '#FFDBB4', '#D08B5B', '#AE5D29', '#694d3d']
    const hairColorArr = ['#A55728', '#B58143', '#724133', '#4A312C', '#C93305', '#000000', '#2C1B18']
    const facialColorArr = ['#000000', 'red', '#F59797', '#ECDCBF']
    const imgRef = useRef<HTMLImageElement | null>(null);
    const colorObj = {
        currentBodyIndex: 0,
        bodyColor: skinColor[0],
        currentHairIndex: 0,
        hairColor: hairColorArr[0],
        currentFacialColorIndex: 0,
        facialCColor: facialColorArr[0]
    }
    const clothesObj = {
        head: 0,
        face: 0,
        body: 0,
        facial: -1,
        glass: -1
    }
    const [colorState, setColorState] = useState({
        ...colorObj,
    })

    const [clothes, setClothes] = useState({
        ...clothesObj
    })

    function changeColor(type: string) {
        console.log('handleChange')
        const {currentBodyIndex, currentHairIndex, currentFacialColorIndex} = colorState
        switch (type) {
            case 'body':
                let res = currentBodyIndex + 1
                if (res > skinColor.length) {
                    res = 0
                }
                setColorState({
                    ...colorState,
                    currentBodyIndex: res,
                    bodyColor: skinColor[res]
                })
                break;
            case 'hair':
                let index = currentHairIndex + 1
                if (index > hairColorArr.length) {
                    index = 0
                }
                setColorState({
                    ...colorState,
                    currentHairIndex: index,
                    hairColor: hairColorArr[index]
                });
                break;
            case 'facial':
                let r = currentFacialColorIndex + 1
                if (r >= facialColorArr.length) {
                    r = 0
                }
                setColorState({
                    ...colorState,
                    currentFacialColorIndex: r,
                    facialCColor: facialColorArr[r]
                });
                break;
            default:
                console.log('changeClothes')
        }
    }

    function changeClothes(type: string) {
        const maxCount = (count: number) => {
            count += 1
            if (count > 4) {
                count = 0
            }
            return count
        }
        switch (type) {
            case 'head':
                setClothes({
                    ...clothes,
                    head: maxCount(clothes.head)
                })
                break;
            case 'face':
                setClothes({
                    ...clothes,
                    face: maxCount(clothes.face)
                })
                break;
            case 'body':
                setClothes({
                    ...clothes,
                    body: maxCount(clothes.body)
                })
                break;
            case 'facial':
                setClothes({
                    ...clothes,
                    facial: maxCount(clothes.facial)
                })
                break;
            case 'glass':
                setClothes({
                    ...clothes,
                    glass: maxCount(clothes.glass)
                })
                break;
                case 'reset':
                    setColorState({...colorState, ...colorObj})
                    setClothes({...clothes, ...clothesObj})
                    break;
            default:
                console.log('error')
        }
    }
    function save(){
        console.log(imgRef.current)
        const node = imgRef.current
        if (node){
            const options = {
                style: {
                    transform: 'rotate(0deg)', // 如果需要保持旋转和其他CSS变换，请确保将其设置正确
                },
                quality: 0.92,
                width: node.offsetWidth,
                height: node.offsetHeight,
            };
            domtoimage.toBlob(node, options)
                .then((blob) => {
                    // 创建一个URL对象指向该blob
                    const url = window.URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'my-image.png';
                    document.body.appendChild(link);
                    link.click();
                    setTimeout(() => {
                        // 清理
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(link);
                    }, 0);
                });
        }
    }
    const scroll = useRef<null | HTMLDivElement>(null);
    const [scrollIns, setScrollIns] = useState()
    useEffect(() => {
        if (scroll.current) {
            let scrollIns = new BScroll(scroll.current, {
                scrollX: true,
                probeType: 3,
                click: true,
            })
            setScrollIns(scrollIns)
        }
        return () => {
            if (scrollIns) {
                scrollIns.destroy()
            }
        }
    }, [])
    return (
        <CartoonWrapper>
            <div className="image" ref={imgRef}>
                <svg id="avatar" width="100%" height="100%" viewBox="0 0 1400 1400" xmlns="http://www.w3.org/2000/svg"
                     overflow="hidden">
                    <rect x="0" y="0" width="1400" height="1400" fill="transparent"></rect>
                    <g transform="translate(330, 150)">
                        <g transform="translate(-310, 512)">
                            <BodySlot color={colorState.bodyColor} index={clothes.body}/>
                        </g>
                        <HeadSlot index={clothes.head} faceColor={colorState.bodyColor}
                                  hairColor={colorState.hairColor}/>
                        {/*表情*/}
                        <g transform="translate(310, 308)">
                            <FacialSlot index={clothes.face}/>
                        </g>
                        <g transform="translate(51, 392)">
                            {/*胡子颜色*/}
                            <FacialHairSlot index={clothes.facial} color={colorState.facialCColor}/>
                        </g>
                        <g transform="translate(190, 361)">
                            {/*眼镜颜色*/}
                            <GlassesSlot index={clothes.glass}/>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="option">
                <div className="scroll-wrapper" ref={scroll}>
                    <div className="scroll-content">
                        <div className='scroll-item colors' style={{background: colorState.bodyColor,marginLeft:'12px'}}
                             onClick={() => changeColor('body')}><div>11</div></div>
                        <div className='scroll-item colors' style={{background: colorState.hairColor}}
                             onClick={() => changeColor('hair')}><div>11</div></div>
                        <div className='scroll-item colors' style={{background: colorState.facialCColor}}
                             onClick={() => changeColor('facial')}>11</div>
                        <div className='scroll-item clothes' onClick={() => changeClothes('head')}>
                            发型
                        </div>
                        <div className='scroll-item clothes' onClick={() => changeClothes('face')}>
                            表情
                        </div>
                        <div className='scroll-item clothes' onClick={() => changeClothes('body')}>
                            衣服
                        </div>
                        <div className='scroll-item clothes' onClick={() => changeClothes('facial')}>
                            胡须
                        </div>
                        <div className='scroll-item clothes' onClick={() => changeClothes('glass')}>
                            眼镜
                        </div>
                        <div className='scroll-item clothes' onClick={() => changeClothes('reset')}>重置</div>
                        <div className='scroll-item clothes' onClick={() => save()}>保存</div>
                    </div>
                </div>
            </div>
        </CartoonWrapper>
    );
};

export default Cartoon;
