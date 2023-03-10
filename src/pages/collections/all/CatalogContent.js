import styled from "@emotion/styled";
import PrintOneImgBox from "./PrintOneImgBox";

const CatalogContentDiv = styled.div`
  width: 100%;

  h4 {
    position: relative;
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
    text-transform: uppercase;

    .fixed-bracket {
      position: relative;
      margin-left: 10px;

      ::before {
        position: absolute;
        content: "[";
        left: -5px;
      }
      ::after {
        position: absolute;
        content: "]";
      }
    }
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

  .top-div {
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

const CatalogContent = () => {
  let obj = {
    onLoadImg:
      "https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/47d433f4-6fa7-42e4-9a8f-18dc7618f492/",
    hoverImg:
      "https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/2d10c2d5-e293-48e2-8a22-4407b5045bf9/",
    onLoadTitle: "CHENILLE BUBBLE OWL HOODIE",
    onLoadSubTitles: "৳18300",
    hoverSubTitles: ["xx", "s", "m", "l"],
  };

  return (
    <CatalogContentDiv>
      <div className="top-div">
        <div>
          <h4>
            home <span>{">"}</span> all
          </h4>
        </div>
        <div>
          <h4 className="dynamic-bracket">filter</h4>
        </div>
        <div>
          <h4>
            4 <span className="fixed-bracket">6</span>
          </h4>
        </div>
        <div>
          <h4 className="dynamic-bracket">need help?</h4>
        </div>
      </div>

      <div>
        <PrintOneImgBox obj={obj} />
      </div>
    </CatalogContentDiv>
  );
};

export default CatalogContent;
