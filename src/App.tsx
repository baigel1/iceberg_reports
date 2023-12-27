import { SearchBar, VerticalResults } from "@yext/search-ui-react";

import ReportCard from "./ReportCard";

const App = () => {
  return (
    <div className="flex justify-center px-4 py-6">
      <div className="w-full max-w-5xl">
        <SearchBar />
        <VerticalResults CardComponent={ReportCard} />
      </div>
    </div>
  );
};

export default App;
