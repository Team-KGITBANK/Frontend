<template>
  <div class="login">
    <div class="login_box">
        <h1 class="login_title">User Loin</h1>
        <div class="login-input-box">
            <input class="login_input" type="text" v-model="id">
            <input class="login_input" type="password" v-model="pw">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
