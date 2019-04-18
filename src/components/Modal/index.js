import React from "react";

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="dialog">
          <button className="close" onClick={this.props.onClose}>
            &#10006;
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Modal;
