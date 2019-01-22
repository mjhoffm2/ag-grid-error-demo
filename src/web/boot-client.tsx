import * as React from 'react';
import * as ReactDOM from 'react-dom'
import {Home} from "./components/Home";

//polyfills for IE
import "core-js/shim"

const Routes = (() =>
    <Home />
);

ReactDOM.render(
    <Routes />,
    document.getElementById('root')
);
