<template>
  <div class="favoris-view">

    <h1>Mes Favoris</h1>

    <div v-if="pistesFavorites.length === 0">
      <p>Aucune piste en favori</p>
    </div>

    <div v-else>

      <LignePiste
        v-for="(piste, index) in pistesFavorites"
        :key="`${piste.albumId}-${piste.id}`"
        :piste="piste"
        :albumId="piste.albumId"
        :numero="index + 1"
        :pisteActive="null"
      />

    </div>

  </div>
</template>

<script>
import {albums} from '../../data/album'
import { useFavoriteStore } from '../../stores/favoriteStore'
import LignePiste from '../../components/music/LignePiste.vue'

export default {
  name: 'Favoris',

  components: {
    LignePiste
  },

  data() {
    return {
      favoriteStore: useFavoriteStore(),
      albums
    }
  },

  computed: {
    pistesFavorites() {

      const resultat = []

      this.favoriteStore.favorites.forEach(favori => {

        const album = this.albums.find(
          a => a.id === favori.albumId
        )

        if (!album) return

        const piste = album.pistes.find(
          p => p.id === favori.pisteId
        )

        if (!piste) return

        resultat.push({
          ...piste,
          albumId: album.id
        })

      })

      return resultat
    }
  }
}
</script>