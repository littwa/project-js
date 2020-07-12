import './supercomp.css';
import { renderAPI } from '../Main/Main.js';
import { pagination, containerPag } from '../Navigation/Navigation.js';
//======================================================================================================
let n = document.querySelector('header');
let d = document.createElement('div');
d.classList.add('dd');
n.insertAdjacentElement('afterbegin', d);
d.insertAdjacentText('afterbegin', 'Компонент "supercomp (MY LIBARY)"|');
d.addEventListener('click', arrFromLocalStor);

// //====================================================================================================
export function arrFromLocalStor(e) {
  // console.log(e);
  containerPag.innerHTML = '';
  renderAPI.activePage = 1;
  renderAPI.infoAllFilm(arrayForLibaryLocalStorage, 1);
  renderAPI.activePage === 1;
  console.log(renderAPI.activePage);
}

//========================================================================================================

let arrayForLibaryLocalStorage = [
  {
    adult: false,
    backdrop_path: '/xXBnM6uSTk6qqCf0SRZKXcga9Ba.jpg',
    genre_ids: [10752, 28, 18],
    id: 516486,
    original_language: 'en',
    original_title: 'Greyhound',
    overview:
      'A first-time captain leads a convoy of allied ships carrying thousands of soldiers across the treacherous waters of the “Black Pit” to the front lines of WW2. With no air cover protection for 5 days, the captain and his convoy must battle the surrounding enemy Nazi U-boats in order to give the allies a chance to win the war.',
    popularity: 94.233,
    poster_path: '/AsdB9A2XGalCZVjlyG9tRf03IfW.jpg',
    release_date: '2020-07-10',
    title: 'Greyhound',
    video: false,
    vote_average: 5.5,
    vote_count: 16,
  },
  {
    adult: false,
    backdrop_path: '/tFB1aYWaWfRrxvWnbzSR5H3jbuN.jpg',
    genre_ids: [35, 18],
    id: 581465,
    original_language: 'ar',
    original_title: 'Nefta Football Club',
    overview:
      'In the south of Tunisia, two football fan brothers bump into a donkey lost in the middle of the desert on the border of Algeria. Strangely, the animal wears headphones over its ears.',
    popularity: 4.243,
    poster_path: '/wRa0zStfGUA345pdz4h2E3OxNzP.jpg',
    release_date: '2018-10-24',
    title: 'Nefta Football Club',
    video: false,
    vote_average: 7.3,
    vote_count: 33,
  },
  {
    adult: false,
    backdrop_path: '/oq72qzqW188dyHcGSn3ao8lqDWl.jpg',
    genre_ids: [16],
    id: 529811,
    original_language: 'en',
    original_title: 'The Box',
    overview:
      'You have probably heard of the phrase “to think outside the box”? Well, this is a film about such a box and the flat-headed creatures that live inside of it. Life in the Box is boring and miserable. Until one day a new baby boy starts to grow in the middle of the Box! This boy is very different from other flat-headed inhabitants of the Box. He’s happy, lively and curious. As the boy grows bigger and bigger, the flat-headed neighbours are becoming more and more annoyed with him. Until one day when he literally grows over their heads.',
    popularity: 0.6,
    poster_path: '/zHscRcfwwO9UcRLSwVzJc7duW7m.jpg',
    release_date: '2017-09-14',
    title: 'The Box',
    video: false,
    vote_average: 6.5,
    vote_count: 6,
  },
  {
    adult: false,
    backdrop_path: null,
    genre_ids: [27, 878],
    id: 81479,
    original_language: 'en',
    original_title: 'The Toy Box',
    overview:
      "When Ralph persuades his girlfriend, Donna, to participate in a bizarre party, she discovers the guests are to perform erotic plays in the presence of a corpse - Ralph's millionaire uncle. The players are promised gifts from the  Ralph and Donna await their turn, when the mansion's doors lock at midnight; and it's not long before they discover the players are being murdered by...the dead uncle?",
    popularity: 2.743,
    poster_path: '/zRgOvUwJcP9xkZpxGOulqmBpUkg.jpg',
    release_date: '1971-10-27',
    title: 'The Toy Box',
    video: false,
    vote_average: 5,
    vote_count: 9,
  },
  {
    adult: false,
    backdrop_path: '/ihX7NkakPzgf7y0W09xQex1bsQ3.jpg',
    genre_ids: [878, 53],
    id: 13686,
    original_language: 'en',
    original_title: 'The Kovak Box',
    overview:
      'David Norton is used to being in control. As a best-selling author, he decides the fate of his characters, their lives and their deaths. But what happens when his fictional world becomes all too real?',
    popularity: 6.593,
    poster_path: '/hK9p0x4JgPRaQhiQcH0EOR2W9ZQ.jpg',
    release_date: '2006-07-18',
    title: 'The Kovak Box',
    video: false,
    vote_average: 6,
    vote_count: 54,
  },
  {
    adult: false,
    backdrop_path: '/xZ5cnZEQ3uyPVjwsOTyhiFEBsD4.jpg',
    genre_ids: [80, 18, 53],
    id: 354979,
    original_language: 'en',
    original_title: 'Dog Eat Dog',
    overview:
      'Carved from a lifetime of experience that runs the gamut from incarceration to liberation, Dog Eat Dog is the story of three men who are all out of prison and now have the task of adapting themselves to civilian life.',
    popularity: 9.983,
    poster_path: '/zgIOmglyTy6HpcJ2DszmVzzTgZG.jpg',
    release_date: '2016-11-04',
    title: 'Dog Eat Dog',
    video: false,
    vote_average: 5,
    vote_count: 209,
  },
  {
    adult: false,
    backdrop_path: '/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg',
    genre_ids: [28, 18, 53],
    id: 545609,
    original_language: 'en',
    original_title: 'Extraction',
    overview:
      'Tyler Rake, a fearless mercenary who offers his services on the black market, embarks on a dangerous mission when he is hired to rescue the kidnapped son of a Mumbai crime lord…',
    popularity: 52.449,
    poster_path: '/wlfDxbGEsW58vGhFljKkcR5IxDj.jpg',
    release_date: '2020-04-24',
    title: 'Extraction',
    video: false,
    vote_average: 7.5,
    vote_count: 2611,
  },
  {
    adult: false,
    backdrop_path: '/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg',
    genre_ids: [28, 12, 878],
    id: 429617,
    original_language: 'en',
    original_title: 'Spider-Man: Far from Home',
    overview:
      'Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.',
    popularity: 66.782,
    poster_path: '/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg',
    release_date: '2019-06-28',
    title: 'Spider-Man: Far from Home',
    video: false,
    vote_average: 7.6,
    vote_count: 7760,
  },
  {
    adult: false,
    backdrop_path: '/7LU7ILWg6g1a5MQdukBZSHyiLv7.jpg',
    genre_ids: [28, 14],
    id: 8960,
    original_language: 'en',
    original_title: 'Hancock',
    overview:
      "Hancock is a down-and-out superhero who's forced to employ a PR expert to help repair his image when the public grows weary of all the damage he's inflicted during his lifesaving heroics. The agent's idea of imprisoning the antihero to make the world miss him proves successful, but will Hancock stick to his new sense of purpose or slip back into old habits?",
    popularity: 19.791,
    poster_path: '/7DyuV2G0hLEqHeueDfOqhZ2DVut.jpg',
    release_date: '2008-07-01',
    title: 'Hancock',
    video: false,
    vote_average: 6.3,
    vote_count: 6586,
  },
  {
    adult: false,
    backdrop_path: '/mjBanm608WUvCzBdLQTILmV1wHK.jpg',
    genre_ids: [28, 35, 10751],
    id: 10107,
    original_language: 'en',
    original_title: 'Firehouse Dog',
    overview:
      "Rexxx, Hollywood's top canine star, gets lost and is adopted into a shabby firehouse. He teams up with a young kid to get the station back on its feet.",
    popularity: 11.83,
    poster_path: '/q6wm2pmx8WiYrNa1vbCaabCUDcD.jpg',
    release_date: '2007-04-04',
    title: 'Firehouse Dog',
    video: false,
    vote_average: 5.9,
    vote_count: 127,
  },
  {
    adult: false,
    backdrop_path: '/yga88rASy0eNTxjDUN87xtN9HJR.jpg',
    genre_ids: [27],
    id: 26703,
    original_language: 'en',
    original_title: "Dracula's Dog",
    overview:
      "Russian soldiers accidentally unleash Dracula's servant, as well as his dog, during excavations in Romania. Together they set out for America, to find the last descendent of the great Count.",
    popularity: 8.937,
    poster_path: '/iE63xgOl9hCkr5aN3Bq2dk7iPpu.jpg',
    release_date: '1978-06-01',
    title: "Dracula's Dog",
    video: false,
    vote_average: 4.7,
    vote_count: 16,
  },
  {
    adult: false,
    backdrop_path: '/hqz8l7oLIOzwIDe5tfeYzTUoucq.jpg',
    genre_ids: [53],
    id: 684869,
    original_language: 'en',
    original_title: 'Burning Dog',
    overview:
      'When a video game designer stumbles into a blackmail conspiracy, he clashes with contract killers, Russian mobsters, and compromised cops in a wild journey through the bizarro world of Los Angeles. Uniquely told through a first-person point of view, Burning Dog is a relentless suspense thriller that keeps you guessing until the very end.',
    popularity: 2.514,
    poster_path: '/b9D1WtgNk2ULjd2eI0uq4eLynpd.jpg',
    release_date: '2020-03-17',
    title: 'Burning Dog',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
];
// console.log('supercomp:', arrayForLibaryLocalStorage);
export { arrayForLibaryLocalStorage };
