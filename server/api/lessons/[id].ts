import lessons from '~/server/lessons.data';

export default defineEventHandler((event) => {
  const id = Number(getRouterParam(event, 'id'));
  return lessons.find(it => it.id === id);
});