import { defineStore } from "pinia";

export const useFavoriteStore = defineStore('favorite',{
    state: () => ({
    // liste des favoris (identification unique piste)
    favorites: []
    }),

    actions: {
    // ajouter / retirer (toggle)
    toggleFavorite(albumId, pisteId) {
      const index = this.favorites.findIndex(
        f => f.albumId === albumId && f.pisteId === pisteId
      )

      // si déjà en favori → on retire
      if (index !== -1) {
        this.favorites.splice(index, 1)
      }
      // sinon → on ajoute
      else {
        this.favorites.push({ albumId, pisteId })
      }
    },

    // vérifier si une piste est en favori
    isFavorite(albumId, pisteId) {
      return this.favorites.some(f => f.albumId === albumId && f.pisteId === pisteId)
    },

    // // supprimer (optionnel)
    // removeFavorite(albumId, pisteId) {
    //   this.favorites = this.favorites.filter(f => !(f.albumId === albumId && f.pisteId === pisteId))
    // }
  }
})