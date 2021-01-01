import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Error, Designs, Home, About } from "./Components";

function App() {
    return (
        <>
            <Router basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/designs">
                        <Designs />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/*">
                        <Error />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
