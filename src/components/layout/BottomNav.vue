<template>
  <nav class="bottom-nav">
    <router-link
      v-for="item in navItems"
      :key="item.name"
      :to="item.path"
      class="bottom-nav-item"
      active-class="bottom-nav-item--active"
    >
      <component :is="item.icon" :size="22" />
      <span>{{ item.name }}</span>
    </router-link>
  </nav>
</template>

<script>
import { Home, Search, Library, Crown } from 'lucide-vue-next'

export default {
  name: 'BottomNav',

  components: { Home, Search, Library, Crown },

  data() {
    return {
      navItems: [
        { name: 'Home',    path: '/',         icon: 'Home'    },
        { name: 'Search',  path: '/search',   icon: 'Search'  },
        { name: 'Library', path: '/library',  icon: 'Library' },
        { name: 'Premium', path: '/premium',  icon: 'Crown'   },
      ]
    }
  }
}
</script>

<style scoped>
.bottom-nav {
  display: none;
}

@media (max-width: 768px) {
  .bottom-nav {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    background-color: #0a1628;
    border-top: 1px solid var(--color-border);
    z-index: 100;
    justify-content: space-around;
    align-items: center;
    padding: 0 8px;
  }
}

.bottom-nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: var(--color-text-muted);
  font-size: 11px;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  transition: color var(--transition);
}

.bottom-nav-item--active {
  color: var(--color-emerald);
}
</style>