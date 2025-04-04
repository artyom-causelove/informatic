import courses from '~/server/courses.data';

export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'));
  return courses.find(it => it.id === id);
});
