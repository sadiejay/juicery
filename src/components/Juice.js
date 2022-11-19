function Juice(props) {
  // should display a clickable card with an image, and the title of the juice


  return (
    <div className="juiceCard">
      <img
        src= {props.details.imageSource}
        alt="juice"
      />
      <p>{props.details.juiceName}</p>
    </div>
  );
}

export default Juice;
