import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const StickyCollectionDiv = styled.div`
  width: 100%;
  margin-top: 120px;

  .view-collection-link {
    margin-top: 10px;
  }

  h3 {
    font-weight: 500;
  }

  p {
    font-weight: 500;
    font-size: 0.75rem;
    cursor: pointer;
    text-transform: uppercase;
  }

  .main {
    padding: 10px;
  }

  .grid-container {
    padding: 10px;
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
`;

const MiniImgContainer = styled.div`
  img {
    width: 100%;
    height: auto;
  }

  p {
    visibility: hidden;
  }

  :hover {
    p {
      visibility: visible;
    }
  }
`;

const StickyCollection = () => {
  return (
    <StickyCollectionDiv>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "inherit",
          },
        }}
      >
        <div className="grid-container">
          <Grid container spacing={1.3}>
            <Grid item xs={6}>
              <Grid container spacing={1.3} style={{ height: "100%" }}>
                <Grid
                  item
                  xs={12}
                  style={{
                    position: "sticky",
                    top: 0,
                    left: 0,
                    paddingBottom: "134px",
                    paddingTop: "60px",
                  }}
                >
                  <Grid container spacing={1.3}>
                    <Grid item xs={3} xl={2}>
                      <MiniImgContainer>
                        <Image
                          src={
                            "https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/69fb71b5-88d5-45cb-9006-9cf4221616a4/"
                          }
                          alt="img-alt"
                          width={1200}
                          height={1200}
                        />
                        <p>OVO® ESSENTIALS POLO</p>
                        <p>৳100</p>
                      </MiniImgContainer>
                    </Grid>

                    <Grid item xs={3} xl={2}>
                      <MiniImgContainer>
                        <Image
                          src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/2e6a00a6-2380-46a8-9cf7-ddfce847bf00/"
                          alt="img-alt"
                          width={1200}
                          height={1200}
                        />
                        <p>OVO® ESSENTIALS POLO</p>
                        <p>৳100</p>
                      </MiniImgContainer>
                    </Grid>
                    <Grid item xs={3} xl={2}>
                      <MiniImgContainer>
                        <Image
                          src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/dc05670d-b779-40e7-8c80-f7e76d7ac1a6/"
                          alt="img-alt"
                          width={1200}
                          height={1200}
                        />
                        <p>OVO® ESSENTIALS SWEATPANT</p>
                        <p>৳100</p>
                      </MiniImgContainer>
                    </Grid>

                    <Grid item xs={3} xl={2}>
                      <MiniImgContainer>
                        <Image
                          src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/1eab89f7-0c7d-418b-b408-107800b34dcb/"
                          alt="img-alt"
                          width={1200}
                          height={1200}
                        />
                        <p>OVO® ESSENTIALS SWEATPANT</p>
                        <p>৳100</p>
                      </MiniImgContainer>
                    </Grid>
                    <Grid item xs={3} xl={2}>
                      <MiniImgContainer>
                        <Image
                          src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/6ec143c8-9d69-4465-978f-66828a080549/"
                          alt="img-alt"
                          width={1200}
                          height={1200}
                        />
                        <p>OVO® ESSENTIALS SPORTCAP</p>
                        <p>৳100</p>
                      </MiniImgContainer>
                    </Grid>

                    <Grid item xs={3} xl={2}>
                      <MiniImgContainer>
                        <Image
                          src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/d4db2db6-63bf-454a-96a2-0729d2758086/"
                          alt="img-alt"
                          width={1200}
                          height={1200}
                        />
                        <p>OVO® ESSENTIALS SPORTCAP</p>
                        <p>৳100</p>
                      </MiniImgContainer>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid
                  item
                  xs={12}
                  style={{
                    alignSelf: "flex-end",
                  }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={5.6}>
                      <h3>OVO® ESSENTIALS</h3>

                      <p>
                        “FUNCTIONAL ENOUGH FOR ALL-SEASON WEAR, VERSATILE ENOUGH
                        FOR EVERY OCCASION.” ©2023 — OCTOBER’S VERY OWN
                      </p>
                      <p></p>
                      <p className="dynamic-bracket view-collection-link">
                        VIEW COLLECTION
                      </p>
                    </Grid>

                    <Grid item xs={6.4}></Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <Image
                style={{
                  width: "100%",
                  height: "auto",
                  paddingTop: "50px",
                }}
                src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/de577ffd-90b1-498b-bede-1eb1528f9d91/"
                alt="img-alt"
                width={1200}
                height={1200}
              />
            </Grid>
          </Grid>
        </div>
      </Box>

      <Box
        sx={{
          display: {
            xs: "inherit",
            sm: "inherit",
            md: "none",
          },
        }}
      >
        <div className="grid-container">
          <Grid container spacing={1.3}>
            <Grid item xs={12}>
              <h3>OVO® ESSENTIALS</h3>

              <p>
                “FUNCTIONAL ENOUGH FOR ALL-SEASON WEAR, VERSATILE ENOUGH FOR
                EVERY OCCASION.” ©2023 — OCTOBER’S VERY OWN
              </p>
              <p></p>
              <p className="dynamic-bracket view-collection-link">
                VIEW COLLECTION
              </p>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={1.3}>
                <Grid item xs={12}>
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                      paddingTop: "50px",
                    }}
                    src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/de577ffd-90b1-498b-bede-1eb1528f9d91/"
                    alt="img-alt"
                    width={1200}
                    height={1200}
                  />
                </Grid>

                <Grid item xs={6}>
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    src={
                      "https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/69fb71b5-88d5-45cb-9006-9cf4221616a4/"
                    }
                    alt="img-alt"
                    width={1200}
                    height={1200}
                  />
                  <p>OVO® ESSENTIALS POLO</p>
                  <p>৳100</p>
                </Grid>
                <Grid item xs={6}>
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/2e6a00a6-2380-46a8-9cf7-ddfce847bf00/"
                    alt="img-alt"
                    width={1200}
                    height={1200}
                  />
                  <p>OVO® ESSENTIALS POLO</p>
                  <p>৳100</p>
                </Grid>
                <Grid item xs={6}>
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/dc05670d-b779-40e7-8c80-f7e76d7ac1a6/"
                    alt="img-alt"
                    width={1200}
                    height={1200}
                  />
                  <p>OVO® ESSENTIALS SWEATPANT</p>
                  <p>৳100</p>
                </Grid>
                <Grid item xs={6}>
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/1eab89f7-0c7d-418b-b408-107800b34dcb/"
                    alt="img-alt"
                    width={1200}
                    height={1200}
                  />
                  <p>OVO® ESSENTIALS SWEATPANT</p>
                  <p>৳100</p>
                </Grid>
                <Grid item xs={6}>
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/6ec143c8-9d69-4465-978f-66828a080549/"
                    alt="img-alt"
                    width={1200}
                    height={1200}
                  />
                  <p>OVO® ESSENTIALS SPORTCAP</p>
                  <p>৳100</p>
                </Grid>
                <Grid item xs={6}>
                  <Image
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                    src="https://res.cloudinary.com/shogun-frontend/image/fetch/f_auto,q_auto:eco,c_limit,w_1080/https://f.shgcdn.com/d4db2db6-63bf-454a-96a2-0729d2758086/"
                    alt="img-alt"
                    width={1200}
                    height={1200}
                  />
                  <p>OVO® ESSENTIALS SPORTCAP</p>
                  <p>৳100</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Box>
    </StickyCollectionDiv>
  );
};

export default StickyCollection;
