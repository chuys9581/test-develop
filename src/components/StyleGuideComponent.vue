<template>
  <div class="p-8 bg-white dark:bg-gray-900 min-h-screen">
    <h1 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Sellia Chat Styleguide</h1>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Colors</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 bg-blue-500 rounded-md shadow-md"></div>
          <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">Primary</span>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 bg-gray-800 rounded-md shadow-md"></div>
          <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">Secondary</span>
        </div>
        <div class="flex flex-col items-center">
          <div
            class="w-20 h-20 bg-white dark:bg-gray-800 rounded-md shadow-md border border-gray-200 dark:border-gray-700"
          ></div>
          <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">Background</span>
        </div>
        <div class="flex flex-col items-center">
          <div class="w-20 h-20 bg-gray-100 dark:bg-gray-700 rounded-md shadow-md"></div>
          <span class="mt-2 text-sm text-gray-700 dark:text-gray-300">Accent</span>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Typography</h2>
      <div class="space-y-4">
        <div>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white">Heading 1</h1>
          <p class="text-sm text-gray-700 dark:text-gray-300">4xl / Bold</p>
        </div>
        <div>
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">Heading 2</h2>
          <p class="text-sm text-gray-700 dark:text-gray-300">3xl / Semibold</p>
        </div>
        <div>
          <h3 class="text-2xl font-medium text-gray-900 dark:text-white">Heading 3</h3>
          <p class="text-sm text-gray-700 dark:text-gray-300">2xl / Medium</p>
        </div>
        <div>
          <p class="text-base text-gray-900 dark:text-white">Paragraph text</p>
          <p class="text-sm text-gray-700 dark:text-gray-300">base / Normal</p>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Components</h2>
      <div class="space-y-4">
        <div>
          <h3 class="text-xl font-medium mb-2 text-gray-900 dark:text-white">Buttons</h3>
          <div class="flex space-x-4">
            <button
              class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Primary Button
            </button>
            <button
              class="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
            >
              Secondary Button
            </button>
            <button
              class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition-colors dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Outline Button
            </button>
          </div>
        </div>
        <div>
          <h3 class="text-xl font-medium mb-2 text-gray-900 dark:text-white">Inputs</h3>
          <div class="flex space-x-4">
            <input
              type="text"
              placeholder="Text input"
              class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
            <input
              type="password"
              placeholder="Password input"
              class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Dark Mode Example</h2>
      <div class="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h3 class="text-xl font-medium mb-2 text-gray-900 dark:text-white">
          Dark Mode Compatibility
        </h3>
        <p class="text-gray-700 dark:text-gray-300">
          This box demonstrates how components should adapt to dark mode. Text and UI elements
          should remain clearly visible and maintain proper contrast in both light and dark modes.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
