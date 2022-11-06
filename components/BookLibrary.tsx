import type { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import useBookLibraryContract from "../hooks/useBookLibraryContract";

type BookLibraryContract = {
  contractAddress: string;
};



const BookLibrary = ({ contractAddress }: BookLibraryContract) => {
 
  const { account, library } = useWeb3React<Web3Provider>();
  const bookLibraryContract = useBookLibraryContract(contractAddress);
  console.log(bookLibraryContract);

  const [loading, setLoading] = useState(false);
  const [error,setError] = useState<string | undefined>();
 

  const [bookName, setbookName] = useState<string | undefined>();
  const [bookCount, setbookCount] = useState<number | undefined>();
  

  useEffect(() => {
    bookData();
  },[])

  const bookData = async () => {
    try { 
      const availableBookBNArray = await bookLibraryContract.getAvailableBooks();
      const avlBook = availableBookBNArray.map((item) => item.toNumber());
      avlBook.forEach(async element => {
      const { 0: bookName } = await bookLibraryContract.getBookDetail(element);
      const { 1: totalCount } = await bookLibraryContract.getBookDetail(element);
      console.log(bookName + " Copies: " + totalCount);

      // setbookName(bookName);
      // setbookCount(totalCount);
      });
    }
    catch(e)
    {"getCurrentLeader:"  + setError(e.message)}
  }

  const bookNameInput = (input) => {
    setbookName(input.target.value)
  }

  const bookCopiesInput = (input) => {
    setbookCount(input.target.value)
  }

  // const bideVotesInput = (input) => {
  //   setVotesBiden(input.target.value)
  // }

  // const trumpVotesInput = (input) => {
  //   setVotesTrump(input.target.value)
  // }

  // const seatsInput = (input) => {
  //   setStateSeats(input.target.value)
  // }

  const submitBookResults = async () => {
    try {
      // const addBook = await bookLibraryContract.addBook(bookNameInput, 4);
      // var transactionReceipt = await addBook.wait();
      // if (transactionReceipt.status != 1) { // 1 means success
      //   console.log("Add book transaction was not successful")
      //   return 
      //   }
      // await bookData()
    } catch (error) {
     setError( "submitStateResults" + error.message)
    }
    
  }

  const resetForm = async () => {
    // setName('');
    // setVotesBiden(0);
    // setVotesTrump(0);
    // setStateSeats(0);
  }



  return (
    <div className="results-form">
    <p>{contractAddress}</p>
    
    <form>
      <label>
        Add Book Name:
        <input onChange={bookNameInput} value={bookName} type="text" name="state" />
      </label>
      <label>
        Book copies:
        <input onChange={bookCopiesInput} value={bookCount} type="number" name="biden_votes" />
      </label>
     
      {/* <input type="submit" value="Submit" /> */}
    </form>
    <div className="button-wrapper">
      <button onClick={submitBookResults}>Add Book</button>
    </div>
    <div>{error}</div>
    <div>{loading}</div>
    <div>Book Name: {bookName}</div>
    <div>Book count: {bookCount}</div>
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

export default BookLibrary;
