<template>
  <div :class="{ dark: store.modoOscuro }" class="h-screen flex flex-col">
    <div class="flex-grow flex flex-col md:flex-row overflow-hidden">
      <!-- Vista móvil -->
      <div class="md:hidden flex flex-col h-full">
        <!-- Header móvil -->
        <header
          class="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 flex-shrink-0"
        >
          <div class="flex items-center justify-between">
            <img src="@/assets/images/SelliaLogo.png" alt="Sellia Logo" class="h-8" />
            <div class="flex items-center space-x-4">
              <button
                @click="toggleSidebar"
                class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <ChatBubbleLeftIcon class="w-6 h-6" />
              </button>
              <button class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                <MagnifyingGlassIcon class="w-6 h-6" />
              </button>
            </div>
          </div>
        </header>

        <!-- Contenido principal móvil -->
        <div class="flex-grow overflow-hidden">
          <ChatList
            v-if="!store.clienteSeleccionadoId"
            @select-client="handleClientSelect"
            class="h-full overflow-y-auto"
          />
          <div v-else class="h-full flex flex-col">
            <ChatHeader class="flex-shrink-0" @toggle-sidebar="handleBackToList" />
            <ChatMessages class="flex-grow overflow-y-auto" />
            <ChatInput class="flex-shrink-0" />
          </div>
        </div>
      </div>

      <!-- Vista de escritorio -->
      <ChatSidebar
        :class="[
          'md:flex md:w-80 border-r border-gray-200 dark:border-gray-800',
          { hidden: !sidebarVisible },
          { 'fixed inset-y-0 left-0 z-50 w-80 bg-white dark:bg-gray-800': sidebarVisible },
        ]"
        @close-sidebar="sidebarVisible = false"
        @select-client="handleClientSelect"
      />
      <div
        v-if="sidebarVisible"
        class="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
        @click="sidebarVisible = false"
      ></div>
      <main class="flex-grow flex flex-col overflow-hidden">
        <ChatHeader class="flex-shrink-0" @toggle-sidebar="sidebarVisible = !sidebarVisible" />
        <ChatMessages v-if="store.clienteSeleccionadoId" class="flex-grow overflow-y-auto" />
        <ChatInput v-if="store.clienteSeleccionadoId" class="flex-shrink-0" />
        <div v-else class="flex-grow flex items-center justify-center text-gray-500">
          <p class="text-xl">Selecciona un chat para comenzar a enviar mensajes</p>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useChatStore } from './stores/chat'
import ChatSidebar from './components/ChatSidebar.vue'
import ChatHeader from './components/ChatHeader.vue'
import ChatMessages from './components/ChatMessages.vue'
import ChatInput from './components/ChatInput.vue'
import ChatList from './components/ChatList.vue'
import { ChatBubbleLeftIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'

const store = useChatStore()
const sidebarVisible = ref(false)

onMounted(() => {
  store.obtenerClientes()
})

const handleClientSelect = (clientId: string) => {
  store.seleccionarCliente(clientId)
  sidebarVisible.value = false
}

const handleBackToList = () => {
  store.seleccionarCliente('')
}

const toggleSidebar = () => {
  sidebarVisible.value = !sidebarVisible.value
}
</script>

<style>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.dark {
  color-scheme: dark;
}
</style>
