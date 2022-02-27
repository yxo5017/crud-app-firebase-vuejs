<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link to="">
          <span class="nav-title">ロジ管理システム</span>
        </router-link>
        <a class="btn-large halfway-fab pink">
          <router-link to="/localschedule">
            <span>現地日程</span>
          </router-link>
        </a>
        <a class="btn-large halfway-fab pink">
          <router-link to="/hotel">
            <span>ホテル</span>
          </router-link>
        </a>
        <a class="btn-large halfway-fab pink">
          <router-link to="/vehicle">
            <span>車両</span>
          </router-link>
        </a>
        <a class="btn-large halfway-fab pink">
          <router-link to="/translator">
            <span>通訳</span>
          </router-link>
        </a>
        <a class="btn-large halfway-fab pink">
          <router-link to="/localstaff">
            <span>現地傭人</span>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {

    }
  }
}
</script>

<style>
.navbar nav{
  padding: 0 20px;
}
</style>
