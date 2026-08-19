<template>
  <div class="album-view">

    <!-- En-tête de l'album -->
    <div class="album-header">

      <!-- image section -->
      <img 
        :src="album.cover" 
        :alt="album.titre" 
        class="album-cover"
      />

      <!-- Informations -->
      <div class="album-details">
        <span class="album-type">{{ album.type }}</span>
        <h1 class="album-titre">{{ album.titre }}</h1>

        <div class="album-meta">
          <span>{{ album.artiste }}</span>
          <span class="separateur">•</span>
          <span>{{ album.annee }}</span>
          <span class="separateur">•</span>
          <span>{{ album.nbPistes }} titres • {{ album.duree }}</span>
        </div>

        <!-- Boutons d'action -->
        <div class="album-actions">
          <button class="btn-lecture" @click="jouerPremiereTiste">
            <Play :size="16" fill="white" />
            Lecture
          </button>
          <button class="btn-icone">
            <Heart :size="20" />
          </button>
          <button class="btn-icone">
            <MoreHorizontal :size="20" />
          </button>
        </div>
      </div>

    </div>

    <!-- Liste des pistes -->
    <div class="pistes-container">

      <!-- En-tête du tableau -->
      <div class="pistes-entete">
        <span class="col-numero"></span>
        <span class="col-titre">TITRE</span>
        <span class="col-artiste">ARTISTE</span>
        <span class="col-duree">
          <Clock :size="14" />
        </span>
      </div>

      <div class="pistes-separateur"></div>

      <!-- Une LignePiste par chanson -->
      <LignePiste
        v-for="(piste, index) in album.pistes"
        :key="piste.id"
        :piste="piste"
        :albumId="album.id"
        :numero="index + 1"
        :pisteActive="pisteActive"
        @jouer-piste="transmettreVerAppVue"
      />
    </div>
  </div>
</template>

<script>
import { Play, Heart, MoreHorizontal, Clock } from 'lucide-vue-next'
import LignePiste from '../components/music/LignePiste.vue'
import { albums } from '../data/album.js'

export default {
  name: 'AlbumView',

  components: { Play, Heart, MoreHorizontal, Clock, LignePiste },

  // Reçoit la piste active depuis App.vue
  props: {
    pisteActive: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      // On cherche l'album dont l'id correspond à l'URL
      album: albums.find(a => a.id === parseInt(this.$route.params.id))
    }
  },

  methods: {
    // Lance la première piste de l'album
    jouerPremiereTiste() {
      this.$emit('jouer-piste', this.album.pistes[0])
    },

    // Reçoit la piste depuis LignePiste
    // et la remonte vers App.vue
    transmettreVerAppVue(piste) {
      this.$emit('jouer-piste', piste)
    }
  }
}
</script>

<style scoped>
.album-view {
  padding: 32px 24px;
  min-height: 100vh;
}

/* En-tête */
.album-header {
  display: flex;
  gap: 32px;
  align-items: flex-end;
  margin-bottom: 40px;
}

.album-cover {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-md);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
  flex-shrink: 0;
}

.album-details {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Type : ALBUM / SINGLE / LP */
.album-type {
  font-size: 12px;
  font-weight: 600;
  color: var(--color-emerald);
  letter-spacing: 1px;
}

.album-titre {
  font-size: 48px;
  font-weight: 700;
  color: var(--color-text);
  line-height: 1.1;
}

.album-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--color-text-muted);
}

.separateur {
  color: var(--color-border);
}

/* Boutons */
.album-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 8px;
}

.btn-lecture {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--color-emerald);
  color: white;
  font-weight: 600;
  font-size: 15px;
  padding: 12px 32px;
  border-radius: 25px;
  transition: opacity var(--transition);
}

.btn-lecture:hover { opacity: 0.85; }

.btn-icone {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  transition: color var(--transition);
}

.btn-icone:hover { color: var(--color-text); }

/* Liste des pistes */
.pistes-container {
  margin-top: 24px;
}

.pistes-entete {
  display: grid;
  grid-template-columns: 40px 1fr 1fr 60px;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 600;
  color: var(--color-text-muted);
  letter-spacing: 1px;
}

.pistes-separateur {
  height: 1px;
  background: var(--color-border);
  margin: 12px 0;
}

/* Responsive */
@media (max-width: 768px) {
  .album-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .album-titre { font-size: 28px; }

  .album-actions { justify-content: center; }

  .pistes-entete {
    grid-template-columns: 30px 1fr 60px;
  }

  /* Cacher la colonne artiste sur mobile */
  .col-artiste { display: none; }
}
</style>