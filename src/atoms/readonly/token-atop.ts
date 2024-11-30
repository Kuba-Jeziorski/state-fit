import { atomWithStorage } from "jotai/utils";
import { TOKEN_PROVIDED } from "../../constants/constants";

type TokenProps = typeof TOKEN_PROVIDED | null;

// export const tokenAtom = atomWithStorage<TokenProps>("token", null);
export const tokenAtom = atomWithStorage<TokenProps>("token", TOKEN_PROVIDED);
