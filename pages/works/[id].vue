<script lang="ts" setup>
</script>

<template>
  <NuxtLayout name="default">
    <template #header>
      <img class="micro-heart" src="/micro-heart.png">
      <div class="title-wrapper" style="margin-top: 26px;">
        11 Задача
      </div>
      <div class="stream-mock" style="margin-top: 38px;">
        Stream
      </div>
      <div class="files-wrapper" style="margin-top: 100px;">
        <span class="files-title">Файлы:</span>
        <div class="files-list">
          <work-folder name="pdf" description="Рабочая тетрадь от 20.03.26.pdf" />
          <work-folder name="py" description="20.03.py" />
          <work-folder name="pdf" description="Каракули от 20.03.pdf" />
        </div>
        <button class="download-button">
          <img class="download-icon" src="/box-drop.png">
          <div class="download-title-wrapper">
            <p class="title">Скачать</p>
            <p class="subtitle">одним файлом</p>
          </div>
        </button>
      </div>
    </template>
    <template #main>
      <div>main</div>
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

.title-wrapper {
  font-size: 64px;
  line-height: 101px;
  font-family: 'Rabbits Elf';
  color: #fff;
  text-align: center;
}

.stream-mock {
  height: 730px;
  width: 100%;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 600px;
  font-family: 'Cinematografica Thin';
}

.files-title {
  font-size: 300px;
  line-height: 360px;
  font-family: 'Cinematografica Thin';
  color: #fff;
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

.download-button {
  width: 235px;
  height: 65px;
  border-radius: 60px;
  background-image: url('/paper-background.png');
  outline: none;
  border: none;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.download-icon {
  width: 33px;
  height: 48px;
}

.title-wrapper {
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
}

.title {
  font-family: 'UA Brand';
  font-weight: 700;
  font-size: 16px;
  width: min-content;
}

.subtitle {
  font-size: 16px;
  font-family: 'UA Brand';
}
</style>