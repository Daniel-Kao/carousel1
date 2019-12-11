import React from "react";
import { Item, AppContainer, Code } from "./components";
import Carousel from "./Carousel";
// CREDITS for Carousel:
// https://medium.com/@incubation.ff/build-your-own-css-carousel-in-react-part-one-86f71f6670ca

function App() {
  return (
    <AppContainer>
      <p>
        Carousel impliments <Code>useSwipeable</Code> hook to track touch/swipe
      </p>
      <Carousel title="Carousel">
        <Item color="red" />
        <Item color="yellow" />
        <Item color="blue" />
        <Item color="green" />
        <Item color="black" />
      </Carousel>
    </AppContainer>
  );
}

export default App;
