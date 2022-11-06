import BOOK_LIBRARY_ABI from "../contracts/BookLibrary.json";
import type { BookLibrary__factory } from "../contracts/types/factories";
import useContract from "./useContract";

export default function useBookLibraryContract(contractAddress?: string) {
  return useContract<BookLibrary__factory>(contractAddress, BOOK_LIBRARY_ABI);
}
