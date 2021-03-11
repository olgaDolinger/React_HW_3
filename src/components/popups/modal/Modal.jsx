import * as React from "react";
import * as ReactDOM from "react-dom";

class Modal extends React.Component {
  modalRoot = document.getElementById("root");
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
      this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}

export default Modal;
