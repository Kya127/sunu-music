import { defineStore } from "pinia";

export const useSearchStore = defineStore('search',{
    state:  () => ({recherche: ''}),
    actions: { setRecherche(value) {this.recherche = value }}
})