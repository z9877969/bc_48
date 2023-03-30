import React from "react";
import Container from "../Container/Container";
import { MainTitle } from "./Header.styled";

const Header = ({ title, onClick }) => {
  return (
    <header>
      <Container>
        {onClick &&
          React.createElement(
            "button",
            { type: "button", className: "btn-goback", onClick: onClick },
            "GoBack"
          )
          // <button type="button" class="btn-goback" onClick={onClick}>
          //   <svg>
          //     <use href="../sprite.svg#icon-arrow-left2"></use>
          //   </svg>
          // </button>
        }
        <MainTitle>{title}</MainTitle>
      </Container>
    </header>
  );
};

export default Header;

// const fn = (x) => {
//     return 5 * x
// }
