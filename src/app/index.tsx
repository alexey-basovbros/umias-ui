import React from "react";

import { withProviders } from "./providers";
import { Routing } from "pages";

const App: React.FC = (): JSX.Element => {
  return <Routing />
};

export default withProviders(App);