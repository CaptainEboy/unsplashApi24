<template>
    <div class="loading-placeholder">
        <div class="loading-animation"></div>
        <p>Loading...</p>
    </div>
</template>
  

<script>
    export default {
        name: 'LoadingPlaceholder',
    }
</script>

<style scoped>
.loading-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
}

.loading-animation {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #333;
  border-top-color: #fff;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-placeholder p {
  font-size: 14px;
  color: #333;
  margin-top: 10px;
}
</style>

