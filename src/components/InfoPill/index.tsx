import './style.css';

interface InfoPillProps {
  keyInfo: string;
  valueInfo: string;
}

export function InfoPill({ keyInfo, valueInfo }: InfoPillProps) {
  return (
    <div className="infopill">
      <span className="infopill__keyInfo">{keyInfo}</span>
      <span className="infopill__valueInfo">{valueInfo}</span>
    </div>
  );
}
