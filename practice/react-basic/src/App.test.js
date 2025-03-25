// import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Wrap = styled.div`
  div {
    display: flex;
    width: 200px;
    height: 100px;
    background: #f8f9fa;
  }
`;

function Test() {
  return (
    <Wrap>
      <div>123</div>
    </Wrap>
  );
}

export default Test;
