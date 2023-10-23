import {Skeleton} from '@lib/ui/components/skeleton';
import {clsx} from 'clsx';
import {PlayersListHeaderColumns} from '@features/players/components/players-list';

export function PlayersListSkeleton() {
  const skeletons = ['bg-slate-200', 'bg-slate-100', 'bg-slate-50'];

  return (
    <tbody>
      {skeletons.map((className, index) => (
        <PlayersListItemSkeleton key={index} className={className} />
      ))}
    </tbody>
  );
}

function PlayersListItemSkeleton({className}: {className?: string}) {
  return (
    <tr className="border-b border-gray-200 text-gray-700 hover:bg-gray-50">
      {Array.from({length: PlayersListHeaderColumns.length}).map((_, index) => (
        <td key={index} className="px-4 py-2">
          <Skeleton className={clsx('w-16', className)} />
        </td>
      ))}
    </tr>
  );
}
