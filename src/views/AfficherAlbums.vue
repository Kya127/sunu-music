<template>
    <section class="section">
        <div class="section-header">
          <h2 class="section-titre">Tous les albums</h2><br>
        </div>
        <div class="albums-scroll">
          <AlbumCard
            v-for="album in albumsTrending"
            :key="album.id"
            :album="album"
          />
        </div>
    </section>
</template>

<script>
import { RefreshCw } from 'lucide-vue-next'
import HeroBanner from '../components/ui/HeroBanner.vue'
import AlbumCard from '../components/music/AlbumCard.vue'
import { albums, artistes,albumFeatured } from '../data/album.js'
import AlbumView from './AlbumView.vue'

export default {
  name: 'HomeView',

  components: { HeroBanner, AlbumCard, AlbumView },

  data() {
    return {
      albums,
      artistes,
    }
  },

  computed: {
    albumsTrending() {
      return this.albums.slice(0, 8)
    }
  }
}
</script>


<style scoped>
.home {
  min-height: 100vh;
  background: var(--color-dark);
}

.home-content {
  padding: 32px 24px;
  max-width: 1200px;
}

/* Section */
.section {
  margin-bottom: 48px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.section-titre {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text);
}

.btn-view-all {
  color: var(--color-emerald);
  font-size: 14px;
  font-weight: 600;
  transition: opacity var(--transition);
}

.btn-view-all:hover { opacity: 0.7; }

.btn-refresh {
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  transition: color var(--transition);
}

.btn-refresh:hover { color: var(--color-text); }

/* Albums scroll horizontal */
.albums-scroll {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 12px;
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) transparent;
}

/* Artists */
.artists-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
}

.artist-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.artist-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
}

.artist-info {
  flex: 1;
}

.artist-nom {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
}

.artist-listeners {
  font-size: 13px;
  color: var(--color-text-muted);
}

.btn-follow {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 20px;
  transition: all var(--transition);
}

.btn-follow:hover {
  border-color: var(--color-emerald);
  color: var(--color-emerald);
}

@media (max-width: 768px) {
  .home-content { padding: 16px; }
  .section-titre { font-size: 18px; }
}
</style>