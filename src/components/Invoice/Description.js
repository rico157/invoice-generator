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
  text-align: left;
  table-layout: fixed;
  width: 100%;
  th {
    background-color: #eee;
  }
`;
const StyledDetails = styled.table`
  text-align: left;
  width: 70%;
  margin: 0 0 0.5cm 0;
`;

function Desciption() {
  const [storedText, setStoredText] = useState("Add notes here...");
  const [descriptionText, setDescriptionText] = useState(
    "Add description here..."
  );
  const [invoice, setInvoice] = useState("01/2021");

  return (
    <StyledWrapper>
      <StyledDetails>
        <tr>
          <th>Invoice #</th>
          <td>
            <InlineEdit
              text={invoice}
              onSetText={(text) => setInvoice(text)}
              lineH="1"
            />
          </td>
        </tr>
      </StyledDetails>
      <StyledTable>
        <tr>
          <th>Invoice Description</th>
        </tr>
        <tr>
          <td>
            <InlineEdit
              text={descriptionText}
              onSetText={(text) => setDescriptionText(text)}
            />
          </td>
        </tr>
      </StyledTable>
      <StyledTable>
        <tr>
          <th>Notes</th>
        </tr>
        <tr>
          <td>
            <InlineEdit
              text={storedText}
              onSetText={(text) => setStoredText(text)}
              lineH="3"
            />
          </td>
        </tr>
      </StyledTable>
    </StyledWrapper>
  );
}

export default Desciption;
