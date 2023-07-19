import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

// const DUMMY_QUOTES = [
//   {
//     id: "q1",
//     author: "Max",
//     text: "Learning React is fun",
//   },
//   {
//     id: "q2",
//     author: "Trubel",
//     text: "Learning Routing is great!",
//   },
// ];

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedQuotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed " && (!loadedQuotes || loadedQuotes.length)) {
    return <NoQuotesFound />;
  }

  return (
    <div>
      <QuoteList quotes={loadedQuotes} />
    </div>
  );
};
export default AllQuotes;
