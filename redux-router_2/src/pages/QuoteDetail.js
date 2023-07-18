import { Fragment } from "react";
import { useParams, Route } from "react-router-dom/cjs/react-router-dom.min";
import Comments from "../components/comments/Comments";


const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>quote detail page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
