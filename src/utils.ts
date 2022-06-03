import {LARGE, MEDIUM, SMALL} from "./constants";

export interface SizeSpec {
  width: number,
  height: number,
  areaWidth: number,
  areaHeight: number
}

export function getSize(size: number): SizeSpec {
  switch (size) {
    case SMALL:
      return {width:5, height: 5, areaWidth: 100, areaHeight: 100};
    case MEDIUM:
      return {width:10, height: 10, areaWidth: 120, areaHeight: 120};
    case LARGE:
      return {width:20, height: 18, areaWidth: 120, areaHeight: 120};
  }

  return getSize(SMALL);
}

export function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}