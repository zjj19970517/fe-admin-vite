<template>
  <div class="layout-container">
    <el-container>
      <el-aside>
        菜单
      </el-aside>
      <el-container>
        <el-header>
          header
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.layout-container {
  height: 100vh;
}
</style>
