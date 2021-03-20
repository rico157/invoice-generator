import styled from "styled-components";
import logo from "../../assets/logo.svg";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledImg = styled.img`
  width: 3cm;
`;

const StyledStamp = styled.div`
  width: 5cm;
  height: 4cm;
  background-color: #ddd;
  margin: 0 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  line-height: 0.7;
`;

function Header() {
  return (
    <StyledWrapper>
      <StyleLogoWrapper>
        <StyledImg src={logo} alt="logo" />
      </StyleLogoWrapper>
      <StyledStamp>
        <p>Stamp Area</p>
      </StyledStamp>
    </StyledWrapper>
  );
}

export default Header;
