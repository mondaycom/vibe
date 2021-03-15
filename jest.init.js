import "babel-polyfill";
import ReactDOM from "react-dom";

ReactDOM.createPortal = node => node;
