import styled from "@emotion/styled";

const CookieFooterDiv = styled.div`
  width: 100%;

  p {
    font-weight: 500;
    font-size: 0.8rem;
    text-transform: uppercase;
  }

  .dynamic-bracket {
    position: relative;

    :hover::before {
      position: absolute;
      content: "[";
      left: -5px;
    }

    :hover::after {
      position: absolute;
      content: "]";
    }
  }

  div {
    padding: 10px;
    display: flex;
    align-items: center;

    button {
      margin-left: auto;
      cursor: pointer;

      background-color: #000;
      color: #fff;
      padding: 4px 10px;
    }
  }
`;

const CookieFooter = () => {
  return (
    <CookieFooterDiv>
      <div>
        <p>
          This website uses cookies to ensure you get the best experience. For
          more information about how we use cookies, please consult our Cookie
          Policy.
        </p>
        <button>
          <span className="dynamic-bracket">Accept {"&"} Close</span>
        </button>
      </div>
    </CookieFooterDiv>
  );
};

export default CookieFooter;
