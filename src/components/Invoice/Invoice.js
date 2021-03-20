import Header from "./Header";
import styled from "styled-components";
import Details from "./Details";
import Pricing from "./Pricing";
import Description from "./Description";
import Footer from "./Footer";

const StyledPage = styled.div`
  background: white;
  display: block;
  margin: 3cm auto;
  box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
  width: 21cm;
  height: 29.7cm;
`;

const PrintArea = styled.div`
  padding: 1cm;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

function Invoice() {
  return (
    <StyledPage>
      <PrintArea id="invoice">
        <div>
          <Header />
          <Details />
          <Description />
        </div>
        <Pricing />
        <Footer />
      </PrintArea>
    </StyledPage>
  );
}

export default Invoice;
