<script lang="ts" setup>
</script>

<template>
  <NuxtLayout name="default">
    <template #header>

      <img class="micro-heart" src="/micro-heart.png">

      <div style="margin-top: 26px; width: 100%; display: flex; justify-content: center;">
        <ud-text
          font-family="Rabbits Elf"
          :font-weight="400"
          :size="64"
          class="title-wrapper"
          color="white"
        >
          11 Задача
        </ud-text>
      </div>

      <div class="stream-mock" style="margin-top: 38px;">
        <ud-text
          font-family="Cinematografica"
          :font-weight="100"
          :size="600"
          color="white"
        >
          Stream
        </ud-text>
      </div>

      <div class="files-wrapper" style="margin-top: 100px;">
        <ud-text
          font-family="Cinematografica"
          :font-weight="100"
          :size="300"
          color="white"
          class="files-title"
        >
          Файлы:
        </ud-text>

        <div class="files-list">
          <work-folder name="pdf" description="Рабочая тетрадь от 20.03.26.pdf" />
          <work-folder name="py" description="20.03.py" />
          <work-folder name="pdf" description="Каракули от 20.03.pdf" />
        </div>

        <ud-button
          variant="paper"
          size="md"
          icon="/box-drop.png"
        >
          <div class="download-title-wrapper">
            <ud-text
              font-family="UA Brand"
              :font-weight="700"
              :size="16"
              style="width: min-content;"
            >
              Скачать
            </ud-text>
            <ud-text
              font-family="UA Brand"
              :size="16"
            >
              одним файлом
            </ud-text>
          </div>
        </ud-button>

      </div>
    </template>

    <template #main>
      <div class="homework-wrapper">
        <div>
          <ud-text>Домашка:</ud-text>
        </div>
        <div>
          <ud-text>20.03.26</ud-text>
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
</style>