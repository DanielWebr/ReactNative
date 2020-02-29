export class Movie {
  title: string;
  episodeNumber: number;
  mainCharacters: Array<string>;
  description: string;
  poster: string;
  heroImage: string;

  constructor(
    title: string,
    episode_number: number,
    main_characters: Array<string>,
    description: string,
    poster: string,
    hero_image: string
  ) {
    this.title = title;
    this.episodeNumber = episode_number;
    this.mainCharacters = main_characters;
    this.description = description;
    this.poster = poster;
    this.heroImage = hero_image;
  }
}
