import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlbumView from '../views/AlbumView.vue'
import AfficherAlbums from '../views/AfficherAlbums.vue'
import ArtistCard from '../components/music/ArtistCard.vue'
import Favoris from '../components/music/Favoris.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
       {
        path:'/',
        name: 'Home',
        component:HomeView
       },

       {
         path:'/album/:id',
         name: 'Album',
         component:AlbumView
       },

        {
         path:'/listeAlbum',
         name: 'Albumss',
         component:AfficherAlbums
       },

       {
         path:'/artists',
         name: 'Artist',
         component:ArtistCard
       },

        {
         path:'/favoris',
         name: 'favoriss',
         component:Favoris
       },


    ]
})

export default router