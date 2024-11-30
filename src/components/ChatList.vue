<template>
  <div class="divide-y divide-gray-200 dark:divide-gray-700">
    <div
      v-for="cliente in store.clientes"
      :key="cliente._id"
      @click="$emit('select-client', cliente._id)"
      class="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
    >
      <div class="flex items-center space-x-3">
        <div
          class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center"
        >
          <UserIcon class="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </div>
        <div class="flex-1 min-w-0">
          <div class="flex items-center justify-between">
            <h3 class="font-medium truncate">{{ cliente.name }}</h3>
            <span class="text-sm text-gray-500">
              {{ new Date(Number(cliente.updatedAt)).toLocaleDateString() }}
            </span>
          </div>
          <p class="text-sm text-gray-500 truncate">Último mensaje...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useChatStore } from '../stores/chat'
import { UserIcon } from '@heroicons/vue/24/outline'

const store = useChatStore()

defineEmits(['select-client'])
</script>
