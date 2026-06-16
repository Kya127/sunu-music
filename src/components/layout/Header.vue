<template>
  <header class="header">

    <!-- Navigation arrows -->
    <div class="header-arrows">
      <button class="arrow-btn" @click="$router.go(-1)">
        <ChevronLeft :size="20" />
      </button>
      <button class="arrow-btn" @click="$router.go(1)">
        <ChevronRight :size="20" />
      </button>
    </div>

    <!-- Search Bar -->
    <div class="search-bar">
      <Search :size="16" class="search-icon" />
      <input
        v-model="recherche"
        type="text"
        placeholder="Search for songs, artists, podcasts..."
        class="search-input"
      />
    </div>

    <!-- Actions droite -->
    <div class="header-actions">
      <button class="icon-btn">
        <Bell :size="20" />
      </button>
      <div class="user-profile">
        <div class="avatar">I</div>
        <span class="username">Maryam H.</span>
        <ChevronDown :size="16" />
      </div>
    </div>

  </header>
</template>

<script>
import { Search, Bell, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-vue-next'

export default {
  name: 'Header',

  components: { Search, Bell, ChevronLeft, ChevronRight, ChevronDown },

  data() {
    return {
      recherche: ''
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: var(--sidebar-width);
  right: 0;
  height: var(--header-height);
  background-color: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
  z-index: 99;
  border-bottom: 1px solid var(--color-border);
}

/* Arrows */
.header-arrows {
  display: flex;
  gap: 8px;
}

.arrow-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-dark-card);
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition);
}

.arrow-btn:hover {
  background: var(--color-dark-hover);
}

/* Search */
.search-bar {
  flex: 1;
  max-width: 400px;
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 12px;
  color: var(--color-text-muted);
}

.search-input {
  width: 100%;
  background: var(--color-dark-card);
  border: 1px solid var(--color-border);
  border-radius: 20px;
  padding: 8px 16px 8px 38px;
  color: var(--color-text);
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  outline: none;
  transition: border-color var(--transition);
}

.search-input::placeholder {
  color: var(--color-text-muted);
}

.search-input:focus {
  border-color: var(--color-emerald);
}

/* Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
}

.icon-btn {
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--transition);
}

.icon-btn:hover {
  color: var(--color-text);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: var(--color-text);
  font-size: 14px;
  font-weight: 500;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--gradient-brand);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
}

/* Mobile */
@media (max-width: 768px) {
  .header {
    left: 0;
    padding: 0 16px;
  }

  .header-arrows,
  .search-bar,
  .username {
    display: none;
  }
}
</style>