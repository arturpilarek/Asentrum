<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h2>Create Task</h2>
          <div class="form-group">
            <input
              type="text"
              class="form-control mb-2"
              placeholder="Task Name"
              v-model="taskName"
            />
          </div>
          <div class="form-group">
            <h4>Beskrivelse</h4>
            <textarea v-model="taskDescription"></textarea>
          </div>
          <div>
            <h4>Kunde</h4>
            <select v-model="taskClient">
              <option disabled value="">Valg kunde</option>
              <option>Demo</option>
            </select>
          </div>
          <div class="form-group">
            <h4>Intern Beskrivelse</h4>
            <textarea v-model="internTaskDescription"></textarea>
          </div>
          <div>
            <h4>Deadline</h4>
            <input type="text" v-model="taskDeadline" />
          </div>
          <div>
            <div>
              <p>To-do</p>
              <input type="text" v-model="todo" placeholder="Tilføj opgaven" />
              <button @click="updateTodo">+</button>
            </div>
            <div>
              <ul>
                <li v-for="(todo, index) in todoList" :key="index">
                  <p>{{ todo.name }}</p>
                  <input
                    type="number"
                    v-model="todoList[index].hours"
                    :placeholder="0"
                  />
                  <input
                    type="number"
                    v-model="todoList[index].price"
                    :placeholder="0"
                  />
                  <button @click="removeTodo(index)">Remove todo</button>
                </li>
              </ul>
            </div>
          </div>
          <button @click="createTask" class="btn btn-primary">
            Create Task
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskName: null,
      taskDescription: null,
      internTaskDescription: null,
      taskClient: "",
      taskDeadline: "",
      todo: "",
      todoList: [],
    };
  },
  methods: {
    async createTask() {
      try {
        await this.$store.dispatch("createTask", {
          title: this.taskName,
          description: this.taskDescription,
          internDescription: this.internTaskDescription,
          client: this.taskClient,
          deadline: this.taskDeadline,
          todoList: this.todoList,
        });
        await this.$store.dispatch("fetchTasks");
        this.taskName = null;
        this.taskDescription = null;
        this.internTaskDescription = null;
        this.taskClient = "";
        this.taskDeadline = "";
        this.todoList = [];
      } catch (error) {
        alert("Something went wrong, try again later");
      }
    },
    updateTodo() {
      const todoData = {
        name: this.todo,
        hours: 0,
        price: 0,
      };
      this.todoList.push(todoData);
      this.todo = "";
    },
    removeTodo(index) {
      this.todoList.splice(index, 1);
    },
  },
};
</script>

<style scoped></style>
