import styled from "@emotion/styled";
import Link from "next/link";
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

  a {
    position: relative;
    font-weight: 500;
    font-size: 0.75rem;
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
      width: 48.75%;
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
          <Link href="/collections/all">catalog</Link>
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
