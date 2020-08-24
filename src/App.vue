<template>
  <div id="app">
    <task-list></task-list>
    <footer>
      <p>Made with <font-awesome-icon class="heartIcon" icon="heart" /> by Dušica Žeravić</p>
    </footer> 
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
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-image: url("./assets/white_background.jpg");
  width: 100%;
  margin: 0;
}

#app {
  padding-bottom: 2.5rem;
}

footer {
  position: absolute;
  bottom: 0;
  height: 2.5rem;
  width: 100%;
  text-align: center;
}

.heartIcon {
  color: red;
}
</style>
