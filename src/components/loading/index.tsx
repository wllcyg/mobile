import {Container} from "@/components/loading/style.tsx";

const Index = () => {
    return (
        <Container>
            <div className="inner fl just-center align-center h-full">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                     width="30px" height="30px" viewBox="0 0 30 30">
                    <rect x="0" y="10" width="4" height="10" fill="#FF6700" opacity="0.2">
                        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s"
                                 repeatCount="indefinite"/>
                        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s"
                                 repeatCount="indefinite"/>
                        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s"
                                 repeatCount="indefinite"/>
                    </rect>
                    <rect x="8" y="10" width="4" height="10" fill="#FF6700" opacity="0.2">
                        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s"
                                 dur="0.6s"
                                 repeatCount="indefinite"/>
                        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s"
                                 repeatCount="indefinite"/>
                        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s"
                                 repeatCount="indefinite"/>
                    </rect>
                    <rect x="16" y="10" width="4" height="10" fill="#FF6700" opacity="0.2">
                        <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s"
                                 repeatCount="indefinite"/>
                        <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s"
                                 repeatCount="indefinite"/>
                        <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s"
                                 repeatCount="indefinite"/>
                    </rect>
                </svg>
            </div>
        </Container>
    );
};

export default Index;
