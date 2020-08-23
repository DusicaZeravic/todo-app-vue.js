<template>
  <div id="app">
    <task-list></task-list>
  </div>
</template>

<script>
import TaskList from "./components/TaskList";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    taskList: TaskList,
  },
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  background-image: url("./assets/white_background.jpg");
}
</style>
