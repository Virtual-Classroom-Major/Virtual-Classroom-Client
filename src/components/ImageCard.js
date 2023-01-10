const styleObject = {
  imageBoxStyle: {
    width: "20vw",
    height: "40vh",
    backgroundColor: "gray",
    overflow: "hidden",
  },
  imageHolderStyle: {
    width: "20vw",
    margin: "10px",
    height: "45vh",
    backgroundColor: "white",
    overflow: "hidden",
    borderRadius: "5px",
  },
  imageHolderStyleOdd: {
    backgroundColor: "purple",
    width: "20vw",
    margin: "10px",
    height: "45vh",
    overflow: "hidden",
    borderRadius: "5px",
  },
  titleText: {
    marginLeft: "10px",
  },
};
function ImageCard(props) {
  return (
    <div
      style={
        props.num % 2 == 0
          ? styleObject.imageHolderStyle
          : styleObject.imageHolderStyleOdd
      }
    >
      <div style={styleObject.imageBoxStyle}>
        <img
          src={"https://picsum.photos/400/550?random=" + props.num}
          alt="loading image"
          style={{ width: "20vw" }}
        />
      </div>
      <p style={styleObject.titleText}>{props.title}</p>
    </div>
  );
}

export default ImageCard;
