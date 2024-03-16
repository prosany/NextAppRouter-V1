export const activePath = (path: string, link: string): boolean => {
  if (link === '/' || path === '/course-groups') {
    return path === link;
  }
  return path.includes(link);
};
