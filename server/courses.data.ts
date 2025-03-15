export default [{
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
    periods: [{
      id: 1,
      type: 'month',
      price: 0   
    }, {
      id: 2,
      type: 'full',
      price: 0
    }],
    summary: [{
      visible: true,
      count: 4,
      color: '#FF6B4E',
      text: 'урока в месяц'
    }, {
      visible: true,
      count: 4,
      color: '#FF6B4E',
      text: 'дз без проверки'
    }, {
      visible: false,
      count: null,
      color: null,
      text: 'Консультации с автором курса.'
    }, {
      visible: false,
      count: null,
      color: null,
      text: 'Без пробных экзаменов.'
    }]
  }, {
    id: 2,
    courseId: 1,
    title: 'Middle',
    image: '/background-2.png',
    periods: [{
      id: 1,
      type: 'month',
      price: 1990   
    }, {
      id: 2,
      type: 'full',
      price: 5490
    }],
    summary: [{
      visible: true,
      count: 8,
      color: '#009797',
      text: 'уроков в мес.'
    }, {
      visible: true,
      count: 8,
      color: '#009797',
      text: 'дз с проверкой'
    }, {
      visible: false,
      count: null,
      color: null,
      text: 'Консультации с автором курса.'
    }, {
      visible: false,
      count: null,
      color: null,
      text: 'Без пробных экзаменов.'
    }]
  }, {
    id: 3,
    courseId: 1,
    title: 'Senior',
    image: '/background-3.png',
    periods: [{
      id: 1,
      type: 'month',
      price: 2490   
    }, {
      id: 2,
      type: 'full',
      price: 6490
    }],
    summary: [{
      visible: true,
      count: 8,
      color: '#289E6D',
      text: 'уроков в мес.'
    }, {
      visible: true,
      count: 8,
      color: '#289E6D',
      text: 'дз с проверкой'
    }, {
      visible: true,
      count: 1,
      color: '#289E6D',
      text: 'пробник'
    }, {
      visible: false,
      count: null,
      color: null,
      text: 'Консультации с автором курса.'
    }, {
      visible: false,
      count: null,
      color: null,
      text: 'Без пробных экзаменов.'
    }]
  }]
}, {
  id: 2,
  title: 'Годовой курс',
  timeline: 'сентябрь - май',
  image: '/course-soon.png',
  status: 'inactive',
  tariffs: []
}];