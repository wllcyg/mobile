import styled from "styled-components";
interface AppWrapperProps {
    colorbg: string;
}
export const AppWrapper = styled.div<AppWrapperProps>`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    main{
        flex: 1;
    }
    nav,main{
        background-color: ${props => props.colorbg};
        transition: background-color 0.3s;
    }
`;