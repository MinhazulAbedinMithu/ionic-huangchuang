import iconFootball from "../../images/category/football.png";
import iconLudo from "../../images/category/ludo.png";
import iconCard from "../../images/category/card.png";
import iconGaming from "../../images/category/gaming.png";
import iconPool from "../../images/category/pool.png";
import iconElectric from "../../images/category/electric.png";
import iconEntertaint from "../../images/category/entertaint.png";
import imgCard1 from "../../images/category/1.png";
import imgCard2 from "../../images/category/3.png";
import imgFlag from "../../images/category/flag.png";

export const categoryTitleData: { title: string; icon: string }[] = [
  {
    title: "反波胆",
    icon: iconFootball,
  },
  {
    title: "体育",
    icon: iconFootball,
  },
  {
    title: "真人",
    icon: iconLudo,
  },
  {
    title: "棋牌",
    icon: iconCard,
  },
  {
    title: "电竞",
    icon: iconGaming,
  },
  {
    title: "彩票",
    icon: iconPool,
  },
  {
    title: "电子",
    icon: iconElectric,
  },
  {
    title: "娱乐",
    icon: iconEntertaint,
  },
];

export const categoryBodyData: {
  bg: string;
  catTag?: string;
  discound?: number;
  title: string;
  tagline: string;
  flag?: string;
  tags: string[];
}[] = [
  {
    bg: imgCard1,
    title: "xx体育",
    discound: 118,
    flag: imgFlag,
    tagline: "hch SPORTS",
    tags: ["反波胆"],
  },
];
