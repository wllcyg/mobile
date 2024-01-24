import styled from "styled-components";

const bgColorMenu = '#1d1d27'
const duration = '.7s'
export const Container = styled.div`
    .menu {
        margin: 0;
        display: flex;
        width: 100%;
        font-size: 1.5em;
        padding: 0 2.85em;
        position: relative;
        align-items: center;
        justify-content: center;
        background-color: ${bgColorMenu};
    }

    .menu__item {
        all: unset;
        flex-grow: 1;
        z-index: 100;
        display: flex;
        cursor: pointer;
        position: relative;
        border-radius: 50%;
        align-items: center;
        will-change: transform;
        justify-content: center;
        padding: 0.55em 0 0.85em;
        transition: transform ${duration};
    }

    .menu__item::before {

        content: "";
        z-index: -1;
        width: 4.2em;
        height: 4.2em;
        border-radius: 50%;
        position: absolute;
        transform: scale(0);
        transition: background-color ${duration}, transform ${duration};

    }

    .menu__item.active {

        transform: translate3d(0, -.8em, 0);

    }
    .menu__item.active::before{

        transform: scale(1);
        background-color: ${ props => props.color };

    }

    .icon{

        width: 2.6em;
        height: 2.6em;
        stroke: white;
        fill: transparent;
        stroke-width: 1pt;
        stroke-miterlimit: 10;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 400;

    }
    .menu__item.active .icon {

        animation: strok 1.5s reverse;

    }

    @keyframes strok {

        100% {

            stroke-dashoffset: 400;

        }

    }
    .menu__border{

        left: 0;
        bottom: 99%;
        width: 10.9em;
        height: 2.4em;
        position: absolute;
        clip-path: url(#menu);
        will-change: transform;
        background-color: var(--bgColorMenu);
        transition: transform var(--timeOut , ${duration});

    }

    .svg-container {

        width: 0;
        height: 0;
    }


    @media screen and (max-width: 50em) {
        .menu{
            font-size: .8em;
        }
    }
`