import styled from "styled-components";

export const NEXT = "NEXT";
export const PREV = "PREV";

export const Item = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => `${props.color}`};
`;

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
    console.log(props);
    if (!props.sliding) return "translateY(-100%)";
    if (props.dir === PREV) return "translateY(2 * (100%))";
    return "translateY(0%)";
  }};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 100%;
  height: 100%;
  order: ${props => props.order};
`;

export const SlideButton = styled.button`
    color: #ffffff;
    font-family: Open Sans;
    font-size: 16px;
    font-weight: 100;
    padding: 10px;
    background-color: #f66f3e;
    border: 1px solid white;
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  float: ${props => props.float};

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;

export const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 100%;
`;

export const ExtraInfo = styled.div`
  margin-top: 25px;
  display: inline-block;
`;

export const Code = styled.code`
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  margin: 0;
  padding: 0.2em 0.4em;
`;
