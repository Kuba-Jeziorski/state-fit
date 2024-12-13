import { atomWithStorage } from "jotai/utils";
import {
  TOKEN_NOT_PROVIDED,
  TOKEN_PENDING,
  TOKEN_PROVIDED,
} from "../constants/constants";

type TokenProps =
  | typeof TOKEN_PROVIDED
  | typeof TOKEN_NOT_PROVIDED
  | typeof TOKEN_PENDING;

export const tokenAtom = atomWithStorage<TokenProps>("token", TOKEN_PENDING);
