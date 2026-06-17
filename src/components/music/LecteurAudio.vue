<template>
  <div class="lecteur">

    <!--On affiche un message d'attente-->

    <div v-if="!piste" class="lecteur-vide">
      <Music :size="20" />
      <span>Sélectionnez un titre pour lancer la lecture</span>
    </div>

    <!--Une piste est sélectionnée , On affiche le lecteur complet -->

    <div v-else class="lecteur-contenu">

      <!-- Infos de la piste en cours -->
      <div class="lecteur-piste-info">
        <div class="lecteur-piste-image">
          <Music :size="16" />
        </div>
        <div class="lecteur-piste-texte">
          <p class="lecteur-piste-titre">{{ piste.titre }}</p>
          <p class="lecteur-piste-artiste">{{ piste.artiste }}</p>
        </div>
        <!-- Bouton favori -->
        <button class="btn-favori" @click="toggleFavori">
          <Heart 
            :size="18" 
            :fill="estFavori ? '#00C896' : 'none'"
            :color="estFavori ? '#00C896' : '#94A3B8'"
          />
        </button>
      </div>

      <!-- Contrôles de lecture -->
      <div class="lecteur-controles">

        <!-- Boutons de contrôle -->
        <div class="controles-boutons">
          <!-- Lecture aléatoire -->
          <button class="btn-controle" :class="{ actif: aleatoire }" @click="toggleAleatoire">
            <Shuffle :size="18" />
          </button>

          <!-- Précédent -->
          <button class="btn-controle" @click="pistePrecedente">
            <SkipBack :size="20" />
          </button>

          <!-- Play / Pause -->
          <button class="btn-play-pause" @click="toggleLecture">
            <Pause v-if="enLecture" :size="22" fill="white" />
            <Play v-else :size="22" fill="white" />
          </button>

          <!-- Suivant -->
          <button class="btn-controle" @click="pisteSuivante">
            <SkipForward :size="20" />
          </button>

          <!-- Répétition -->
          <button class="btn-controle" :class="{ actif: repetition }" @click="toggleRepetition">
            <Repeat :size="18" />
          </button>
        </div>

        <!-- Barre de progression -->
        <div class="controles-progression">
          <span class="temps">{{ tempsActuelFormate }}</span>
          <div class="barre-progression" @click="changerPosition">
            <div 
              class="barre-remplissage"
              :style="{ width: progression + '%' }"
            ></div>
          </div>
          <span class="temps">{{ dureeFormatee }}</span>
        </div>

      </div>

      <!-- Volume et options -->
      <div class="lecteur-options">
        <button class="btn-controle">
          <Mic2 :size="18" />
        </button>
        <button class="btn-controle">
          <ListMusic :size="18" />
        </button>
        <button class="btn-controle" @click="toggleMuet">
          <VolumeX v-if="muet" :size="18" />
          <Volume2 v-else :size="18" />
        </button>
        <!-- Barre de volume -->
        <div class="barre-volume">
          <div 
            class="volume-remplissage"
            :style="{ width: volume + '%' }"
          ></div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            v-model="volume"
            class="volume-input"
            @input="changerVolume"
          />
        </div>
      </div>

    </div>

    <!-- Balise audio HTML -->
    <audio 
      ref="audio"
      @timeupdate="mettreAJourProgression"
      @ended="pisteSuivante"
      @loadedmetadata="mettreAJourDuree"
    ></audio>

  </div>
</template>

<script>
import { 
  Music, Heart, Shuffle, SkipBack, Play, Pause,
  SkipForward, Repeat, Mic2, ListMusic, Volume2, VolumeX
} from 'lucide-vue-next'

