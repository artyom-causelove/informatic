export default defineEventHandler((event) => {
  return [{
    id: 1,
    title: 'Летний курс',
    timeline: 'июнь - август',
    image: '/course-summer.png',
    status: 'active',
    tariffs: [{
      id: 1,
      courseId: 1,
      title: 'Junior',
      image: '/background-1.png',
      price: 0,
      summary: {
        detail: 'Консультации с автором курса. Без пробных экзаменов',
        items:  [{
          count: 4,
          text: 'урока в месяц'
        }, {
          count: 4,
          text: 'дз без проверки'
        }]
      }
    }, {
      id: 2,
      courseId: 1,
      title: 'Middle',
      image: '/background-2.png',
      price: 1990,
      summary: {
        detail: 'Консультации с автором курса. Без пробных экзаменов',
        items:  [{
          count: 8,
          text: 'уроков в мес.'
        }, {
          count: 8,
          text: 'дз с проверкой'
        }]
      }
    }, {
      id: 3,
      courseId: 1,
      title: 'Senior',
      image: '/background-3.png',
      price: 2490,
      summary: {
        detail: 'Консультации с автором курса. Без пробных экзаменов',
        items:  [{
          count: 8,
          text: 'уроков в мес.'
        }, {
          count: 8,
          text: 'дз с проверкой'
        }, {
          count: 1,
          text: 'пробник'
        }]
      }
    }]
  }, {
    id: 2,
    title: 'Годовой курс',
    timeline: 'сентябрь - май',
    image: '/course-soon.png',
    status: 'inactive',
    tariffs: []
  }];
});
