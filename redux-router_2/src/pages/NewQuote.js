import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const NewQuote = () => {
  const history = useHistory()
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push('/quotes')

  };
  return (
    <div>
      <QuoteForm onAddQuote={addQuoteHandler} />;
    </div>
  );
};
export default NewQuote;
