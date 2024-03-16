import { TitleMap } from '@/types/common.d';

const titleMap: TitleMap = {
  '/': 'Analytics',
  '/login': 'Login',
  '/registration': 'Registration',
  '/forgot-password': 'Forgot Password',
  '/reset-password': 'Reset Password',
  '/fob': 'FOB',
  '/doors': 'Doors',
  '/users': 'Users',
  '/schedule': 'Schedule',
  '/_error': 'Something went wrong :(',
};

/**
 * Returns the title of a page based on its route path.
 * @param {string} path - The path of the page route.
 * @returns {string} The title of the page with the site name appended.
 */

export default function dynamicTitle(path: string): string {
  if (titleMap[path]) {
    return `${titleMap[path]} | VeraPhone`;
  }
  return `VeraPhone`;
}
