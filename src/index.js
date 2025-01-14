import { BlueFoxScript } from "./index.es.js";

("use strict");
window.dispatchEvent(
  new CustomEvent("BlueFoxScript@Ready", {
    detail: { BlueFoxScript: BlueFoxScript },
  })
);
