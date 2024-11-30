<template>
  <div
    class="flex-grow overflow-y-auto p-4 space-y-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    ref="contenedorMensajes"
  >
    <template v-for="mensaje in store.mensajesSeleccionados" :key="mensaje._id">
      <div
        :class="['flex', mensaje.message.typeUser === 'Client' ? 'justify-end' : 'justify-start']"
      >
        <div
          :class="[
            'max-w-[70%] rounded-lg p-3',
            mensaje.message.typeUser === 'Client'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white',
          ]"
        >
          <p v-if="mensaje.message.type === 'text'" class="whitespace-pre-wrap">
            {{ mensaje.message.text }}
          </p>
          <img
            v-else-if="mensaje.message.type === 'image' && mensaje.message.multimedia"
            :src="mensaje.message.multimedia.file"
            :alt="mensaje.message.multimedia.filename || 'Imagen'"
            class="rounded-lg max-w-full"
          />
          <video
            v-else-if="mensaje.message.type === 'video' && mensaje.message.multimedia"
            controls
            class="rounded-lg max-w-full"
          >
            <source
              :src="mensaje.message.multimedia.file"
              :type="mensaje.message.multimedia.mimetype"
            />
          </video>
          <a
            v-else-if="mensaje.message.type === 'document' && mensaje.message.multimedia"
            :href="mensaje.message.multimedia.file"
            target="_blank"
            class="flex items-center space-x-2 text-blue-500 dark:text-blue-400"
          >
            <DocumentIcon class="w-5 h-5" />
            <span>{{ mensaje.message.multimedia.filename || 'Documento' }}</span>
          </a>

          <div
            class="mt-1 text-xs opacity-70 flex justify-end space-x-2 text-gray-600 dark:text-gray-300"
          >
            <span>{{ new Date(mensaje.message.createdAt).toLocaleTimeString() }}</span>
            <CheckIcon v-if="mensaje.message.readAt" class="w-4 h-4" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useChatStore } from '../stores/chat'
import { DocumentIcon, CheckIcon } from '@heroicons/vue/24/outline'

const store = useChatStore()
const contenedorMensajes = ref<HTMLDivElement | null>(null)

watch(
  () => store.mensajesSeleccionados,
  () => {
    scrollToBottom()
  },
  { deep: true },
)

onMounted(() => {
  scrollToBottom()
})

function scrollToBottom() {
  setTimeout(() => {
    if (contenedorMensajes.value) {
      contenedorMensajes.value.scrollTop = contenedorMensajes.value.scrollHeight
    }
  }, 100)
}
</script>
