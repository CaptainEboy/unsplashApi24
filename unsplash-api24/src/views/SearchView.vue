<template>
    <div>
      <h1>Search Photos</h1>
      <input v-model="query" type="search" placeholder="Search photos" />
      <button @click="searchPhotos">Search</button>

      <!-- <LoadingPlaceholder v-if="unsplashStore.loading" /> -->
      <div v-if="unsplashStore.loading">Loading...</div> 

      <div v-else>
        <div class="image-grid">
          <ImageCard v-for="photo in unsplashStore.photos" :key="photo.id" :photo="photo" @click="() => showModal(photo)" />
        </div>
        <!-- <LoadingPlaceholder v-if="unsplashStore.loading" /> -->
        <ImageModal v-if="unsplashStore.modalVisible" :photo="selectedPhoto" @click="unsplashStore.toggleModal()" />
      

      </div>
      
    </div>
</template>

<script>
import { useUnsplashStore } from '../stores/store.js'
import ImageCard from '../components/ImageCard.vue'
import ImageModal from '../components/ImageModal.vue'
import { ref, onMounted } from 'vue'

export default {
  name: 'SearchView',
  components: { ImageCard, ImageModal },
  setup() {
    const unsplashStore = useUnsplashStore()
    const query = ref('')
    const selectedPhoto = ref(null)

    const showModal = (photo) => {
      selectedPhoto.value = photo
      unsplashStore.toggleModal()
      console.log(unsplashStore.modalVisible)
    }

    const searchPhotos = async () => {
      await unsplashStore.fetchPhotos(query.value)
    }


    onMounted(() => {
      unsplashStore.fetchPhotos('african') // default query
    })

    return {
      unsplashStore,
      query,
      searchPhotos,
      showModal,
      selectedPhoto,
    }
  },
}
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>