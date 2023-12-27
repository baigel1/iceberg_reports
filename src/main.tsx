import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
import {
  provideHeadless,
  SearchHeadlessProvider,
  HeadlessConfig,
} from "@yext/search-headless-react";

const config: HeadlessConfig = {
  apiKey: "88f32f20156cc2506c9c064af7e136e0",
  experienceKey: "iceberg-report-doc-search",
  locale: "en",
  verticalKey: "reports",
};

const searcher = provideHeadless(config);

ReactDOM.render(
  <React.StrictMode>
    <SearchHeadlessProvider searcher={searcher}>
      <App />
    </SearchHeadlessProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
