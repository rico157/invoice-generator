import { useState } from "react";
import styled from "styled-components";
import InlineEdit from "./InlineEdit";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1cm;
`;

const StyledTable = styled.table`
  text-align: left;
`;

const StyledTableRight = styled.table`
  text-align: right;
`;

function Details() {
  const [num, setNum] = useState("XXX-XXX-XXXX");
  const [mail, setMail] = useState("Mail@Email.com");
  const [corp, setCorp] = useState("Corp");

  return (
    <StyledWrapper>
      <StyledTable>
        <tr>
          <td>Riccardo Cogoni ltd.</td>
        </tr>
        <tr>
          <td>Manchester Area, UK</td>
        </tr>
        <tr>
          <td>MX XXX</td>
        </tr>
      </StyledTable>
      <StyledTableRight>
        <tr>
          <td>
            <InlineEdit text={num} onSetText={(text) => setNum(text)} />
          </td>
        </tr>
        <tr>
          <td>
            <InlineEdit text={mail} onSetText={(text) => setMail(text)} />
          </td>
        </tr>
        <tr></tr>
        <tr>
          <td>
            <InlineEdit text={corp} onSetText={(text) => setCorp(text)} />
          </td>
        </tr>
      </StyledTableRight>
    </StyledWrapper>
  );
}

export default Details;
