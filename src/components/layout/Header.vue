<template>
  <header class="header">

    <!-- Navigation arrows -->
    <div class="header-arrows">
      <button class="arrow-btn" @click="$router.go(-1)">
        <ChevronLeft :size="20" />
      </button>
      <button class="arrow-btn" @click="$router.go(1)">
        <ChevronRight :size="20" />
      </button>
    </div>

    
      
        <!-- Champ de recherche -->
        <div class="filtre-search">
          <Search :size="16" class="filtre-icone" />
          <input
            v-model="searchStore.recherche"
            type="text"
            placeholder="Rechercher un album, un artiste..."
            class="filtre-input"
          />
           <!-- Bouton effacer -->
          <button 
            v-if="recherche" 
            class="filtre-effacer"
            @click="searchStore.recherche = ''"
          >
            <X :size="16" />
          </button>
        </div>  


    
    <!-- Search Bar 
    <div class="search-bar">
      <Search :size="16" class="search-icon" />
      <input
        v-model="recherche"
        type="text"
        placeholder="Search for songs, artists, podcasts..."
        class="search-input"
      />
    </div>-->

    <!-- Actions droite -->
    <div class="header-actions">
      <button class="icon-btn">
        <Bell :size="20" />
      </button>
      <div class="user-profile">
        <div class="avatar">M</div>
        <span class="username">Maryam H.</span>
        <ChevronDown :size="16" />
      </div>
    </div>

  </header>
</template>

<script>
import { Search, Bell, ChevronLeft, ChevronRight, ChevronDown, X, Music } from 'lucide-vue-next'
import {albums, artistes } from '../../data/album';
import AlbumCard from '../../components/music/AlbumCard.vue'
import { useSearchStore } from '../../stores/searchStore.js'



export default {
  name: 'Header',

  components: { Search, Bell, ChevronLeft, ChevronRight, ChevronDown, X, Music,AlbumCard, },

  data() {
    return {
      albums,
      artistes,  
      recherche: '',
      searchStore: useSearchStore()
    }
  },

  computed: {

     albumsFiltres(){
        const texte = this.recherche.toLowerCase()
        return this.albums.filter(a => a.titre.toLowerCase().includes(texte)||
               a.artiste.toLowerCase().includes(texte)  ||
               a.type.toLowerCase().includes(texte))         
         }

  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: var(--sidebar-width);
  right: 0;
  height: var(--header-height);
  background-color: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
  z-index: 99;
  border-bottom: 1px solid var(--color-border);
}

/* Arrows */
.header-arrows {
  display: flex;
  gap: 8px;
}

.arrow-btn {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-dark-card);
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background var(--transition);
}

.arrow-btn:hover {
  background: var(--color-dark-hover);
}


/* Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-left: auto;
}

.icon-btn {
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color var(--transition);
}

.icon-btn:hover {
  color: var(--color-text);
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: var(--color-text);
  font-size: 14px;
  font-weight: 500;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--gradient-brand);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
}

/* Mobile */
@media (max-width: 768px) {
  .header {
    left: 0;
    padding: 0 16px;
  }

  .header-arrows,
  .search-bar,
  .username {
    display: none;
  }
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


</style>