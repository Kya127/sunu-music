<template>
  <div 
    class="ligne-piste"
    :class="{ 'ligne-piste--active': estActive }"
    @click="jouerCettePiste"
  >

    <!-- Numéro ou icône lecture en cours -->
    <div class="piste-numero">
      <span v-if="!estActive">{{ numero }}</span>
      <Music :size="14" v-else class="icone-active" />
    </div>

    <!-- Titre et artiste -->
    <div class="piste-info">
      <p class="piste-titre">{{ piste.titre }}</p>
      <p class="piste-artiste">{{ piste.artiste }}</p>
    </div>

    <!-- Durée -->
    <div class="piste-duree">
      {{ piste.duree }}
    </div>

  </div>
</template>

<script>
import { Music } from 'lucide-vue-next'

export default {
  name: 'LignePiste',

  components: { Music },

  // Données reçues depuis AlbumView (le parent)
  props: {
    piste: {
      type: Object,
      required: true  // une piste est obligatoire
    },
    numero: {
      type: Number,
      required: true  // le numéro de la piste dans la liste
    },
    pisteActive: {
      type: Object,
      default: null   // la piste en cours de lecture (peut être vide)
    }
  },

  computed: {
    // Vérifie si CETTE piste est celle en cours de lecture
    estActive() {
      if (!this.pisteActive) return false
      return this.pisteActive.id === this.piste.id
    }
  },

  methods: {
    // Quand on clique sur une piste
    // on remonte l'info au parent avec $emit
    jouerCettePiste() {
      this.$emit('jouer-piste', this.piste)
    }
  }
}
</script>

<style scoped>
.ligne-piste {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: background var(--transition);
}

.ligne-piste:hover {
  background: var(--color-dark-hover);
}

/* Piste active en vert */
.ligne-piste--active {
  background: rgba(0, 200, 150, 0.08);
}

/* Numéro */
.piste-numero {
  width: 24px;
  text-align: center;
  font-size: 14px;
  color: var(--color-text-muted);
  flex-shrink: 0;
}

.icone-active {
  color: var(--color-emerald);
}

/* Titre et artiste */
.piste-info {
  flex: 1;
}

.piste-titre {
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text);
  margin-bottom: 4px;
}

/* Piste active → titre en vert */
.ligne-piste--active .piste-titre {
  color: var(--color-emerald);
}

.piste-artiste {
  font-size: 13px;
  color: var(--color-text-muted);
}

/* Durée */
.piste-duree {
  font-size: 14px;
  color: var(--color-text-muted);
  flex-shrink: 0;
}
</style>