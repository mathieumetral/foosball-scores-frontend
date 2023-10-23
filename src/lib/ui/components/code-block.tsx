import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
}

export function CodeBlock({children}: Props) {
  return <code className="mx-1 rounded bg-slate-300 p-1 text-red-500">{children}</code>;
}
