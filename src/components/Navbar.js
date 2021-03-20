import styled from "styled-components";
import download from "../assets/download.svg";
import printDocument from "../utils/pdfUtils";

const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  height: 2cm;
  width: 100%;
  background-color: #000000dd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledImg = styled.img`
  height: 1.2cm;
  filter: invert(100%);

  &:hover {
    cursor: pointer;
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <StyledImg src={download} alt="download" onClick={printDocument} />
    </StyledNavbar>
  );
}

export default Navbar;
