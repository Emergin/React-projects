import { Route } from "react-router-dom/cjs/react-router-dom.min";

const Welcome = () => {
  return (
    <section>
      <h1>The welcome page</h1>;
      <Route path="/welcome/new-user">
        <p> welcome new user</p>
      </Route>
    </section>
  );
};

export default Welcome;
