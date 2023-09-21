import { checkIsValidString } from '@/utils/check-is-valid-string';

export const getErrorMessage = (error: unknown): string => {
  let message: string;
  if (
    error instanceof Error ||
    (error && typeof error === 'object' && 'message' in error)
  ) {
    message = String(error.message);
  } else if (typeof error === 'string') {
    message = error;
  } else {
    message = 'Oops... Something went wrong during email send'
  }

  return message;
}