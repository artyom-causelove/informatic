<template>
  <NuxtLayout name="space">
    <template #main>
      <div class="auth">
        <div class="auth-header">
          <img class="auth-header-text" src="/micro-heart.png" />
        </div>

        <div class="auth-content">
          <div class="auth-box">
            <ud-text font-family="Cinematografica" :font-weight="100" :size="48"
              style="margin-bottom: 30px; color: var(--color-turquoise);">
              Войти через Telegram
            </ud-text>

            <div id="telegram-login-widget"></div>

            <ud-text font-family="UA Brand" :size="16"
              style="margin-top: 20px; text-align: center; color: var(--color-light-gray);">
              Для использования сервиса необходима авторизация через Telegram
            </ud-text>
          </div>
        </div>
      </div>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user'

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
}

const route = useRoute()
const userStore = useUserStore()
const config = useRuntimeConfig()

console.log(config.public)

onMounted(() => {
  if (route.query.id && route.query.hash) {
    const userData: TelegramUser = {
      id: Number(route.query.id),
      first_name: route.query.first_name as string,
      username: route.query.username as string,
      photo_url: route.query.photo_url as string,
      auth_date: Number(route.query.auth_date),
      hash: route.query.hash as string,
      ...(route.query.last_name && { last_name: route.query.last_name as string })
    }
    handleTelegramAuth(userData)
  } else {
    const script = document.createElement('script')
    script.src = 'https://telegram.org/js/telegram-widget.js?22'
    script.setAttribute('data-telegram-login', 'StalnayaBritvaBot')
    script.setAttribute('data-size', 'large')
    script.setAttribute('data-radius', '20')
    script.setAttribute('data-request-access', 'write')
    script.setAttribute('data-userpic', 'false')
    script.setAttribute('data-auth-url', `${config.public.authRedirectUrl}/login`)

    document.getElementById('telegram-login-widget')?.appendChild(script)
  }
})

const handleTelegramAuth = async (user: TelegramUser) => {
  try {
    const response = await fetch(`${config.public.apiBaseUrl}/auth/telegram/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user),
    })

    if (response.ok) {
      const data = await response.json()

      localStorage.setItem('access_token', data.access_token)
      localStorage.setItem('user', JSON.stringify(data.user))

      userStore.setUser(data.user)
      userStore.setToken(data.access_token)

      console.log('Auth successful:', {
        user: data.user,
        token: data.access_token,
        localStorage: {
          user: localStorage.getItem('user'),
          token: localStorage.getItem('access_token')
        },
        store: userStore.getUserProfile
      })

      navigateTo('/')
    } else {
      console.error('Authentication failed:', await response.text())
      throw new Error('Authentication failed')
    }
  } catch (error) {
    console.error('Authentication error:', error)
  }
}
</script>

<style scoped lang="scss">
.auth {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  overflow: hidden;

  &-header {
    display: flex;
    justify-content: center;
    padding: 15px 0;

    &-text {
      max-width: 180px;
    }
  }

  &-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin: 0;
  }

  &-box {
    background: rgba(51, 236, 220, 0.03);
    backdrop-filter: blur(10px);
    border-radius: 60px;
    padding: 30px;
    text-align: center;
    max-width: 500px;
    width: 100%;
    border: 1px solid var(--color-turquoise);
    box-shadow:
      0 0 20px rgba(51, 236, 220, 0.1),
      0 0 40px rgba(51, 236, 220, 0.05),
      inset 0 0 20px rgba(51, 236, 220, 0.05);
    animation: pulseBox 4s ease-in-out infinite;

    :deep(#telegram-login-widget) {
      margin: 10px auto;

      iframe {
        border-radius: 20px !important;
        filter: drop-shadow(0 0 10px rgba(51, 236, 220, 0.3));
      }
    }
  }
}

:global(body) {
  margin: 0;
  overflow: hidden;
}

@keyframes pulseBox {

  0%,
  100% {
    box-shadow: 0 0 20px rgba(51, 236, 220, 0.1), 0 0 40px rgba(51, 236, 220, 0.05), inset 0 0 20px rgba(51, 236, 220, 0.05);
  }

  50% {
    box-shadow: 0 0 30px rgba(51, 236, 220, 0.2), 0 0 50px rgba(51, 236, 220, 0.1), inset 0 0 30px rgba(51, 236, 220, 0.1);
  }
}

@media screen and (max-width: 768px) {
  .auth {
    &-header {
      padding: 30px 0;
    }

    &-content {
      margin-top: -40px;
    }

    &-box {
      padding: 30px 20px;
    }
  }
}
</style>