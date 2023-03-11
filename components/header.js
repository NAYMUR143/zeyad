import styled from "@emotion/styled";
import Image from "next/image";
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
  .logo {
    width: 100px;
    height: 50px;
    img {
      width: 100%;
      object-fit: contain;
      height: 100%;
    }
  }
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

    justify-content: space-between;

    .catalog-container {
      display: flex;
      align-items: center;
    }
  }

  img {
    cursor: pointer;
  }

  .dynamic-bracket {
    position: relative;

    :hover::before {
      position: absolute;
      content: "[";
      left: -5px;
      bottom: 0;
    }

    :hover::after {
      position: absolute;
      content: "]";
      bottom: 0;
    }
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
          <Link href="/collections/all">24k catalog</Link>
        </div>

        <div
          className="logo"
          onClick={() => {
            router.push("/");
          }}
        >
          <img src="/img/logo.png" alt="main-logo" />
        </div>

        <div className="catalog-container">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
            }}
            className="dynamic-bracket"
          >
            BAG
          </a>
        </div>
      </div>
    </HeaderDiv>
  );
};

export default Header;
