import { defineStore } from 'pinia'
import axios from 'axios'
import { ref} from 'vue'



export const useUnsplashStore = defineStore('unsplash', {
  // Properties
  state: () => ({
    modalVisible: ref(false),
    photos: ref([]),
    loading: ref(false),
    currentPage: ref(1),
  }),

  // Actions
  actions: {
    async fetchPhotos(query = 'african', page = 1) {
      this.loading = true
      const response = await axios.get(`https://api.unsplash.com/search/photos`, {
        params: {
          client_id: process.env.VUE_APP_UNSPLASH_API_KEY,
          query,
          page,
          per_page: 8,
        },
      })
      this.photos = response.data.results
      this.loading = false
    },
    toggleModal() {
      this.modalVisible = !this.modalVisible
    },
  },
})


