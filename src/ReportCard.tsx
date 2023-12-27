import { CardProps } from "@yext/search-ui-react";

const ReportCard = ({ result }: CardProps): JSX.Element => {
  const reportUrl: any = result.rawData.c_file;
  console.log(result);
  return (
    <div className="border border-blue-600 p-8 m-8">
      <div className="font-bold text-blue-600 cursor-pointer">
        <a href={reportUrl.url}>{result.name}</a>
      </div>
      <div className="my-2 text-slate-500">{result.segment?.text}</div>
      <div>Score: {result.segment?.score}</div>
    </div>
  );
};

export default ReportCard;
