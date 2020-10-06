import Theme from "./components";
import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages/trevan-theme/src/index.js</pre>
    </>
  );
};

export default {
  name: "trevan-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: []
    }
  },
  actions: {
    theme: {}
  }
};
