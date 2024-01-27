import styled from "styled-components";

export const CartoonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 80%;
  padding-top: 10%;

  .image {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    background-color: rgb(243, 232, 255);
  }

  .option {
    width: 80%;

    .scroll-wrapper {
      box-sizing: border-box;
      position: relative;
      width: 90%;
      margin: 80px auto;
      white-space: nowrap;
      overflow: hidden;
      border-radius: 20px;
      background-color: rgb(38, 38, 38);
      padding: 12px 24px;
      .scroll-content {
        box-sizing: border-box;
        display: inline-block;
      }
      .scroll-item {
        background-color: #AE5D29;
        width: 50px;
        height: 50px;
        line-height: 50px;
        display: inline-block;
        border-radius: 100%;
        color: white;
        margin-right: 12px;
      }
      .colors{
        color: transparent;
      }
      .clothes{
        background-color: rgb(64,64,64);
        text-align: center;
        
      }
      .line{
        display: inline-block;
        color: aliceblue;
      }
    }
  }
`;
