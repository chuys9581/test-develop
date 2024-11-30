# Sellia Chat

## Tabla de Contenidos

1. [Introducción](#introducción)
2. [Visión General del Producto](#visión-general-del-producto)
3. [Características Principales](#características-principales)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Desglose de Componentes](#desglose-de-componentes)
7. [Gestión de Estado](#gestión-de-estado)
8. [Diseño y Responsividad](#diseño-y-responsividad)
9. [Enrutamiento](#enrutamiento)
10. [Modo Oscuro](#modo-oscuro)
11. [Funcionalidad de Carga de Archivos](#funcionalidad-de-carga-de-archivos)
12. [Comenzando](#comenzando)
13. [Contribuir](#contribuir)

## Introducción

Sellia Chat es una aplicación web de mensajería omnicanal de vanguardia diseñada para revolucionar la gestión de la comunicación con el cliente. Proporciona a las empresas una interfaz unificada y potente para manejar las interacciones con los clientes a través de múltiples plataformas de manera eficiente y efectiva.

## Visión General del Producto

Sellia Chat es una solución avanzada que consolida mensajes de varios canales de comunicación (como correo electrónico, redes sociales, SMS y chat web) en una única interfaz intuitiva. Esta consolidación permite a los representantes de servicio al cliente gestionar todas las interacciones con los clientes desde una plataforma centralizada, asegurando tiempos de respuesta rápidos y una calidad de servicio consistente en todos los canales.

La aplicación cuenta con:

- Un diseño responsivo que funciona perfectamente tanto en dispositivos de escritorio como móviles
- Actualizaciones de mensajes en tiempo real
- Una potente funcionalidad de búsqueda
- Capacidades de carga de archivos
- Modo oscuro para un uso cómodo en entornos con poca luz

Al proporcionar estas características en una plataforma unificada, Sellia Chat permite a las empresas ofrecer un servicio al cliente excepcional en el panorama de comunicación multicanal actual y de ritmo acelerado.

## Características Principales

1. **Bandeja de entrada unificada**: Consolida mensajes de múltiples canales en una sola interfaz.
2. **Actualizaciones en tiempo real**: Recibe y muestra nuevos mensajes instantáneamente sin necesidad de actualización manual.
3. **Diseño responsivo**: Interfaz de usuario optimizada tanto para dispositivos de escritorio como móviles.
4. **Modo oscuro**: Modo oscuro incorporado para un uso cómodo en entornos con poca luz.
5. **Carga de archivos**: Soporte para carga de documentos y archivos multimedia en las conversaciones.
6. **Funcionalidad de búsqueda**: Potentes capacidades de búsqueda para encontrar rápidamente conversaciones o mensajes específicos.
7. **Presencia de usuario**: Muestra el estado en línea/fuera de línea de clientes y agentes.
8. **Historial de mensajes**: Proporciona acceso al historial completo de conversaciones para contexto.
9. **Personalización de temas**: Interfaz fácilmente personalizable para alinearse con la marca de la empresa.
10. **Panel de análisis**: (Característica planificada) Ofrece información sobre tiempos de respuesta, puntuaciones de satisfacción del cliente y otras métricas clave de rendimiento.

## Tecnologías Utilizadas

1. **Vue.js 3**: El framework principal utilizado para construir la interfaz de usuario. Vue.js 3 proporciona un excelente rendimiento, un tamaño de paquete pequeño y la API de Composición para una mejor organización y reutilización del código.

   Ejemplo de uso en `App.vue`:

   ```vue
   <script setup lang="ts">
   import { ref, onMounted } from 'vue'
   import { useChatStore } from './stores/chat'
   // ... otras importaciones

   const store = useChatStore()
   const sidebarVisible = ref(false)

   onMounted(() => {
     store.obtenerClientes()
   })

   // ... otra lógica del componente
   </script>
   ```
