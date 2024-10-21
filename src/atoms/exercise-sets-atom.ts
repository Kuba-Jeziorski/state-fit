import { atom } from "jotai";
import { ExerciseSets } from "../constants/types";

// all sets of single exercise (i.e. Dumbbells flat bench press)
export const exerciseSetsAtom = atom<ExerciseSets>({});
