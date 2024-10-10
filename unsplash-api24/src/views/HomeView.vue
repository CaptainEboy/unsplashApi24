<template>
  <div>
    <h1>Latest African Photos</h1>
    <div v-if="unsplashStore.loading">Loading...</div>
    <!-- <LoadingPlaceholder v-if="unsplashStore.loading" /> -->
    <div v-else>
      <div class="image-grid">
        <ImageCard v-for="photo in unsplashStore.photos" :key="photo.id" :photo="photo" @click="() => showModal(photo)" />
      </div>
      
      <ImageModal v-if="unsplashStore.modalVisible" :photo="selectedPhoto" @click="unsplashStore.toggleModal()" />
    </div>
    
  </div>
</template>


<script>
import { useUnsplashStore } from '../stores/store.js'
import ImageCard from '../components/ImageCard.vue'
import ImageModal from '../components/ImageModal.vue'
import { ref,  } from 'vue'

export default {
  name: 'HomeView',
  components: { ImageCard, ImageModal },
  setup() {
    const unsplashStore = useUnsplashStore()
    const selectedPhoto = ref(null)

    const showModal = (photo) => {
      selectedPhoto.value = photo
      unsplashStore.toggleModal()
      console.log(unsplashStore.modalVisible)
    }

    
    // Fetch photos on mount
    unsplashStore.fetchPhotos()

    return {
      unsplashStore, showModal, selectedPhoto
    }

  },
}
</script>

<style scoped>
.image-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
</style>



  




<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template> -->
