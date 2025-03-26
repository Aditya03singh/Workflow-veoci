<template>
  <div class="launch-workflow-container">
    <div class="main-workflow-btn">
      <button class="all-workflow-btn" @click="goToAllWorkflows">
        All Workflows
      </button>

      <div class="tab-btn">
        <button v-for="tab in tabs" :key="tab" @click="activeTab = tab"
        :class="{active:activeTab === tab}">{{ tab }}</button>

        <component :is="activeTab"/>
      </div>
    </div>

    <div class="form-content">
      <div class="head">
        <h1 v-if="!isEdit">{{ heading }}
          <button @click="edit" class="edit-button">Edit</button>
        </h1>

        <input v-else v-model="heading" class="input-heading" placeholder="Edit"/>
      </div>

      <div v-for="(field,index) in fields" :key="index" class="form-fields">
        <label for="fields">Enter Details:</label>
        <input v-model="field.value" :disabled="!field.isEditable" class="input-fields" 
          placeholder="Enter Text"/>

        <button @click="editField(index)" class="edit-button">Edit</button>
        <button @click="deleteField(index)" class="delete-button">Delete</button>
      </div>
      <button @click="addField" class="add-button">Add Field</button>
    </div>
  </div>
</template>

<script>
import WorkflowActions from "./WorkflowActions.vue";
import WorkflowSettings from "./WorkflowSettings.vue";
import WorkflowSteps from "./WorkflowSteps.vue";

export default {
  data() {
    return {
      tabs: ["WorkflowSteps", "WorkflowSettings", "WorkflowActions"],
      activeTab: "WorkflowSteps",
      heading: "Workflow for Template",
      isEdit: false,

      fields: [
        { type: "number", value: "" },
        { type: "number", value: "" },
        { type: "number", value: "" },
        { type: "text", value: "" },
        { type: "text", value: "" },
      ],
    };
  },
  methods: {
    goToAllWorkflows() {
      this.$router.push("/");
    },
    edit(){
        this.isEdit = !this.isEdit;
    },
    addField() {
      this.fields.push({ value: "", isEditable: false});
    },
    editField(index) {
      const field = this.fields[index];
      field.isEditable = !field.isEditable;
    },
    deleteField(index) {
      this.fields.splice(index, 1);
    },
  },
  components: {
    WorkflowActions,
    WorkflowSettings,
    WorkflowSteps,
  },
};
</script>

<style scoped>
.launch-workflow-container {
  display: flex;
  height: 100vh;
  background: white;
  padding: 10px;
}
.main-workflow-btn{
  width: 30%;
  background: lightgray;
  padding: 10px;
}
.form-content {
  width: 70%;
  padding: 10px;
}
.all-workflow-btn {
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;
  border: none;
  background: blue;
  color: white;
  border-radius: 5px;
}

.tab-btn button{
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;
  border: none;
  background: blue;
  color: white;
  border-radius: 5px;
}

.edit-button{
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;
  border: none;
  background: blue;
  color: white;
  border-radius: 5px;
}

.delete-button{
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;
  border: none;
  background: blue;
  color: white;
  border-radius: 5px;
}

.add-button{
  padding: 8px 16px;
  margin: 5px;
  cursor: pointer;
  border: none;
  background: blue;
  color: white;
  border-radius: 5px;
}

.all-workflow-btn:hover{
    background: darkblue;
}
.tab-btn .active {
  background: darkblue;
  text-decoration: underline;
  font-weight: bold;
}
.head h1, .input-heading {
  font-size: 20px;
  margin-bottom: 15px;
}
.input-fields {
  padding: 15px;
  width: 100%;
  margin-right: 5px;
}
.form-fields {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

</style>
