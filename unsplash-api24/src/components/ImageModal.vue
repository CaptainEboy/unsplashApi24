<template>
    <div class="image-modal" >
        <div class="modal-overlay" ></div>
            <div class="modal-content">
                <img :src="photo.urls.full" alt="Photo" />
                <div class="modal-header">
                    <h2>{{ photo.user.name }}</h2>
                    <p>{{ photo.user.location }}</p>
                </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ImageModal',
  props: {
    photo: Object,
  },
}
</script>


<style scoped>
.image-modal {
  position: fixed;
  top: 25%;
  left: 25%;
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
}

.modal-content {
  position: relative;
  z-index: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.modal-content img {
  width: 100%;
  height: 50%;
  object-fit: contain;
  border-radius: 10px;
}

.modal-header {
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}

.modal-header h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.modal-header p {
  font-size: 18px;
}
</style>

  