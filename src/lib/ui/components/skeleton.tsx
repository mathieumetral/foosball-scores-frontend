import BaseSkeleton from 'react-loading-skeleton';

interface Props {
  className?: string;
}

export function Skeleton({className}: Props) {
  return <BaseSkeleton className={className} enableAnimation={false} />;
}
