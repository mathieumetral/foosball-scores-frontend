'use client';

import {ErrorBoundaryFallbackProps} from '@lib/errors/boundary/error-boundary-with-retry';

export function PlayersListError(props: ErrorBoundaryFallbackProps) {
  return (
    <tbody>
      <tr>
        <td colSpan={8} className="py-4 text-center text-gray-500">
          We&apos;re sorry, but something went wrong.
          <br />
          <button className="mt-3 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white" onClick={props.retry}>
            Try again
          </button>
        </td>
      </tr>
    </tbody>
  );
}
