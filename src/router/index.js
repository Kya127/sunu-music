import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AlbumView from '../views/AlbumView.vue'
import AfficherAlbums from '../views/AfficherAlbums.vue'

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
       }

    ]
})

export default router