import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider } from "react-apollo"
import "sanitize.css/sanitize.css"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App.jsx"
import "./index.css"
import client from "./apollo"

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById("root") as HTMLElement
)
