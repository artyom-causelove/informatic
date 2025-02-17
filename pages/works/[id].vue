<script lang="ts" setup>
</script>

<template>
  <NuxtLayout name="default">
    <template #header>

      <img class="micro-heart" src="/micro-heart.png">

      <div style="margin-top: 26px; width: 100%; display: flex; justify-content: center;">
        <ud-text font-family="Rabbits Elf" :font-weight="400" :size="64" class="title-wrapper" color="white">
          11 Задача
        </ud-text>
      </div>

      <div class="stream-mock" style="margin-top: 38px;">
        <ud-text font-family="Cinematografica" :font-weight="100" :size="600" color="white">
          Stream
        </ud-text>
      </div>

      <div class="files-wrapper" style="margin-top: 100px;">
        <ud-text font-family="Cinematografica" :font-weight="100" :size="300" color="white" class="files-title">
          Файлы:
        </ud-text>

        <div class="files-list">
          <work-folder name="pdf" description="Рабочая тетрадь от 20.03.26.pdf" />
          <work-folder name="py" description="20.03.py" />
          <work-folder name="pdf" description="Каракули от 20.03.pdf" />
        </div>

        <ud-button variant="paper" size="md" icon="/box-drop.png">
          <div class="download-title-wrapper">
            <ud-text font-family="UA Brand" :font-weight="700" :size="16" style="width: min-content;">
              Скачать
            </ud-text>
            <ud-text font-family="UA Brand" :size="16">
              одним файлом
            </ud-text>
          </div>
        </ud-button>

      </div>

    </template>

    <template #main>
      <div class="main-container">
        <div class="homework-wrapper">
          <div style="width: 33%;">
            <ud-text font-family="Cinematografica" :font-weight="100" :size="300">
              Домашка:
            </ud-text>
          </div>
          <div class="homework-title-wrapper">
            <ud-text font-family="Cinematografica" :font-weight="700" :size="64">
              20.03.26
            </ud-text>
            <ud-text font-family="Cinematografica" :font-weight="700" :size="64">
              "11 задача"
            </ud-text>
          </div>
          <div class="results-wrapper">
            <ud-text font-family="UA Brand" :font-weight="400" :size="40">
              <ud-text font-family="UA Brand" :font-weight="700" :size="40" component="span">9</ud-text>
              заданий
            </ud-text>
            <ud-text font-family="UA Brand" :font-weight="700" :size="40">
              <ud-text font-family="UA Brand" :font-weight="700" :size="40" color="text-light-green" component="span">7</ud-text>
              верно
            </ud-text>
            <ud-button variant="paper" size="md" icon="/box-drop.png">
              <div class="download-title-wrapper">
                <ud-text font-family="UA Brand" :font-weight="700" :size="16" style="width: min-content;">
                  Скачать
                </ud-text>
                <ud-text font-family="UA Brand" :size="16">
                  одним файлом
                </ud-text>
              </div>
            </ud-button>
          </div>
        </div>
        <div class="task-container" style="margin-top: 164px;">
          <work-task :number="1" :file="{ name: 'txt', description: '1.txt' }"
            content="В каждой строке электронной таблицы записаны шесть целых чисел. Определите, сколько в таблице строк, для которых выполнены следующие условия:

              – в строке есть как повторяющиеся, так и неповторяющиеся числа;
              – среднее арифметическое всех неповторяющихся чисел строки меньше, чем среднее арифметическое всех повторяющихся чисел этой строки.

              При вычислении средних значений каждое число учитывается столько раз, сколько оно встречается в строке. В ответе запишите число – количество строк, для которых выполнены эти условия." />

          <work-task :number="2" :file="{ name: 'txt', description: '2.txt' }" content="Откройте файл электронной таблицы, содержащей в каждой строке шесть натуральных чисел. Определите количество строк таблицы, содержащих числа, для которых выполнены оба условия:
– в строке два числа, которые повторяются дважды, остальные числа различны;
– квадрат большего из повторяющихся больше произведения неповторяющихся. В ответе запишите только число." />

          <work-task :number="3" content="Напишите программу, которая перебирает целые числа, большие 700 000, в порядке возрастания и ищет среди них такие, у которых есть натуральный делитель, оканчивающийся на цифру 7 и не равный ни самому числу, ни числу 7.

Выведите первые пять найденных чисел и для каждого - соответствующий наименьший делитель, оканчивающийся на цифру 7, не равный ни самому числу, ни числу 7.

Формат вывода: для каждого из пяти найденных чисел в отдельной строке сначала выводится само число, затем - значение наименьшего делителя, оканчивающегося на цифру 7, не равного ни самому числу, ни числу 7.

Строки выводятся в порядке возрастания найденных чисел. Количество строк в таблице для ответа избыточно." />

        </div>
      </div>
    </template>

  </NuxtLayout>
</template>

<style scoped lang="scss">
.micro-heart {
  position: absolute;
  top: 0;
  right: 45px;
  width: 209px;
  height: 93px;
}

.stream-mock {
  height: 730px;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}

.files-title {
  line-height: 360px;
}

.files-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 135px;
}

.files-list {
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 30px;
}

.download-title-wrapper {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
}

.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.homework-wrapper {
  color: black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 130px;
  width: 100%;
  max-width: 1800px;
}

.homework-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 33%;

  & p {
    letter-spacing: 10px;
  }
}

.results-wrapper {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 18px;

  width: 33%;
}

.task-container {
  padding: 0 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 94px;
}
</style>