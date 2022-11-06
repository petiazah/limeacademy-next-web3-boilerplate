import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import useUSElectionContract from "../hooks/useUSElectionContract";
import { SpinnerDotted } from 'spinners-react';

type USContract = {
  contractAddress: string;
};

export enum Leader {
  UNKNOWN,
  BIDEN,
  TRUMP
}

const USLibrary = ({ contractAddress }: USContract) => {

  const { account, library } = useWeb3React<Web3Provider>();
  const usElectionContract = useUSElectionContract(contractAddress);
  const [currentLeader, setCurrentLeader] = useState<string | undefined>('Unknown');
  const [name, setName] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(false);
  const [votesBiden, setVotesBiden] = useState<number | undefined>();
  const [votesTrump, setVotesTrump] = useState<number | undefined>();
  const [stateSeats, setStateSeats] = useState<number | undefined>();

  const [totalSeatsBiden, settoTalSeatsBiden] = useState<number | undefined>();
  const [totalSeatsTrump, settoTalSeatsTrump] = useState<number | undefined>();
  const [electionEnded, setElectionEnded] = useState<boolean | undefined>();
  



  useEffect(() => {
    getCurrentLeader();
    getTotalSeats();
    electionEnd();
  }, [currentLeader])

  usElectionContract.on('LogStateResult', (winner, stateSeats, state, tx) => {
    getCurrentLeader();
    getTotalSeats();
    electionEnd();
  });

  usElectionContract.on('LogElectionEnded', (winner) => {
    setElectionEnded(true);
  });

  const getCurrentLeader = async () => {
    try {
      const currentLeader = await usElectionContract.currentLeader();
      setCurrentLeader(currentLeader == Leader.UNKNOWN ? 'Unknown' : currentLeader == Leader.BIDEN ? 'Biden' : 'Trump')
    }
    catch (e) { "getCurrentLeader:" + setError(e.message) }
  }

  const getTotalSeats = async () => {
    try {
      // const biden = await usElectionContract.seats[Leader.BIDEN];
      const trump = await usElectionContract.seats(Leader.TRUMP);
      const biden = await usElectionContract.seats(Leader.BIDEN);
      settoTalSeatsBiden(trump);
      settoTalSeatsTrump(biden)
    }
    catch (e) { "getTotalSeats:" + setError(e.message) }
  }

  const electionEnd = async () => {
    try {
      const electionState = await usElectionContract.electionEnded();
      // console.log(electionState);
      setElectionEnded(electionState);
    }
    catch (e) { "electionEnd:" + setError(e.message) }
  }

  const stateInput = (input) => {
    setName(input.target.value)
  }

  const bideVotesInput = (input) => {
    setVotesBiden(input.target.value)
  }

  const trumpVotesInput = (input) => {
    setVotesTrump(input.target.value)
  }

  const seatsInput = (input) => {
    setStateSeats(input.target.value)
  }

  const endElection = async () => {
    try {
      const end = await usElectionContract.endElection();
      resetForm();
    } catch (error) {
      setError("endElection: " + error.message)
    }
  }

  const submitStateResults = async () => {
    try {
      const result: any = [name, votesBiden, votesTrump, stateSeats];
      setLoading(true);
      const tx = await usElectionContract.submitStateResult(result);
      await tx.wait();
      setLoading(false);
      resetForm();
    } catch (error) {
      setError("submitStateResults: " + error.message)
    }

  }

  const resetForm = async () => {
    setName('');
    setVotesBiden(0);
    setVotesTrump(0);
    setStateSeats(0);
  }

  return (
    <div className="results-form">
      <p>{contractAddress}</p>
      <p>
        Current Leader is: {currentLeader}
      </p>
      <div className="button-wrapper">
        <button onClick={endElection}>End Election</button>
      </div>
      <form>
        <label>
          State:
          <input onChange={stateInput} value={name} type="text" name="state" />
        </label>
        <label>
          BIDEN Votes:
          <input onChange={bideVotesInput} value={votesBiden} type="number" name="biden_votes" />
        </label>
        <label>
          TRUMP Votes:
          <input onChange={trumpVotesInput} value={votesTrump} type="number" name="trump_votes" />
        </label>
        <label>
          Seats:
          <input onChange={seatsInput} value={stateSeats} type="number" name="seats" />
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
      <div className="button-wrapper">
        <button onClick={submitStateResults}>Submit Results</button>
      </div>
      <div>{error}</div>
      <div>
        <SpinnerDotted enabled={loading} />
      </div>
      <div>
        Total Seats BIDEN: {totalSeatsBiden}
      </div>
      <div> Total Seats TRUMP: {totalSeatsTrump}</div>
      <div> Election ended: {String(electionEnded)}</div>



      <style jsx>{`
        .results-form {
          display: flex;
          flex-direction: column;
        }

        .button-wrapper {
          margin: 20px;
        }
        
      `}</style>
    </div>
  );
};

export default USLibrary;
