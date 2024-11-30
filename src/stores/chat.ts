import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Cliente, Mensaje } from '@/types/chat'

export const useChatStore = defineStore('chat', () => {
  const clientes = ref<Cliente[]>([])
  const mensajes = ref<{ [key: string]: Mensaje[] }>({})
  const clienteSeleccionadoId = ref<string | null>(null)
  const modoOscuro = ref(true)

  const clienteSeleccionado = computed(() =>
    clientes.value.find((cliente) => cliente._id === clienteSeleccionadoId.value),
  )

  const mensajesSeleccionados = computed(() =>
    clienteSeleccionadoId.value ? mensajes.value[clienteSeleccionadoId.value] || [] : [],
  )

  async function obtenerClientes() {
    const respuesta = await fetch(
      'https://sellia-files.s3.us-east-2.amazonaws.com/challenge/clients.json',
    )
    clientes.value = await respuesta.json()
  }

  async function obtenerMensajes(clienteId: string) {
    const respuesta = await fetch(
      `https://sellia-files.s3.us-east-2.amazonaws.com/challenge/${clienteId}.json`,
    )
    mensajes.value[clienteId] = await respuesta.json()
  }

  function seleccionarCliente(clienteId: string) {
    clienteSeleccionadoId.value = clienteId
    if (!mensajes.value[clienteId]) {
      obtenerMensajes(clienteId)
    }
  }

  function alternarModoOscuro() {
    modoOscuro.value = !modoOscuro.value
  }

  return {
    clientes,
    mensajes,
    clienteSeleccionadoId,
    clienteSeleccionado,
    mensajesSeleccionados,
    modoOscuro,
    obtenerClientes,
    obtenerMensajes,
    seleccionarCliente,
    alternarModoOscuro,
  }
})
