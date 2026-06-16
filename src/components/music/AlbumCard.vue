<template>
  <div class="album-card" @click="allerVersAlbum">

    <!-- Cover -->
    <div class="album-cover">
      <img :src="album.cover" :alt="album.titre" />
      <div class="album-overlay">
        <button class="play-btn">
          <Play :size="24" fill="white" />
        </button>
      </div>
    </div>

    <!-- Infos -->
    <div class="album-info">
      <h3 class="album-titre">{{ album.titre }}</h3>
      <p class="album-artiste">{{ album.artiste }}</p>
    </div>

  </div>
</template>

<script>
import { Play } from 'lucide-vue-next'

export default {
  name: 'AlbumCard',

  components: { Play },

  props: {
    album: {
      type: Object,
      required: true
    }
  },

  methods: {
    allerVersAlbum() {
      this.$router.push(`/album/${this.album.id}`)
    }
  }
}
</script>

<style scoped>
.album-card {
  cursor: pointer;
  width: 180px;
  flex-shrink: 0;
  transition: transform var(--transition);
}

.album-card:hover {
  transform: translateY(-4px);
}

/* Cover */
.album-cover {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: var(--radius-md);
  overflow: hidden;
  margin-bottom: 12px;
}

.album-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition);
}

.album-card:hover .album-cover img {
  transform: scale(1.05);
}

/* Overlay play button */
.album-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition);
}

.album-card:hover .album-overlay {
  opacity: 1;
}

.play-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-emerald);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: transform var(--transition);
}

.play-btn:hover {
  transform: scale(1.1);
}

/* Infos */
.album-titre {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.album-artiste {
  font-size: 13px;
  color: var(--color-text-muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>