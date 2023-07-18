import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun",
  },
  {
    id: "q2",
    author: "Trubel",
    text: "Learning Routing is great!",
  },
];

const AllQuotes = () => {
  return (
    <div>
      <QuoteList quotes={DUMMY_QUOTES} />
    </div>
  );
};
export default AllQuotes;
