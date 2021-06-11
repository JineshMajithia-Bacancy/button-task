import { useState } from "react";
import Loader from "react-loader-spinner";
import "./button.css";

interface Props {
  style?: React.CSSProperties;
  label?: string;
  icon?: React.Component;
}

const Button: React.FC<Props> = (props: any) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = () => {
    setIsLoading(true);
    console.log("Button Clicked !!!");
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading ? (
        <Loader type="Puff" color="#00BFFF" height={100} width={100} />
      ) : (
        <button
          className="primary"
          style={props.style || null}
          onClick={handleOnClick}
        >
          {props.icon ? <props.icon /> : null}
          {props.label || null}
        </button>
      )}
    </div>
  );
};

export default Button;
