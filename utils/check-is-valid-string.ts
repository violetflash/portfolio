export const checkIsValidString = (value: unknown, maxLength?: number): value is 'string' => {
  return !(!value || typeof value !== 'string' || (maxLength && value.length > maxLength));
}