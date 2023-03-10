import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect } from "react";

const HeaderDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;
  background-color: #fff;

  width: 100%;
  display: flex;
  justify-content: center;

  border-bottom: 1px solid #ededed;

  h4 {
    position: relative;
    font-weight: 500;
    font-size: 0.9rem;
    cursor: pointer;
    text-transform: uppercase;

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

  .header-container {
    padding: 10px;

    width: 100%;
    display: flex;

    .catalog-container {
      width: 48%;
      display: flex;
      align-items: center;
    }
  }

  img {
    cursor: pointer;
  }
`;

const Header = () => {
  const router = useRouter();

  useEffect(() => {
    let paddingTop_ = document.querySelector(".header-container").offsetHeight;
    document.querySelector("#__next").style.paddingTop = `${paddingTop_}px`;
  }, []);

  return (
    <HeaderDiv>
      <div className="header-container">
        <div className="catalog-container">
          <h4
            onClick={() => {
              router.push("/collections/all");
            }}
          >
            catalog
          </h4>
        </div>

        <div>
          <img
            onClick={() => {
              router.push("/");
            }}
            src="/img/svg/owl.svg"
            alt="main-logo"
          />
        </div>
      </div>
    </HeaderDiv>
  );
};

export default Header;
