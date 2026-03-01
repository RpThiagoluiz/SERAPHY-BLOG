import { useEffect } from 'react';
import { toast } from 'react-toastify';

type ErrorNotificationEntry = readonly [error: unknown, message: string];

export function useErrorNotifications(
  notifications: ReadonlyArray<ErrorNotificationEntry>,
): void {
  useEffect(() => {
    notifications.forEach(([error, message]) => {
      if (error) {
        toast.error(message);
      }
    });
  }, [notifications]);
}
