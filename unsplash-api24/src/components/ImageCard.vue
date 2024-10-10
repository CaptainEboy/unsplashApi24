<template>
    <!-- <div class="image-card" @click="showModal"> -->
    <div class="image-card" >
        <img :src="photo.urls.regular" alt="Photo" />
        <div class="image-overlay">
        <h2>{{ photo.user.name }}</h2>
        <p>{{ photo.user.location }}</p>
        </div>
        <LoadingPlaceholder v-if="loading" />
    </div>
</template>
  

<script>
import LoadingPlaceholder from './LoadingPlaceholder.vue'

export default {
  name: 'ImageCard',
  components: { LoadingPlaceholder },

  props: {
    photo: Object,
  },
 
}
</script>


<style scoped>
    .image-card {
        position: relative;
        cursor: pointer;
    }
    .image-card img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 10px;
    }
    .image-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .image-overlay h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .image-overlay p {
        font-size: 14px;
    }
</style>
