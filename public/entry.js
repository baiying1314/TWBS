require("!style-loader!css-loader!./style.css");
import {render} from "react-dom";
import React from "react"

import App from "./js/App";

render(<App />,document.getElementById("app"));
