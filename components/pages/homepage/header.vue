<template>
  <div class="header">
    <img class="circle-decoration" src="/decoration-circles.png"/>
    <img class="circle-decoration" src="/decoration-circles.png"/>
    <div class="wrapper-top">
      <div class="wrapper-company-title">
        <img class="circle-decoration" src="/decoration-circles.png" />
        <img class="company-title" src="/company-title.png" />
      </div>
      <account v-if="user && user.username" class="account" :name="user.username" :avatar="user.avatarUrl" />
    </div>
    <div class="wrapper-text">
      <img class="circle-decoration" src="/decoration-circles.png" />
      <span class="schedule-text">Расписание:</span>
    </div>
    <div class="wrapper-schedule">
      <template v-for="(work, index) in schedule" :key="work?.id || index">
        <schedule-card 
          v-if="work" 
          :data="{
            title: work.title,
            subtitle: '',
            text: [],
            footer: formatDateTime(work.start),
            imageCount: 3
          }" 
          textColor="#FFFFFF" 
          image="/pepper.png" 
          imageHard="/fire.png"
          :options="{ color: '#EF3A5F' }"
          disabled-text="СКОРО!"
          class="card card-work" 
          :class="{ 'card-today': isToday(work.start) }" 
          @click="openLesson(work)"
        />
        <span v-else class="card card-empty" :class="{ 'card-today': isToday(getDayDate(index)) }"></span>
      </template>
    </div>
    <!-- <div class="wrapper-tariff">
      <span class="tariff tariff-pay" :class="{ active: activeTariff === 1 }" @click="activeTariff = 1">Платный курс</span>
      <span class="tariff tariff-slash">/</span>
      <span class="tariff tariff-free" :class="{ active: activeTariff === 2 }" @click="activeTariff = 2">Бесплатный курс</span>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

interface User {
  id?: string
  username: string
  avatarUrl: string
  role?: string
}

interface Lesson {
  id: string
  title: string
  description: string
  start: string
  platform: string | null
  uri: string | null
  sectionId: string
  courseTitle: string
  courseId: string
}

const props = defineProps<{
  user: User | null
}>();


const user = computed(() => props.user || null)
const schedule = ref<(Lesson | null)[]>([null, null, null, null, null, null, null]);
const router = useRouter()

// Получение дат начала и конца недели
const getWeekDates = () => {
  const now = new Date()
  const monday = new Date(now)
  monday.setDate(now.getDate() - now.getDay() + 1)
  monday.setHours(0, 0, 0, 0)
  
  const sunday = new Date(now)
  sunday.setDate(now.getDate() - now.getDay() + 7)
  sunday.setHours(23, 59, 59, 999)
  
  return {
    start: monday.toISOString().split('T')[0],
    end: sunday.toISOString().split('T')[0]
  }
}

// Получение даты для конкретного дня недели
const getDayDate = (dayIndex: number) => {
  const now = new Date()
  const day = new Date(now)
  day.setDate(now.getDate() - now.getDay() + dayIndex + 1)
  return day.toISOString()
}

// Проверка, является ли дата сегодняшней
const isToday = (dateStr: string) => {
  const date = new Date(dateStr)
  const today = new Date()
  return date.toDateString() === today.toDateString()
}

// Форматирование даты и времени
const formatDateTime = (dateStr: string) => {
  const date = new Date(dateStr)
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const time = date.toLocaleTimeString('ru-RU', { 
    hour: '2-digit', 
    minute: '2-digit',
    hour12: false 
  })
  const weekDay = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'][date.getDay()]
  
  return `${day}.${month}...${time}\n${weekDay}`
}

// Открытие урока
const openLesson = (lesson: Lesson) => {
  router.push(`/works/${lesson.id}`)
}

