import { ClassNameValue, twMerge } from 'tailwind-merge';

export function merge(...inputs: ClassNameValue[]) {
  return twMerge(inputs);
}
