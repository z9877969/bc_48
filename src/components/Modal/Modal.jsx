import s from "./Modal.module.scss";
import { createPortal } from "react-dom";
import { Component } from "react";

const modalRoot = document.querySelector("#modal-root");

// ({ title, url, closeModal })
class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleCloseModalByEscape);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleCloseModalByEscape);
  }

  handleCloseModalByEscape = (e) => {
    if (e.code === "Escape") {
      console.log("Escape");
      this.props.closeModal();
    }
  };

  handleCloseModal = (e) => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { url, title } = this.props;
    return createPortal(
      <div className={s.backdrop} onClick={this.handleCloseModal}>
        <h1 className={s.title}>
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h1>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
