<script setup lang="ts">
const { lesson } = defineProps(['lesson']);

const videoParams = computed(() => {
  if (!lesson?.uri || lesson.platform !== 'VK') return null
  
  const url = new URL(lesson.uri)
  const pathParts = url.pathname.split('_')
  if (pathParts.length !== 2) return null
  
  const oid = pathParts[0].replace('/video', '')
  const id = pathParts[1]
  
  return { oid, id }
})

</script>

<template>
  <div class="title">
    <span class="title-text">{{ lesson?.title }}</span>
    <div class="title-life">
      <img v-for="(it, index) in 3" :key="index" class="title-life-item" src="/micro-heart.png" />
    </div>
  </div>
  <div class="stream">
    <span class="stream-video">
      <template v-if="lesson?.platform === 'VK' && videoParams">
        <div class="video-wrapper">
          <iframe :src="`https://vkvideo.ru/video_ext.php?oid=${videoParams.oid}&id=${videoParams.id}&hd=2&autoplay=1`"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
            frameborder="0" allowfullscreen></iframe>
        </div>
      </template>
    </span>
    <span class="stream-chat">CHAT</span>
  </div>
  <!-- <div class="files">
  <span class="files-text">Файлы:</span>
  <file
    v-for="it in lesson.files" :key="it.id"
    class="files-item" :file="it"
  />
  <div class="files-button">
    <my-button>
      <img src="/box-drop.png"/>
      <div>
        <span class="ua-brand bold px16">Скачать</span>
        <span class="ua-brand regular px16">одним файлом</span>
      </div>
    </my-button>
  </div>
</div> -->
</template>

<style scoped lang="scss">
/** title title-text title-life title-life-item */
.title {
  overflow-x: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0 30px 0;

  &-text {
    font-family: 'Rabbits Elf', sans-serif;
    font-size: 64px;
    color: #FFFFFF;
  }

  &-life {
    position: absolute;
    right: 50px;
    top: 50px;

    &-item {
      margin-left: 5px;
      width: 50px;
      height: 50px;
    }
  }
}

/** stream stream-video stream-chat */
.stream {
  display: flex;
  height: 650px;
  padding: 0 10px 0 10px;

  &-video {
    flex: 1;
    margin-right: 15px;
    background-color: #000000;
    
    .video-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      
      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  &-chat {
    width: 440px;

    font-family: 'Cinematografica', sans-serif;
    font-size: 200px;
    text-align: center;
    line-height: 650px;
    background-color: #000000;
    color: #FFFFFF;
  }
}

/** files files-text files-item files-button */
.files {
  display: flex;
  padding: 50px 130px 30px 130px;

  &-text {
    align-self: flex-end;
    margin: 0 125px 0 0;

    font-family: 'Cinematografica', sans-serif;
    font-weight: 100;
    font-size: 300px;
    line-height: 250px;
    color: var(--color-white);
    transform: translateY(-40px);
  }

  &-item {
    margin: 40px 35px 0 0;
    width: 175px;

    &:last-of-type {
      margin: 0 0 0 0;
    }
  }

  &-button {
    align-self: center;
    margin-left: auto;
  }
}

/** 1550-stream 1550-stream-video 1550-stream-chat
 *  1550-files 1550-files-text 1550-files-button 1550-files-item */
@media screen and (max-width: 1550px) {
  .stream {
    flex-direction: column;
    height: 1300px;

    &-video,
    &-chat {
      width: 100%;
    }
  }

  .files {
    flex-wrap: wrap;
    padding: 50px 130px 70px 130px;

    &-text,
    &-button {
      width: 100%;
    }

    &-text {
      margin: 0 0 80px 0;
    }

    &-item {
      margin: 0 35px 60px 0;
    }
  }
}

/** 900-files */
@media screen and (max-width: 900px) {
  .files {
    padding: 50px 75px 80px 75px;
  }
}


/** 790-title 790-title-text
 *  790-files 790-files-text 790-files-item 790-files-button */
@media screen and (max-width: 790px) {
  .title {
    &-text {
      padding: 90px 0 0 0;
    }
  }

  .files {
    flex-wrap: nowrap;
    flex-direction: column;
    padding: 40px 80px 80px 80px;

    &-text,
    &-item,
    &-button {
      align-self: center;
    }

    &-text,
    &-button {
      width: auto;
    }

    &-item {
      margin: 35px 0 0 0;
    }

    &-button {
      margin: 70px 0 0 0;
    }
  }
}

@media screen and (max-width: 550px) {
  .files {
    &-text {
      margin: 0 0 0 0;
      font-size: 150px;
      line-height: 200px;
    }

    &-item {
      margin: 0 0 30px 0;
      width: 135px;
    }
  }
}
</style>
