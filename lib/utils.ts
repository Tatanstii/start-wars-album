import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {
  MAX_CHARACTER_SPECIAL_STICKER_PACK,
  MAX_FILM_SPECIAL_STICKER_PACK,
  MAX_STARSHIP_SPECIAL_STICKER_PACK,
} from './const';
import { Album, Category } from '@/types/album';
import {
  CharacterSticker,
  FilmSticker,
  StarshipSticker,
} from '@/types/sticker-pack';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function checkIsSpecialStickerPack(id: number, type: Category) {
  if (type === Category.FILM) {
    return id >= 1 && id <= MAX_FILM_SPECIAL_STICKER_PACK;
  }
  if (type === Category.CHARACTER) {
    return id >= 1 && id <= MAX_CHARACTER_SPECIAL_STICKER_PACK;
  }

  if (type === Category.STARSHIP) {
    return id >= 1 && id <= MAX_STARSHIP_SPECIAL_STICKER_PACK;
  }

  return false;
}

export function checkExistSticker(
  category: Category,
  sticker: CharacterSticker | FilmSticker | StarshipSticker,
  album: Album
) {
  if (category === Category.CHARACTER) {
    return album.characters.some((item) => item.id === sticker.id);
  }
  if (category === Category.FILM) {
    return album.films.some((item) => item.id === sticker.id);
  }
  if (category === Category.STARSHIP) {
    return album.starships.some((item) => item.id === sticker.id);
  }
  return false;
}
