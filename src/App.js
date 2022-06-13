import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import { Home } from "containers/Home";
import { WishList } from "containers/WishList";
import { Cart } from "./containers/Cart";
import { NotFound } from "containers/notFound/notFound";
import { SingleCard } from "containers/SingleCard/SingleCard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/wishlist" component={WishList} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/not-found" component={NotFound} />
        <Route path="/product/:id" component={SingleCard} />
        <Redirect to="./not-found" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
