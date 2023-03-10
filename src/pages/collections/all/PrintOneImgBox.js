import styled from "@emotion/styled";
let ImgInfoContainer = styled.div`
  width: 100%;
  background-color: aqua;

  img {
    width: 300px;
  }
`;

const PrintOneImgBox = ({ obj }) => {
  let { onLoadImg, hoverImg, onLoadTitle, onLoadSubTitles, hoverSubTitles } =
    obj;

  return (
    <ImgInfoContainer>
      <div className="relative">
        <img src={onLoadImg} alt="" />
        <p className="title">{onLoadTitle}</p>
        <ul className="sub-ul">
          <li>{onLoadSubTitles}</li>
        </ul>
      </div>

      <div className="absolute">
        <img src={hoverImg} alt="" />
        <p className="title">quick add</p>
        <ul className="sub-ul">
          {hoverSubTitles.map((itm, i) => (
            <li key={i}>{itm}</li>
          ))}
        </ul>
      </div>
    </ImgInfoContainer>
  );
};

export default PrintOneImgBox;
