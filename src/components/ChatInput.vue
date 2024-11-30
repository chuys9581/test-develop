<template>
  <div class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
    <div class="flex items-end space-x-2">
      <button class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
        <PlusIcon class="w-6 h-6 text-gray-500" />
      </button>

      <div class="flex-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
        <textarea
          v-model="textoMensaje"
          rows="1"
          placeholder="Escribe un mensaje..."
          class="w-full p-3 bg-transparent resize-none focus:outline-none"
          @keydown.enter.prevent="enviarMensaje"
        ></textarea>
      </div>

      <div class="relative">
        <button
          class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="toggleAttachMenu"
          aria-haspopup="true"
          :aria-expanded="attachMenuOpen"
        >
          <PaperClipIcon class="w-6 h-6 text-gray-500" />
        </button>
        <div
          v-if="attachMenuOpen"
          class="absolute bottom-full right-0 mb-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
        >
          <button
            @click="openFileInput('document')"
            class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Documento
          </button>
          <button
            @click="openFileInput('media')"
            class="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Foto/Video
          </button>
        </div>
      </div>

      <button
        class="p-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white"
        @click="enviarMensaje"
        :disabled="!textoMensaje.trim()"
      >
        <PaperAirplaneIcon class="w-6 h-6" />
      </button>
    </div>

    <input
      type="file"
      ref="documentInput"
      accept=".pdf,.doc,.docx,.txt"
      class="hidden"
      @change="handleFileSelect"
    />
    <input
      type="file"
      ref="mediaInput"
      accept="image/*,video/*"
      class="hidden"
      @change="handleFileSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useChatStore } from '../stores/chat'
import { PlusIcon, PaperClipIcon, PaperAirplaneIcon } from '@heroicons/vue/24/outline'
import type { Mensaje } from '../types/chat'

const store = useChatStore()
const textoMensaje = ref('')
const attachMenuOpen = ref(false)
const documentInput = ref<HTMLInputElement | null>(null)
const mediaInput = ref<HTMLInputElement | null>(null)

function enviarMensaje() {
  if (!textoMensaje.value.trim() || !store.clienteSeleccionadoId) return

  // Crear nuevo mensaje
  const nuevoMensaje: Mensaje = {
    _id: Date.now().toString(),
    type: 'Message',
    client: store.clienteSeleccionadoId,
    message: {
      _id: Date.now().toString(),
      type: 'text',
      text: textoMensaje.value,
      typeUser: 'User',
      user: 'usuario-actual',
      errorCode: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    createdAt: new Date().toISOString(),
  }

  // Agregar mensaje al store
  if (!store.mensajes[store.clienteSeleccionadoId]) {
    store.mensajes[store.clienteSeleccionadoId] = []
  }
  store.mensajes[store.clienteSeleccionadoId].push(nuevoMensaje)

  // Limpiar entrada
  textoMensaje.value = ''
}

function toggleAttachMenu() {
  attachMenuOpen.value = !attachMenuOpen.value
}

function openFileInput(type: 'document' | 'media') {
  if (type === 'document' && documentInput.value) {
    documentInput.value.click()
  } else if (type === 'media' && mediaInput.value) {
    mediaInput.value.click()
  }
  attachMenuOpen.value = false
}

function handleFileSelect(event: Event) {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    const file = input.files[0]
    console.log('Archivo seleccionado:', file.name, file.type)
  }
}
</script>
