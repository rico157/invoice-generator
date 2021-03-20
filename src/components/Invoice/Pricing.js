import { useState } from "react";
import styled from "styled-components";
import InlineEdit from "./InlineEdit";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1cm 0;
  line-height: 2;
`;

const StyledTable = styled.table`
  text-align: right;
  th {
    background-color: #eee;
  }
  th:nth-child(2) {
    text-align: right;
    width: 3cm;
  }
  td:nth-child(2) {
    text-align: right;
    width: 3cm;
  }
`;

function Pricing() {
  const [stampText, setStampText] = useState(2);
  const [amountText, setAmountText] = useState(0);

  return (
    <StyledWrapper>
      <StyledTable>
        <tr>
          <th></th>
          <th>Prezzo</th>
        </tr>
        <tr>
          <td>Amount</td>
          <td>
            £{" "}
            <InlineEdit
              lineH="1"
              text={amountText}
              align="right"
              onSetText={(text) => setAmountText(text)}
            />
          </td>
        </tr>
        <tr>
          <td>Stamp</td>
          <td>
            £{" "}
            <InlineEdit
              lineH="1"
              align="right"
              text={stampText}
              onSetText={(text) => setStampText(text)}
            />
          </td>
        </tr>
        <tr>
          <th>Total</th>
          <td>€ {parseInt(stampText) + parseInt(amountText)}</td>
        </tr>
      </StyledTable>
    </StyledWrapper>
  );
}

export default Pricing;
