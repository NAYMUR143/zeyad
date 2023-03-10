import styled from "@emotion/styled";
import PrintOneImgBox from "./collections/all/PrintOneImgBox";
import { data } from "./data";
import { Grid } from "@mui/material";

const CatalogContentDivForViewCollectionRelated = styled.div`
  width: 100%;

  .view-collection-txt-related {
    color: #c4c4c4;

    span {
      margin-right: 10px;
    }
  }

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

  .dynamic-img-title-container {
    flex-direction: row !important;
    align-items: flex-start;
    justify-content: space-between;

    li {
      margin-top: unset;
      margin-right: 12px;
    }
  }

  .single-img-container {
    margin-bottom: 30px;
  }
`;

const RelatedViewCollection = () => {
  let imgDataArr = data();

  return (
    <CatalogContentDivForViewCollectionRelated>
      <div className="top-div">
        <Grid
          container
          spacing={1.25}
          style={{
            padding: "10px",
          }}
        >
          <Grid item xs={3}>
            <div>
              <h4>RELATED ITEMS</h4>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <h4>OVO® 2023</h4>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div></div>
          </Grid>
          <Grid item xs={3}>
            <div>
              <h4 className="view-collection-txt-related">
                <span>PREV</span>
                <span>NEXT</span>
              </h4>
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="img-arr-container">
        <Grid
          container
          spacing={1.25}
          style={{
            padding: "10px",
          }}
        >
          {imgDataArr.map((obj, i) => {
            if (i < 4) {
              return (
                <Grid item xs={3} key={i}>
                  <div className="single-img-container">
                    <PrintOneImgBox obj={obj} />
                  </div>
                </Grid>
              );
            }
          })}
        </Grid>
      </div>
    </CatalogContentDivForViewCollectionRelated>
  );
};

export default RelatedViewCollection;
