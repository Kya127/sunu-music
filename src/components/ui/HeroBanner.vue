<template>
  <div class="hero" :style="{ backgroundImage: `url(${featured.cover})` }">
    <div class="hero-overlay">

      <span class="hero-badge">EDITOR'S CHOICE</span>

      <h1 class="hero-titre">
        {{ featured.artiste }} :<br />
        <span class="hero-titre--orange">{{ featured.titre }}</span>
      </h1>

      <p class="hero-description">{{ featured.description }}</p>

      <div class="hero-actions">
        <button class="btn-primary">
          <Play :size="16" fill="white" />
          Listen Now
        </button>
        <button class="btn-secondary">
          <Plus :size="16" />
          Add to Library
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import { Play, Plus } from 'lucide-vue-next'
import { albumFeatured } from '../../data/album.js'

export default {
  name: 'HeroBanner',

  components: { Play, Plus },

  data() {
    return {
      featured: albumFeatured
    }
  }
}
</script>

<style scoped>
.hero {
  width: 100%;
  height: 320px;
  background-size: cover;
  background-position: center top;
  border-radius: var(--radius-lg);
  position: relative;
  overflow: hidden;
  margin-bottom: 40px;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(10,22,40,0.95) 40%, rgba(10,22,40,0.2));
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
}

.hero-badge {
  display: inline-block;
  background: var(--color-orange);
  color: white;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 4px 10px;
  border-radius: 4px;
  width: fit-content;
}

.hero-titre {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.2;
  color: var(--color-text);
}

.hero-titre--orange {
  color: var(--color-orange);
}

.hero-description {
  font-size: 14px;
  color: var(--color-text-muted);
  max-width: 400px;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 12px;
  margin-top: 8px;
}

.btn-primary {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-emerald);
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 24px;
  border-radius: 25px;
  transition: opacity var(--transition);
}

.btn-primary:hover { opacity: 0.85; }

.btn-secondary {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.1);
  color: white;
  font-weight: 600;
  font-size: 14px;
  padding: 10px 24px;
  border-radius: 25px;
  border: 1px solid rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  transition: background var(--transition);
}

.btn-secondary:hover {
  background: rgba(255,255,255,0.2);
}

@media (max-width: 768px) {
  .hero { height: 260px; border-radius: var(--radius-md); }
  .hero-overlay { padding: 24px; }
  .hero-titre { font-size: 24px; }
}
</style>