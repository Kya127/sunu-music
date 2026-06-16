<template>
  <div id="app-wrapper">

    <!-- LAYOUT PRINCIPAL -->
    <div class="app-layout">

      <!-- Sidebar fixe à gauche (desktop) -->
      <Sidebar />

      <!-- Zone centrale : header + contenu des pages -->
      <div class="main-area">
        <Header />

        <!-- ICI le routeur change de page -->
        <main class="content-area">
          <router-view @jouer-piste="mettreAJourPiste" />
        </main>

      </div>
    </div>

    <!-- LECTEUR EN DEHORS DU ROUTEUR -->
    <!-- Il survit à tous les changements de page -->
    <LecteurAudio :piste="pisteActuelle" />

    <!-- Navigation bas mobile -->
    <BottomNav />

  </div>
</template>


<script>
import Sidebar from './components/layout/Sidebar.vue'
import Header from './components/layout/Header.vue'
import BottomNav from './components/layout/BottomNav.vue'
import LecteurAudio from './components/music/LecteurAudio.vue'

export default {
  name: 'App',

  components: {
    Sidebar,
    Header,
    BottomNav,
    LecteurAudio
  },

  data() {
    return {
      // STATE GLOBAL — la piste en cours de lecture
      // null = aucune musique sélectionnée
      pisteActuelle: null
    }
  },

  methods: {
    // Cette méthode est appelée quand un enfant émet 'jouer-piste'
    mettreAJourPiste(piste) {
      this.pisteActuelle = piste
      console.log('🎵 Piste reçue dans App.vue :', piste.titre)
    }
  }
}
</script>




