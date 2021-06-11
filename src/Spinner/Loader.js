import Loader from "react-loader-spinner";

function showLoader() {
  console.log("in loader");
  return (
    <Loader
      type="Circles"
      color="#00BFFF"
      height={80}
      width={80}
      timeout={5000}
    />
  );
}

export default showLoader;
