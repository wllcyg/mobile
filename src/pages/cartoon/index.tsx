import {CartoonWrapper} from "@/pages/cartoon/style.tsx";
import {BodySlot} from "@/pages/cartoon/components/body";
import {FacialSlot} from "@/pages/cartoon/components/facial";
import {HeadSlot} from "@/pages/cartoon/components/head";
import {FacialHairSlot} from "@/pages/cartoon/components/facialhair";
import {GlassesSlot} from "@/pages/cartoon/components/glasses";
import {useState} from "react";
const Cartoon = () => {
    const [bodyColor, setBodyColor] = useState('#AE5D29')
    const [faceColor, setFaceColor] = useState('#338B5B')
    const [hairColor, setHairColor] = useState('#22ccdd')
    const [facialHairColor, setFacialHairColor] = useState('#22ccdd')
    return (
        <CartoonWrapper>
            <div className="image">
                <svg id="avatar" width="100%" height="100%" viewBox="0 0 1400 1400" xmlns="http://www.w3.org/2000/svg" overflow="hidden">
                    <rect x="0" y="0" width="1400" height="1400" fill="transparent"></rect>
                    <g transform="translate(330, 150)">
                        <g transform="translate(-310, 512)">
                            <BodySlot color={bodyColor} index={1}/>
                        </g>
                        <HeadSlot index={3} faceColor={faceColor} hairColor={hairColor}/>
                        {/*表情*/}
                        <g transform="translate(310, 308)">
                            <FacialSlot index={3}/>
                        </g>
                        <g transform="translate(51, 392)">
                            {/*胡子颜色*/}
                            <FacialHairSlot index={3} color={facialHairColor}/>
                        </g>
                        <g transform="translate(190, 361)">
                            {/*眼镜颜色*/}
                            <GlassesSlot index={3}/>
                        </g>
                    </g>
                </svg>
            </div>
            <div className="option">
                option
            </div>
        </CartoonWrapper>
    );
};

export default Cartoon;
