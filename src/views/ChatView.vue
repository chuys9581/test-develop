<template>
  <div class="flex h-full">
    <ChatSidebar class="w-80 border-r border-gray-200 dark:border-gray-800" />
    <main class="flex-1 flex flex-col">
      <ChatHeader />
      <ChatMessages v-if="store.clienteSeleccionadoId" class="flex-1" />
      <ChatInput v-if="store.clienteSeleccionadoId" />
      <div v-else class="flex-1 flex items-center justify-center text-gray-500">
        <p class="text-xl">Selecciona un chat para comenzar a enviar mensajes</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useChatStore } from '../stores/chat'
import ChatSidebar from '../components/ChatSidebar.vue'
import ChatHeader from '../components/ChatHeader.vue'
import ChatMessages from '../components/ChatMessages.vue'
import ChatInput from '../components/ChatInput.vue'

const store = useChatStore()
</script>
