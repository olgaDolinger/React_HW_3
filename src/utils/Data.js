import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import {Categories} from "./Categories";

export let Films = [
  {
    id: 0,
    title: "Pulp Fiction",
    category: [Categories.ActionAdventure],
    year: "2004",
    url: image1,
    overview:'',
    runtime: 160
  },
  {
    id: 1,
    title: "Bohemian Rhapsody",
    category: [Categories.Drama, Categories.Biography, Categories.Music],
    year: "2003",
    url: image2,
    overview:'',
    runtime: 156
  },
  {
    id: 2,
    title: "Bill: Vol 2",
    category: [Categories.OscarWinningFilm],
    year: "1994",
    url: image3,
    overview:'',
    runtime: 188
  },
  {
    id: 3,
    title: "Avengers: War of Infinity",
    category: [Categories.ActionAdventure],
    year: "2004",
    url: image4,
    overview:'',
    runtime: 145
  },
  {
    id: 4,
    title: "Inception",
    category: [Categories.ActionAdventure],
    year: "2003",
    url: image5,
    overview:'',
    runtime: 180
  },
  {
    id: 5,
    title: "Reservoir dogs",
    category: [Categories.OscarWinningFilm],
    year: "1994",
    url: image6,
    overview:'',
    runtime: 125
  },
];
