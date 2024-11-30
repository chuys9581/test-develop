<template>
  <header
    class="sticky top-0 z-10 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4"
  >
    <div v-if="store.clienteSeleccionado" class="flex items-center justify-between">
      <div class="flex items-center space-x-4">
        <div
          class="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center"
        >
          <UserIcon class="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </div>
        <div>
          <h2 class="font-medium text-gray-900 dark:text-white">
            {{ store.clienteSeleccionado.name }}
          </h2>
          <p class="text-sm text-gray-500 dark:text-gray-300 hidden sm:block">
            Última vez visto
            {{ new Date(Number(store.clienteSeleccionado.updatedAt)).toLocaleString() }}
          </p>
        </div>
      </div>
      <div class="flex items-center space-x-2 sm:space-x-4">
        <button class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <PhoneIcon class="w-5 h-5 text-gray-900 dark:text-white" />
        </button>
        <button class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 hidden sm:block">
          <VideoCameraIcon class="w-5 h-5 text-gray-900 dark:text-white" />
        </button>
        <button class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <EllipsisVerticalIcon class="w-5 h-5 text-gray-900 dark:text-white" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useChatStore } from '../stores/chat'
import {
  UserIcon,
  PhoneIcon,
  VideoCameraIcon,
  EllipsisVerticalIcon,
} from '@heroicons/vue/24/outline'

const store = useChatStore()
</script>
