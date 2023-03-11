let data = [
  {
    onLoadImg: "/img/heroHover/heroimg01.jpg",
    onHoverImg: "/img/heroHover/hoverHeroimg01.jpg",
    onLoadTitle: "OCTOBER'S VERY OWN CLASSIC COLLECTION",
    onLoadSubTitles: "",
    hoverSubTitles: [""],
  },
  {
    onLoadImg: "/img/heroHover/heroimg02.jpg",
    onHoverImg: "/img/heroHover/hoverHeroimg02.jpg",
    onLoadTitle: "",
    onLoadSubTitles: "",
    hoverSubTitles: [""],
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}
