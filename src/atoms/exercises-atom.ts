import { atom } from "jotai";
import { Exercises } from "../constants/types";

// all exercises of single training day
export const exercisesAtom = atom<Exercises>({});
