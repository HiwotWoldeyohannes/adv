import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Analytics from "./Analytics";
import Reroute from "./Reroute";
import {
  withAuthenticator,
} from "@aws-amplify/ui-react";



function App({ signOut }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="reroute/*" element={<Reroute />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default withAuthenticator(App);