// Загрузка расписания
const fetchSchedule = async () => {
  try {
    const { start, end } = getWeekDates()
    const response = await fetch(`http://localhost:3005/courses/0b23b8f8-fe6a-4383-8456-38174021eb5b/schedule?start=${start}&end=${end}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
      }
    })
    
    if (response.ok) {
      const weekSchedule = await response.json() as (Lesson[] | null)[]
      
      // Преобразуем данные в нужный формат
      schedule.value = weekSchedule.map(day => {
        if (!day || day.length === 0) return null
        
        // Берем первый урок дня
        return day[0]
      })
    }
  } catch (error) {
    console.error('Failed to fetch schedule:', error)
  }
}

onMounted(() => {
  fetchSchedule()
})
</script>

<style scoped lang="scss">
// <header>
.header {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  padding-top: 32px;

  // <wrapper-top>
  .wrapper-top {
    position: relative;

    display: flex;
    justify-content: center;
    order: 1;

    width: 100%;
    margin-bottom: 100px;

    @media screen and (max-width: 1400px) {
      flex-direction: column;
      align-items: flex-end;

      margin-bottom: 0;
    }

    @media screen and (max-width: 1050px) {
      align-items: center;

      margin-bottom: 70px;
      padding-right: 0;
    }

    .wrapper-company-title {
      position: relative;
      margin: 0 auto;

      @media screen and (max-width: 1400px) {
        margin: 0 35px 0 0;
      }

      @media screen and (max-width: 1050px) {
        margin: 0;
      }

      .company-title {
        z-index: 1;
        position: relative;
        width: 514px;
        height: 154px;

        @media screen and (max-width: 530px) {
          width: 428px;
          height: 128px;
        }

        @media screen and (max-width: 430px) {
          width: 390px;
          height: 116px;
        }
      }

      & > .circle-decoration {
        z-index: 0;
        position: absolute;
        display: none;

        top: 90%;
        left: 50%;

        transform: translate(-50%, -50%);

        @media screen and (max-width: 1400px) {
          display: block;
        }

        @media screen and (max-width: 1050px) {
          top: 70%;
          left: 90%;
        }

        @media screen and (max-width: 460px) {
          top: 70%;
          left: 120%;
        }
      }
    }

    .account {
      cursor: pointer;
      z-index: 1;
      position: absolute;
      right: 95px;
      top: 50%;

      transform: translateY(-50%);

      @media screen and (max-width: 1400px) {
        position: initial;
        flex-direction: row-reverse;

        padding: 0 45px 0 0;

        transform: none;
      }

      @media screen and (max-width: 1050px) {
        padding: 0;
      }
    }
  }

  // </wrapper-top>
  // <wrapper-text>
  .wrapper-text {
    position: relative;
    align-self: flex-end;
    flex-shrink: 1;
    order: 2;

    margin: 0 0 -15px 0;

    @media screen and (max-width: 1400px) {
      align-self: flex-start;
      margin: 0 auto 0 0;
      padding-left: 85px;
    }

    @media screen and (max-width: 1050px) {
      margin: 0 auto 75px 0;
      padding-left: 65px;
    }

    @media screen and (max-width: 460px) {
      margin: 0 0 75px 0;
      padding-left: 0;
    }

    .circle-decoration {
      position: absolute;
      display: block;

      top: 20%;
      left: 50%;

      transform: translate(-50%, -50%);

      @media screen and (max-width: 1400px) {
        display: none;
      }
    }

    .schedule-text {
      position: relative;
      display: block;
      font-family: 'Cinematografica', sans-serif;
      font-weight: 100;
      font-size: 300px;
      color: var(--color-white);
      transform: translateY(-50px);

      @media screen and (max-width: 1400px) {
        font-size: 250px;
        transform: translateY(-170px);
      }

      @media screen and (max-width: 1050px) {
        font-size: 200px;
        transform: translateY(-120px);
      }
    }
  }

  // </wrapper-text>
  // <wrapper-schedule>
  .wrapper-schedule {
    position: relative;
    display: flex;
    justify-content: center;
    height: 333px;
    order: 3;

    &::before {
      content: '';
      position: absolute;
      background-image: url('/dots.png');
      width: calc(100% - 135px);
      height: 27px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      mix-blend-mode: lighten;

      @media screen and (max-width: 1050px) {
        width: 18px;
        height: calc(100% - 135px);
      }
    }

    @media screen and (max-width: 1400px) {
      margin-top: -80px;
    }

    @media screen and (max-width: 1050px) {
      margin-top: 0;
      flex-direction: column;
      height: unset;
      order: 4;
    }

    @media screen and (max-width: 770px) {
      margin-top: -50px;
    }

    @media screen and (max-width: 465px) {
      padding-left: 60px;
    }

    & > div:nth-of-type(2n) {
      transform: rotateZ(2.72deg);
    }

    .card {
      position: relative;
      margin: 0 20px 0 0;

      @media screen and (max-width: 1050px) {
        margin: 0 0 20px 0;
      }

      &:last-child {
        margin-right: 0;
      }

      &-today {
        &::before {
          content: '';

          position: absolute;
          top: -91px;
          left: 50%;
          width: 59px;
          height: 76px;

          transform: translate(-50%, 0);
          background-repeat: no-repeat;
          background-size: contain;
          background-image: url('/you-are-here.png');

          @media screen and (max-width: 1050px) {
            top: 50%;
            left: initial;
            right: calc(100% + 5px);
            width: 128px;
            height: 97px;

            transform: translate(0, -50%);

            background-image: url('/you-are-here-horizontal.png');
          }

          @media screen and (max-width: 585px) {
            width: 79px;
            height: 60px;
          }
        }
      }

      &-work {
        backface-visibility: hidden;

        cursor: pointer;
        transform: rotateZ(-1.36deg);
        width: 262px;
        height: 304px;
        transition: transform 0.2s ease-in-out;

        &:hover {
          transform: rotateZ(2deg) scale(1.1);
        }
      }

      &-empty {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: var(--color-white);
        transform: translateY(70%);
      }
    }
  }

  // </wrapper-schedule>
  // <wrapper-tariff>
  .wrapper-tariff {
    display: flex;
    justify-content: center;
    order: 4;

    width: 100%;
    margin: 60px 0 0 0;

    @media screen and (max-width: 1400px) {
      margin: 65px 0 0 0;
    }

    @media screen and (max-width: 1050px) {
      margin: -110px 0 90px 0;
      order: 3;
    }

    @media screen and (max-width: 770px) {
      margin: -210px 0 0 0;
      flex-direction: column;
    }

    .tariff {
      cursor: pointer;
      z-index: 1;
      position: relative;
      font-family: 'UA Brand', sans-serif;
      font-weight: 400;
      font-size: 36px;
      color: var(--color-light-gray);

      @media screen and (max-width: 770px) {
        margin: 0 auto;
      }
    }

    .tariff-slash {
      margin: 0 35px 0 50px;

      @media screen and (max-width: 770px) {
        display: none;
      }
    }

    .tariff.active {
      color: var(--color-white);
    }

    .tariff::after {
      z-index: -1;
      content: '';
      position: absolute;
      left: -15px;
      top: 0;

      width: calc(100% + 30px);
      height: 100%;

      background-color: var(--color-red);
      transform: rotateZ(0.84deg);
      opacity: 0%;
      transition: clip-path 0.1s ease-in-out;
      clip-path: polygon(0% 50%, 100% 50%, 100% 50%, 0% 50%);
    }

    .tariff.active::after {
      opacity: 100%;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
    }
  }

  // </wrapper-tariff>

  & > .circle-decoration {
    position: absolute;
    display: none;

    transform: translate(-50%, -50%);

    @media screen and (max-width: 1050px) {
      display: block;
    }

    &:nth-of-type(1) {
      left: -85px;
      top: 60%;
    }

    &:nth-of-type(2) {
      mix-blend-mode: overlay;
      right: -785px;
      top: 84%;
    }
  }
}

// </header>

// <global>
.circle-decoration {
  width: 750px;
  height: 600px;
}
// </global>
</style>