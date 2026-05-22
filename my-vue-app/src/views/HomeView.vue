<script setup lang="ts">
import { ref } from 'vue'

const isDark = ref(true)

const links = [
  { label: 'Portfolio', href: '#', icon: '🌐' },
  { label: 'Instagram', href: '#', icon: '📸' },
  { label: 'LinkedIn', href: '#', icon: '💼' },
  { label: 'Email', href: 'mailto:jani@example.com', icon: '✉️' },
]
</script>

<template>
  <div class="page" :class="{ dark: isDark }">
    <button class="theme-toggle" @click="isDark = !isDark" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
      {{ isDark ? '☀️' : '🌙' }}
    </button>

    <div class="card">
      <div class="avatar">
        <span class="avatar-initials">JS</span>
      </div>

      <h1 class="name">Jani Silva</h1>
      <p class="tagline">Designer · Developer · Creator</p>

      <nav class="links">
        <a
          v-for="link in links"
          :key="link.label"
          :href="link.href"
          class="link-btn"
        >
          <span class="link-icon">{{ link.icon }}</span>
          {{ link.label }}
        </a>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: var(--bg);
  color: var(--text);
  transition: background-color 0.3s, color 0.3s;
  position: relative;
}

.theme-toggle {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  background: var(--btn-bg);
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s, transform 0.2s;
  z-index: 10;
}

.theme-toggle:hover {
  transform: scale(1.1);
}

.card {
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.4);
}

.avatar-initials {
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.05em;
}

.name {
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
}

.tagline {
  font-size: 0.95rem;
  opacity: 0.65;
  margin: 0 0 0.75rem;
  letter-spacing: 0.04em;
}

.links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.link-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.85rem 1.5rem;
  border-radius: 0.75rem;
  background: var(--btn-bg);
  color: var(--text);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid var(--border);
  transition: transform 0.18s ease, background-color 0.18s ease, box-shadow 0.18s ease;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
}

.link-btn:hover {
  transform: translateY(-3px) scale(1.02);
  background: var(--btn-hover);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

.link-icon {
  font-size: 1.1rem;
}
</style>
