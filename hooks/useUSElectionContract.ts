// import US_ELECTION_ABI from "../contracts/USElection.json";
// import type { USElection__factory } from "../contracts/types/factories";
// import useContract from "./useContract";

// export default function useUSElectionContract(contractAddress?: string) {
//   return useContract<USElection__factory>(contractAddress, US_ELECTION_ABI);
// }


import US_ELECTION_ABI from "../contracts/USElection.json";
import type { USElection } from "../contracts/types";
import useContract from "./useContract";

export default function useUSElectionContract(contractAddress?: string) {
  return useContract<USElection>(contractAddress, US_ELECTION_ABI);
}