export default defineNuxtRouteMiddleware((to, from) => {
  const course = useCookie('shop.current.course.id', { readonly: true });
  const tariff = useCookie('shop.current.tariff.id', { readonly: true });
  const period = useCookie('shop.current.period.id', { readonly: true });

  if (to.path === '/shop')
    return navigateTo('/shop/course');

  if (
    to.path === '/shop/tariff'
    && isNil(course.value)
  ) return navigateTo('/shop/course');

  if (
    to.path === '/shop/tariff/detail'
    && (isNil(course.value) || isNil(tariff.value) || isNil(period.value))
  ) return navigateTo('/shop/course');
});
