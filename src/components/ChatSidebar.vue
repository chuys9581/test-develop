<template>
  <aside class="flex flex-col h-full bg-white dark:bg-gray-800">
    <div class="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <div class="flex items-center justify-between mb-4">
        <img src="../assets/images/SelliaLogo.png" alt="Sellia Chat" class="h-8 w-auto" />
        <button
          @click="store.alternarModoOscuro"
          class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <SunIcon v-if="store.modoOscuro" class="w-5 h-5 text-gray-900 dark:text-white" />
          <MoonIcon v-else class="w-5 h-5 text-gray-900 dark:text-white" />
        </button>
      </div>
      <div class="flex space-x-2">
        <button
          :class="[
            'flex-1 py-2 px-4 rounded-lg font-medium transition-colors text-gray-900 dark:text-white',
            pestanaActiva === 'chats'
              ? 'bg-gray-100 dark:bg-gray-700'
              : 'hover:bg-gray-50 dark:hover:bg-gray-700',
          ]"
          @click="pestanaActiva = 'chats'"
        >
          Chats
        </button>
        <button
          :class="[
            'flex-1 py-2 px-4 rounded-lg font-medium transition-colors text-gray-900 dark:text-white',
            pestanaActiva === 'historial'
              ? 'bg-gray-100 dark:bg-gray-700'
              : 'hover:bg-gray-50 dark:hover:bg-gray-700',
          ]"
          @click="pestanaActiva = 'historial'"
        >
          Historial
        </button>
      </div>
    </div>

    <div class="p-4">
      <div class="relative">
        <MagnifyingGlassIcon
          class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300"
        />
        <input
          type="text"
          placeholder="Buscar chats..."
          class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          v-model="consultaBusqueda"
        />
      </div>
    </div>

    <div class="flex-1 overflow-y-auto">
      <div
        v-for="cliente in clientesFiltrados"
        :key="cliente._id"
        @click="store.seleccionarCliente(cliente._id)"
        :class="[
          'p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700',
          cliente._id === store.clienteSeleccionadoId ? 'bg-gray-100 dark:bg-gray-700' : '',
        ]"
      >
        <div class="flex items-center space-x-3">
          <div
            class="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center"
          >
            <UserIcon class="w-6 h-6 text-gray-500 dark:text-gray-400" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <h3 class="font-medium truncate text-gray-900 dark:text-white">{{ cliente.name }}</h3>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {{ new Date(Number(cliente.updatedAt)).toLocaleDateString() }}
              </span>
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400 truncate">Último mensaje...</p>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useChatStore } from '../stores/chat'
import { SunIcon, MoonIcon, UserIcon } from '@heroicons/vue/24/outline'

const store = useChatStore()
const pestanaActiva = ref('chats')
const consultaBusqueda = ref('')

const clientesFiltrados = computed(() => {
  return store.clientes.filter((cliente) =>
    cliente.name.toLowerCase().includes(consultaBusqueda.value.toLowerCase()),
  )
})
</script>
