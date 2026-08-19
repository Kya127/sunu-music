<template>
 <!-- Découvrir les artistes -->
        <section class="section">
          <div class="section-header">
            <h2 class="section-titre">Découvrir les Artistes</h2>
            <button class="btn-refresh">
              <RefreshCw :size="16" />
            </button>
          </div>
          <div class="artists-list">
            <div
              v-for="artiste in artistes"
              :key="artiste.id"
              class="artist-item"
            >
              <img :src="artiste.avatar" :alt="artiste.nom" class="artist-avatar" />
              <div class="artist-info">
                <p class="artist-nom">{{ artiste.nom }}</p>
                <p class="artist-listeners">{{ artiste.listeners }} Auditeurs</p>
              </div>
              <button class="btn-suivre">Suivre</button>
            </div>
          </div>
        </section>

</template>



<script setup>
import { albums, artistes } from '../../data/album.js'
</script>


<style>

/* ===== ARTISTES ===== */
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

.artist-info { flex: 1; }

.artist-nom {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
}

.artist-listeners {
  font-size: 13px;
  color: var(--color-text-muted);
}

.btn-suivre {
  background: transparent;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 13px;
  font-weight: 600;
  padding: 6px 16px;
  border-radius: 20px;
  font-family: 'Inter', sans-serif;
  transition: all var(--transition);
}

.btn-suivre:hover {
  border-color: var(--color-emerald);
  color: var(--color-emerald);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .home-content { padding: 16px; }
  .section-titre { font-size: 18px; }
  .filtre-input { font-size: 14px; }
}

</style>