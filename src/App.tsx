import { SearchBar, VerticalResults } from "@yext/search-ui-react";

import ReportCard from "./ReportCard";

const App = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl bg-black text-center py-4 text-white">
        <span className="text-blue-200">Ice</span>berg Reports
      </h1>

      <div className="flex justify-center px-4 py-6">
        <div className="w-full max-w-5xl">
          <SearchBar />
          <VerticalResults CardComponent={ReportCard} />
        </div>
      </div>
    </div>
  );
};

export default App;
