import React, { useEffect, useState} from 'react'

function AboutScreen(props) {
  // const [width, setWidth] = useState(Number(props.width));
  // const [height, setHeight] = useState(Number(props.height));

  // const getImageURL = () => {
  //   return "http://localhost:5000/api/pics/pic/" + props.imageId
  // }

  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

AboutScreen.defaultProps = {
  width: "100",
  height: "100",
  imageId: "6357e42a36ece32caad9b25d"
};

export default AboutScreen;
// <img src={getImageURL()} width={width} height={height}></img>