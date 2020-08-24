<template>
  <div class="list">
    <h1>Make each day your masterpiece!</h1>
    <input
      type="text"
      class="question"
      name="task"
      v-model="newTask"
      @keyup.enter="addTask"
      required
      autocomplete="off"
    />
    <label for="task">
      <span>What I need to do?</span>
    </label>
    <ul class="tasks">
      <li
        class="task"
        v-for="(task, index) in tasks"
        :key="task"
        v-bind:class="{completed: task.isComplete}"
      >
        <input type="checkbox" v-on:change="completeTask(task)" v-bind:checked="task.isComplete" />
        {{ task.title }}
        <span @click="deleteTask(index)">
          <font-awesome-icon icon="times" />
        </span>
      </li>
    </ul>
    <button v-if="!isHidden" class="clearAll" @click="clearAllTasks">Clear list</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [
        { title: "Read a book", isComplete: false },
        { title: "Go to the shopping", isComplete: false },
      ],
      isHidden: false,
    };
  },
  methods: {
    addTask() {
      if (this.newTask == "") {
        alert("Please enter a new task!");
      } else {
        this.tasks.push({ title: this.newTask, isComplete: false });
        this.newTask = "";
        this.isHidden = false;
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    clearAllTasks() {
      this.tasks = [];
      this.isHidden = true;
    },
    completeTask: function (task) {
      task.isComplete = !task.isComplete;
    },
  },
};
</script>

<style>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
}

.list h1 {
  font-size: 55px;
  color: rgb(97, 95, 95);
  margin: 30px 0;
  text-shadow: 2px 2px 8px #bdb8b8;
  text-align: center;
}

input {
  padding: 25px 0;
}

input,
span,
label {
  text-indent: 5px;
  display: block;
  border: none;
  font-size: 5px;
  color: rgb(97, 95, 95);
}

input:focus {
  outline: 0;
}
/* Question */

input.question {
  font-size: 30px;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
}

/* Underline and Placeholder */

input.question + label {
  display: block;
  position: relative;
  white-space: nowrap;
  width: 10%;
  border-top: 1px solid gray;
  -webkit-transition: width 0.4s ease;
  transition: width 0.5s ease;
}

input.question:focus + label {
  width: 60%;
}

input.question:focus,
input.question:valid {
  padding-top: 60px;
}

input.question:focus + label > span,
input.question:valid + label > span {
  top: -100px;
  font-size: 25px;
  color: rgb(97, 95, 95);
}

input.question + label > span {
  position: absolute;
  color: rgb(97, 95, 95);
  font-size: 35px;
  top: -66px;
  left: 0;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

.tasks {
  width: 60%;
  list-style: none;
  font-size: 25px;
  padding: 0;
  padding-top: 20px;
}

.tasks li {
  border: 2px solid rgb(212, 209, 209);
  margin-bottom: 20px;
  padding: 20px 0;
  box-shadow: 10px 10px rgb(218, 214, 214);
  border-radius: 5px;
  color: rgb(97, 95, 95);
}

.tasks input {
  float: left;
  height: 25px;
  width: 35px;
  cursor: pointer;
}

.completed{
  text-decoration: line-through;
}

.tasks span {
  cursor: pointer;
  font-size: 25px;
  float: right;
  margin-right: 15px;
  color: rgb(97, 95, 95);
}

.clearAll {
  cursor: pointer;
  width: 20%;
  padding: 20px;
  background-color: rgb(97, 95, 95);
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
  border: none;
  text-transform: uppercase;
  display: inline-block;
  transition: all 0.3s ease 0s;
}

.clearAll:hover {
  color: rgb(97, 95, 95);
  letter-spacing: 3px;
  background: none;
  box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.3s ease 0s;
}

.clearAll:focus {
  outline: 0;
}
</style>