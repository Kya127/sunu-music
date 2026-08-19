<template>
  <div class="home">
    <div class="home-content">

      <!-- Hero Banner -->
      <HeroBanner />
      

      <!-- Résultats de recherche -->
      
      <div v-if="searchStore.recherche" class="section">
        <div class="section-header">
          <h2 class="section-titre">
            Résultats pour "{{searchStore.recherche }}"
            <span class="resultats-count">({{ albumsFiltres.length }})</span>
          </h2>
        </div>

        <!-- Aucun résultat -->
        <div v-if="albumsFiltres.length === 0" class="aucun-resultat">
          <Music :size="48" />
          <p>Aucun album trouvé pour "{{ searchStore.recherche }}"</p>
        </div>

        <!-- Albums filtrés -->
        <div v-else class="albums-scroll">
          <AlbumCard
            v-for="album in albumsFiltres"
            :key="album.id"
            :album="album"
          />
        </div>
      </div>

      <!-- Contenu normal si pas de recherche -->
      <template v-else>

        <!-- Tendances -->
        <section class="section">
          <div class="section-header">
            <h2 class="section-titre">Tendances</h2>
            <button class="btn-voir-tout">Voir tout</button>
          </div>
          <div class="albums-scroll">
            <AlbumCard
              v-for="album in albumsTrending"
              :key="album.id"
              :album="album"
            />
          </div>
        </section>

        <!-- Nouvelles sorties -->
        <section class="section">
          <div class="section-header">
            <h2 class="section-titre">Nouvelles Sorties</h2>
            <button class="btn-voir-tout">Voir tout</button>
          </div>
          <div class="albums-scroll">
            <AlbumCard
              v-for="album in albumsRecents"
              :key="album.id"
              :album="album"
            />
          </div>
        </section>

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

    </div>
  </div>
</template>

<script>
import { Search, X, Music, RefreshCw } from 'lucide-vue-next'
import HeroBanner from '../components/ui/HeroBanner.vue'
import AlbumCard from '../components/music/AlbumCard.vue'
import { albums, artistes } from '../data/album.js'
import { useSearchStore } from '../stores/searchStore'

export default {
  name: 'HomeView',

  components: { HeroBanner, AlbumCard, Search, X, Music, RefreshCw },

  data() {
    return {
      albums,
      artistes,
      searchStore: useSearchStore()
     
    }
  },

  computed: {
    // Les 5 premiers albums pour "Tendances"
    albumsTrending() {
      return this.albums.slice(0, 5)
    },

    // Les albums 3 à 6 pour "Nouvelles Sorties"
    albumsRecents() {
      return this.albums.slice(2, 6)
    },

    // Albums filtrés selon la recherche en temps réel
    albumsFiltres() {
      const texte = this.searchStore.recherche.toLowerCase()
      return this.albums.filter(album => 
        // Cherche dans le titre
        album.titre.toLowerCase().includes(texte) ||
        // Cherche aussi dans l'artiste
        album.artiste.toLowerCase().includes(texte)
      )
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

/* ===== FILTRE ===== */
.filtre-container {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.filtre-search {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 500px;
}

.filtre-icone {
  position: absolute;
  left: 14px;
  color: var(--color-text-muted);
  pointer-events: none;
}

.filtre-input {
  width: 100%;
  background: var(--color-dark-card);
  border: 1px solid var(--color-border);
  border-radius: 25px;
  padding: 12px 40px 12px 42px;
  color: var(--color-text);
  font-size: 15px;
  font-family: 'Inter', sans-serif;
  outline: none;
  transition: border-color var(--transition);
}

.filtre-input::placeholder {
  color: var(--color-text-muted);
}

.filtre-input:focus {
  border-color: var(--color-emerald);
}

.filtre-effacer {
  position: absolute;
  right: 14px;
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  transition: color var(--transition);
}

.filtre-effacer:hover { color: var(--color-text); }


.filtre-btn {
  padding: 8px 20px;
  border-radius: 20px;
  border: 1px solid var(--color-border);
  background: transparent;
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  transition: all var(--transition);
}

.filtre-btn:hover {
  border-color: var(--color-emerald);
  color: var(--color-emerald);
}


/* ===== RÉSULTATS ===== */
.resultats-count {
  font-size: 16px;
  font-weight: 400;
  color: var(--color-text-muted);
  margin-left: 8px;
}

/* Aucun résultat */
.aucun-resultat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 60px 0;
  color: var(--color-text-muted);
  font-size: 16px;
}

/* ===== SECTIONS ===== */
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

.btn-voir-tout {
  color: var(--color-emerald);
  font-size: 14px;
  font-weight: 600;
  transition: opacity var(--transition);
}

.btn-voir-tout:hover { opacity: 0.7; }

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
  gap: 20px;
  overflow-x: auto;
  padding-bottom: 12px;
  scrollbar-width: thin;
  scrollbar-color: var(--color-border) transparent;
}

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