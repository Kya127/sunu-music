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
          Ecouter maintenant
        </button>
        <button class="btn-secondary">
          <Plus :size="16" />
          Ajouter à votre playlist
        </button>
      </div>

    </div>
    <div class="hero-visual">
        <div class="vinyl">🎵</div>
        <div class="ring ring1"></div>
        <div class="ring ring2"></div>
        <div class="ring ring3"></div>
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

.hero-visual {
  position: relative;
  left:40rem;
  top:30px;
  width: 200px;
  height: 200px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
}
.vinyl {
  width: 100px;
  height: 100px;
  background: #1d9e75;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  z-index: 2;
  animation: spin 8s linear infinite;
}
.ring {
  position: absolute;
  border-radius: 50%;
  border: 1px solid #342a5a30;
  animation: pulse 3s ease-in-out infinite;
}
.ring1 { width: 130px; height: 130px; animation-delay: 0s; }
.ring2 { width: 165px; height: 165px; animation-delay: 0.6s; }
.ring3 { width: 200px; height: 200px; animation-delay: 1.2s; }

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.04); }
}


@media (max-width: 768px) {
  .hero { height: 260px; border-radius: var(--radius-md); }
  .hero-overlay { padding: 24px; }
  .hero-titre { font-size: 24px; }
}
</style>