export default {
  name: 'LecteurAudio',

  components: { 
    Music, Heart, Shuffle, SkipBack, Play, Pause,
    SkipForward, Repeat, Mic2, ListMusic, Volume2, VolumeX
  },

  // Reçoit la piste depuis App.vue
  props: {
    piste: {
      type: Object,
      default: null
    }
  },

  data() {
    return {
      enLecture: false,      // true = en cours de lecture
      progression: 0,        // 0 à 100 (pourcentage)
      tempsActuel: 0,        // en secondes
      duree: 0,              // en secondes
      volume: 70,            // 0 à 100
      muet: false,           // true = son coupé
      aleatoire: false,      // true = lecture aléatoire
      repetition: false,     // true = répétition activée
      estFavori: false       // true = piste dans les favoris
    }
  },

  computed: {
    // Convertit les secondes en mm:ss
    tempsActuelFormate() {
      return this.formaterTemps(this.tempsActuel)
    },
    dureeFormatee() {
      return this.formaterTemps(this.duree)
    }
  },

  // Surveille les changements de piste
  watch: {
    piste(nouvellePiste) {
      if (nouvellePiste) {
        this.chargerEtJouer(nouvellePiste)
      }
    }
  },

  methods: {
    // Charge et lance la lecture d'une piste
    chargerEtJouer(piste) {
      const audio = this.$refs.audio
      // Si la piste a un fichier audio on le charge
      if (piste.audio) {
        audio.src = piste.audio
      }
      audio.play()
        .then(() => { this.enLecture = true })
        .catch(() => { 
          // Pas de fichier audio → on simule juste la lecture
          this.enLecture = true 
        })
      // Remet la progression à zéro
      this.progression = 0
      this.tempsActuel = 0
      this.estFavori = false
    },

    // Alterne entre lecture et pause
    toggleLecture() {
      const audio = this.$refs.audio
      if (this.enLecture) {
        audio.pause()
        this.enLecture = false
      } else {
        audio.play().catch(() => {})
        this.enLecture = true
      }
    },

    // Met à jour la progression en temps réel
    mettreAJourProgression() {
      const audio = this.$refs.audio
      if (audio.duration) {
        this.tempsActuel = audio.currentTime
        this.progression = (audio.currentTime / audio.duration) * 100
      }
    },

    // Récupère la durée totale quand le fichier est chargé
    mettreAJourDuree() {
      this.duree = this.$refs.audio.duration
    },

    // Clique sur la barre de progression pour changer la position
    changerPosition(event) {
      const barre = event.currentTarget
      const clique = event.offsetX
      const largeur = barre.offsetWidth
      const pourcentage = (clique / largeur) * 100
      this.progression = pourcentage
      this.$refs.audio.currentTime = (pourcentage / 100) * this.$refs.audio.duration
    },

    // Change le volume
    changerVolume() {
      this.$refs.audio.volume = this.volume / 100
      if (this.volume > 0) this.muet = false
    },

    // Active / désactive le son
    toggleMuet() {
      this.muet = !this.muet
      this.$refs.audio.muted = this.muet
    },

    // Active / désactive la lecture aléatoire
    toggleAleatoire() {
      this.aleatoire = !this.aleatoire
    },

    // Active / désactive la répétition
    toggleRepetition() {
      this.repetition = !this.repetition
      this.$refs.audio.loop = this.repetition
    },

    // Ajoute / retire des favoris
    toggleFavori() {
      this.estFavori = !this.estFavori
    },

    // Piste suivante (pour l'instant remet à zéro)
    pisteSuivante() {
      this.progression = 0
      this.tempsActuel = 0
    },

    // Piste précédente (pour l'instant remet à zéro)
    pistePrecedente() {
      this.progression = 0
      this.tempsActuel = 0
      this.$refs.audio.currentTime = 0
    },

    // Convertit les secondes en format mm:ss
    formaterTemps(secondes) {
      if (!secondes || isNaN(secondes)) return '0:00'
      const minutes = Math.floor(secondes / 60)
      const secs = Math.floor(secondes % 60)
      return `${minutes}:${secs.toString().padStart(2, '0')}`
    }
  }
}
</script>

<style scoped>
.lecteur {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--player-height);
  background: #0a1628;
  border-top: 1px solid var(--color-border);
  z-index: 200;
  display: flex;
  align-items: center;
  padding: 0 24px;
}

/* Message quand aucune piste -->*/
.lecteur-vide {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text-muted);
  font-size: 14px;
  width: 100%;
  justify-content: center;
}

/* Contenu principal du lecteur */
.lecteur-contenu {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 24px;
}

/* Infos piste */
.lecteur-piste-info {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 250px;
  flex-shrink: 0;
}

.lecteur-piste-image {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: var(--color-dark-card);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-emerald);
  flex-shrink: 0;
}

.lecteur-piste-titre {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.lecteur-piste-artiste {
  font-size: 12px;
  color: var(--color-text-muted);
}

.btn-favori {
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  transition: transform var(--transition);
}

.btn-favori:hover { transform: scale(1.1); }

/* Contrôles */
.lecteur-controles {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.controles-boutons {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-controle {
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--transition);
}

.btn-controle:hover { color: var(--color-text); }

/* Bouton actif (aléatoire / répétition) */
.btn-controle.actif { color: var(--color-emerald); }

/* Bouton play/pause principal */
.btn-play-pause {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-dark);
  transition: transform var(--transition);
}

.btn-play-pause:hover { transform: scale(1.05); }

/* Barre de progression */
.controles-progression {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
}

.temps {
  font-size: 12px;
  color: var(--color-text-muted);
  width: 35px;
  flex-shrink: 0;
}

.barre-progression {
  flex: 1;
  height: 4px;
  background: var(--color-border);
  border-radius: 2px;
  cursor: pointer;
  position: relative;
}

.barre-remplissage {
  height: 100%;
  background: var(--color-emerald);
  border-radius: 2px;
  transition: width 0.1s linear;
  pointer-events: none;
}

/* Volume et options */
.lecteur-options {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 200px;
  justify-content: flex-end;
  flex-shrink: 0;
}

.barre-volume {
  width: 80px;
  height: 4px;
  background: var(--color-border);
  border-radius: 2px;
  position: relative;
  cursor: pointer;
}

.volume-remplissage {
  height: 100%;
  background: var(--color-emerald);
  border-radius: 2px;
  pointer-events: none;
}

.volume-input {
  position: absolute;
  inset: 0;
  width: 100%;
  opacity: 0;
  cursor: pointer;
}

/* Mobile */
@media (max-width: 768px) {
  .lecteur {
    bottom: 60px; /* Au dessus de la BottomNav */
    padding: 0 12px;
    height: 64px;
  }

  /* Cacher les options sur mobile */
  .lecteur-options { display: none; }

  .lecteur-piste-info { width: auto; flex: 1; }

  .controles-progression { display: none; }

  .controles-boutons { gap: 8px; }
}
</style>