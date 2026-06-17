export const albums = [
  {
    id: 1,
    titre: "Dakar Nights",
    artiste: "Youssou N'Dour",
    annee: 2024,
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    type: "ALBUM",
    duree: "48 min 24 sec",
    nbPistes: 12,
    pistes: [
      { id: 1, titre: "Gorée Memories",   artiste: "Youssou N'Dour",                    duree: "4:12", audio: "/audios/song1.mp3" },
      { id: 2, titre: "Sandaga Rush",     artiste: "Youssou N'Dour, Dip Doundou Guiss", duree: "3:45", audio: "/audios/song2.mp3" },
      { id: 3, titre: "Mbalax Symphony",  artiste: "Youssou N'Dour",                    duree: "5:20", audio: "/audios/song3.mp3" },
      { id: 4, titre: "Atlantic Sunset",  artiste: "Youssou N'Dour",                    duree: "4:02", audio: "/audios/song1.mp3" },
    ]
  },
  {
    id: 2,
    titre: "Kora Dreams",
    artiste: "Sona Jobarteh",
    annee: 2023,
    cover: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=300&h=300&fit=crop",
    type: "ALBUM",
    duree: "42 min",
    nbPistes: 10,
    pistes: [
      { id: 1, titre: "Kora Morning",   artiste: "Sona Jobarteh", duree: "3:30", audio: "" },
      { id: 2, titre: "Gambia Flow",    artiste: "Sona Jobarteh", duree: "4:15", audio: "" },
      { id: 3, titre: "Ancient Roots",  artiste: "Sona Jobarteh", duree: "5:00", audio: "" },
    ]
  },
  {
    id: 3,
    titre: "Teranga Soul",
    artiste: "Baaba Maal",
    annee: 2023,
    cover: "https://images.unsplash.com/photo-1571974599782-87624638275e?w=300&h=300&fit=crop",
    type: "ALBUM",
    duree: "52 min",
    nbPistes: 11,
    pistes: [
      { id: 1, titre: "Teranga Flow",   artiste: "Baaba Maal", duree: "4:30", audio: "" },
      { id: 2, titre: "Fouta Dreams",   artiste: "Baaba Maal", duree: "3:55", audio: "" },
    ]
  },
  {
    id: 4,
    titre: "Mbalax Vibes",
    artiste: "Viviane Chidid",
    annee: 2024,
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
    type: "SINGLE",
    duree: "18 min",
    nbPistes: 4,
    pistes: [
      { id: 1, titre: "Mbalax Queen",   artiste: "Viviane Chidid", duree: "4:00", audio: "" },
      { id: 2, titre: "Dakar Night",    artiste: "Viviane Chidid", duree: "3:45", audio: "" },
    ]
  },
  {
    id: 5,
    titre: "Electric Dakar",
    artiste: "Wally B. Seck",
    annee: 2024,
    cover: "/images/téléchargement.jpg",
    type: "SINGLE",
    duree: "12 min",
    nbPistes: 3,
    pistes: [
      { id: 1, titre: "Electric Soul",  artiste: "Wally B. Seck", duree: "3:50", audio: "" },
      { id: 2, titre: "Dakar Groove",   artiste: "Wally B. Seck", duree: "4:10", audio: "" },
    ]
  },
  {
    id: 6,
    titre: "Saint-Louis Jazz",
    artiste: "Cheikh Lô",
    annee: 2023,
    cover: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=300&h=300&fit=crop",
    type: "ALBUM",
    duree: "55 min",
    nbPistes: 13,
    pistes: [
      { id: 1, titre: "Jazz du Fleuve", artiste: "Cheikh Lô", duree: "5:10", audio: "" },
      { id: 2, titre: "Saint-Louis",    artiste: "Cheikh Lô", duree: "4:20", audio: "" },
    ]
  },
  {
    id: 7,
    titre: "Galsen Rap Vol. 4",
    artiste: "Various Artists",
    annee: 2024,
    cover: "/images/marcela.jpg",
    type: "ALBUM",
    duree: "60 min",
    nbPistes: 15,
    pistes: [
      { id: 1, titre: "Galsen Pride",   artiste: "Positive Black Soul", duree: "3:40", audio: "" },
      { id: 2, titre: "Dakar City",     artiste: "Duggy Tee",           duree: "4:05", audio: "" },
    ]
  },
  {
    id: 8,
    titre: "Rhythm of Saloum",
    artiste: "Doudou N'Diaye Rose",
    annee: 2023,
    cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?w=300&h=300&fit=crop",
    type: "LP",
    duree: "38 min",
    nbPistes: 8,
    pistes: [
      { id: 1, titre: "Saloum Drums",   artiste: "Doudou N'Diaye Rose", duree: "4:50", audio: "" },
      { id: 2, titre: "Delta Spirit",   artiste: "Doudou N'Diaye Rose", duree: "3:30", audio: "" },
    ]
  }
]

export const artistes = [
  { id: 1, nom: "Ava Nakamura",  listeners: "18M", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
  { id: 2, nom: "Burna Boy",     listeners: "15M", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" },
  { id: 3, nom: "Wizkid",        listeners: "12M", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" },
  { id: 4, nom: "Davido",        listeners: "9.5M", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
]

export const albumFeatured = {
  id: 1,
  titre: "Dakar Rythms",
  artiste: "Youssou N'Dour",
  description: "A la découverte du coeur de la culture musicale sénégalaise. Plongez dans les sons authentiques sénégalaise",
  cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=500&fit=crop",
}