

<template>
  <aside class="sidebar">

    <!-- Logo -->
    <div class="sidebar-logo">
      <div class="logo">Sunu-Music</div>
    </div>

    <!-- Menu Principal -->
    <nav class="sidebar-nav">
      <ul>
        <li v-for="item in menuItems" :key="item.name">
          <router-link :to="item.path" class="nav-link" active-class="nav-link--active">
            <component :is="item.icon" :size="20" />
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Collection -->
    <nav class="sidebar-nav">
      <p class="nav-label">COLLECTION</p>
      <ul>
        <li v-for="item in collectionItems" :key="item.name">
          <router-link :to="item.path" class="nav-link" active-class="nav-link--active">
            <component :is="item.icon" :size="20" />
            <span>{{ item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Bannière Premium -->
    <div class="sidebar-premium">
      <p>Go Premium for ad-free experience</p>
      <button class="btn-premium">Upgrade Now</button>
    </div>

  </aside>
</template>

<script>
import {
  Home, Search, Library, Mic2,
  Heart, Disc3, Music2, ListMusic
} from 'lucide-vue-next'

export default {
  name: 'Sidebar',

  components: {
    Home, Search, Library, Mic2,
    Heart, Disc3, Music2, ListMusic
  },

  data() {
    return {
      menuItems: [
        { name: 'Home',    path: '/',        icon: 'Home'    },
        { name: 'Albums',  path: '/AlbumView',   icon: 'Disc3'},
    ],
    collectionItems: [
        { name: 'Liked Songs',path: '/liked',    icon: 'Heart'},
        { name: 'Artists', path: '/artists', icon: 'Mic2'},
    ]
    }
  }
}
</script>

<style scoped>
.sidebar {
  width: var(--sidebar-width);
  height: 100vh;
  background-color: #0a1628;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  gap: 32px;
  overflow-y: auto;
  z-index: 100;
}

/* Logo */
.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 8px;
}

.logo-img {
  width: 36px;
  height: 36px;
  border-radius: 8px;
}

.logo-text {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text);
}

/* Nav */
.nav-label {
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text-muted);
  letter-spacing: 1px;
  margin-bottom: 12px;
  padding: 0 8px;
}

.sidebar-nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  font-size: 15px;
  font-weight: 500;
  transition: all var(--transition);
}

.nav-link:hover {
  background-color: var(--color-dark-hover);
  color: var(--color-text);
}

.nav-link--active {
  color: var(--color-text);
  background-color: var(--color-dark-card);
  border-left: 3px solid var(--color-emerald);
}

/* Premium */
.sidebar-premium {
  margin-top: auto;
  background: var(--color-dark-card);
  border-radius: var(--radius-md);
  padding: 16px;
  font-size: 13px;
  color: var(--color-text-muted);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn-premium {
  background: var(--gradient-brand);
  color: white;
  font-weight: 600;
  font-size: 13px;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  transition: opacity var(--transition);
}

.btn-premium:hover {
  opacity: 0.85;
}

/* Cacher sur mobile */
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}


.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 15px;
  font-weight: 500;
}

.logo::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #1D9E75;
}
</style>