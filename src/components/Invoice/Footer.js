import styled from "styled-components";

const StyledWrapper = styled.div``;

const StyledTable = styled.table`
  text-align: left;
  width: 100%;
  line-height: 2;
  th {
    background-color: #eee;
  }
`;

function Footer() {
  return (
    <StyledWrapper>
      <StyledTable>
        <tr>
          <th>Personal Code:</th>
        </tr>
        <td>UK URYTCN9WOIUYWCC5N8720</td>
        <tr></tr>
      </StyledTable>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </StyledWrapper>
  );
}

export default Footer;
