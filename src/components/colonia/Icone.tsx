const paths: Record<string, React.ReactNode> = {
  mask: (
    <path d="M3 9c3-2 6-2 9 0 3-2 6-2 9 0-.5 5-3.5 8-6 8-1.5 0-2.3-1.5-3-3-.7 1.5-1.5 3-3 3-2.5 0-5.5-3-6-8Zm5 2.5h1.5m5 0H16" />
  ),
  shield: <path d="M12 3 4.5 6v5.5c0 4.5 3.2 8.2 7.5 9.5 4.3-1.3 7.5-5 7.5-9.5V6L12 3Zm-3 9 2 2 4-4" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />,
  wave: (
    <path d="M2 15c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M12 3c-2.5 3-4 5-4 6.5a4 4 0 0 0 8 0C16 8 14.5 6 12 3Z" />
  ),
  flask: <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7.5 15h9" />,
  calendar: <path d="M4 6h16v14H4zM4 10h16M8 3v4m8-4v4" />,
  clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v4.5l3 2" />,
  gift: (
    <path d="M4 11h16v10H4zM3 7h18v4H3zM12 7v14M12 7c-1.5-3-5-3.5-5-1.5S10 7 12 7Zm0 0c1.5-3 5-3.5 5-1.5S14 7 12 7Z" />
  ),
  card: <path d="M3 6h18v12H3zM3 10h18M7 15h3" />,
};

const Icone = ({ nome, className }: { nome: string; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
    className={className}>
    {paths[nome]}
  </svg>
);

export default Icone;
