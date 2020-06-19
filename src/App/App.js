import React from 'react';
import "./App.scss"
import Table from "../Components/Table"
import Article from "../Components/Article"
import {
BrowserRouter as Router,
Switch,
Route,
} from "react-router-dom";

import docs from '../Db/docs'

function App() {
return (
    <div className="App">
    <Router>
        <Switch>
        <Route exact path="/">
            <Table/>
        </Route>
        {
            docs.map(
            ({name}, index) => {
                return(
                    
                    <Route path={"/" + index} key={index}>
                        <Article name={name}/>
                    </Route>
                )
                
            }
            )
        }
        </Switch>
    </Router>
    </div>
);
}

export default App;
