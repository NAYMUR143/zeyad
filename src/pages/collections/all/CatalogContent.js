import styled from "@emotion/styled";
import PrintOneImgBox from "./PrintOneImgBox";
import { data } from "../../data";
import { Grid } from "@mui/material";

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
    padding: 20px 10px 10px 10px;
    display: flex;
    justify-content: space-between;
  }

  .img-arr-container {
    width: 100%;
  }
`;

const CatalogContent = () => {
  let imgDataArr = data();

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

      <div className="img-arr-container">
        <Grid
          container
          spacing={1.25}
          style={{
            padding: "10px",
          }}
        >
          {imgDataArr.map((obj, i) => (
            <Grid item xs={2} key={i}>
              <div className="single-img-container">
                <PrintOneImgBox obj={obj} />
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </CatalogContentDiv>
  );
};

export default CatalogContent;
