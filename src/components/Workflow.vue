<template>
  <div class="container">
    <h1 class="title">Workflow Management</h1>

    <div class="table-main">
      <table class="table">
        <thead class="thead">
          <tr>
            <th class="th"></th>
            <th class="th"></th>
            <th class="th"></th>

            <th v-for="header in headers" :key="header" class="th">
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in details" :key="item.id" class="tr border">
            <td class="td"><button class="btn" @click="displayData(item)">Show</button></td>
            <td class="td"><button class="btn" @click="openPopUp">Create</button></td>
            <td class="td"><button class="btn" @click="editWorkflow">Edit</button></td>

            <td class="td">{{ item.name }}</td>
            <td class="td">{{ item.container.name }}</td>
            <td class="td">{{ item.entryCount }}</td>
            <td class="td">{{ item.createdBy.displayName }}</td>
            <td class="td">{{ item.created }}</td>
            <td class="td">{{ item.lastModified }}</td>
          </tr>
        </tbody>
      </table>
    </div>


<!--Show the workflow-->
    <div v-if="showData" class="show-data">
      <div class="data">
        <h2>Workflow Details</h2>
        <p><b>Name : </b> {{ showData.name }}</p>
        <p><b>Group/Room : </b> {{ showData.container.name }}</p>
        <p><b>Entries : </b>{{ showData.entryCount }}</p>
        <p><b>Created By : </b>{{ showData.createdBy.displayName }}</p>
        <p><b>Created Date : </b>{{ showData.created }}</p>
        <p><b>Last Modified : </b>{{ showData.lastModified }}</p>
        <button class="close" @click="close_workflow">Close</button>
      </div>
    </div>
  </div>

<!--create workflow-->
  <div v-if="showPopUp" class="select-container">
    <div class="show">
      <h2>Select Container</h2>
      <label class="show-label">Organization</label>
      <input type="text" v-model="organization" class="show-input" disabled />

      <label class="show-label">Group</label>
      <input type="text" v-model="group" class="show-input" disabled />

      <label class="show-label">Room</label>
      <select v-model="selectedRoom" class="show-input">
        <option v-for="room in rooms" :key="room" :value="room">
          {{ room }}
        </option>
      </select>

      <div class="show-buttons">
        <button class="cancel-btn" @click="cancel">Cancel</button>
        <button class="launch-btn" @click="launch" :disabled="!selectedRoom">
          Launch Workflow
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Workflow",
  data() {
    return {
      headers: [
        "Workflow Name",
        "Group/Room",
        "Entries",
        "Last Modified By",
        "Last Entry Date",
        "Last Modified",
      ],
      details: [
        {
          id: "31130074",
          container: { name: "STAGE TESTING" },
          name: "91397",
          lastModified: 1690227302978,
          created: 1672820130824,
          createdBy: { displayName: "Aazad Saini Greywall" },
          entryCount: 9,
        },
        {
          id: "38933075",
          container: { name: "STAGE TESTING" },
          name: "Launch Workflow Custom Action",
          lastModified: 1707129115744,
          created: 1707129115743,
          createdBy: { displayName: "Baux, Administrator" },
          entryCount: 4,
        },
        {
          id: "3758650",
          container: { name: "STAGE TESTING" },
          name: "Test-Workflow-Grouplevel- Files option",
          lastModified: 1504267442000,
          created: 1504267418175,
          createdBy: { displayName: "Garg, Administrator" },
          entryCount: 157,
        },
        {
          id: "38933065",
          container: { name: "STAGE TESTING" },
          name: "Test",
          lastModified: 1707129116544,
          created: 1707129116543,
          createdBy: { displayName: "Aditya Singh, Administrator" },
          entryCount: 24,
        },
        {
          id: "3758650",
          container: { name: "STAGE TESTING" },
          name: "Test-Workflow-Grouplevel- Files option",
          lastModified: 1504267442000,
          created: 1504267418175,
          createdBy: { displayName: "Garg, Administrator" },
          entryCount: 157,
        },
      ],
      showPopUp: false,
      showData: false,
      organization: "Grey Wall Software [TEST] [STAGE]",
      group: "STAGE TESTING",
      rooms: ["Room", "Group"],
      selectedRoom: "",
    };
  },
  methods: {
    openPopUp() {
      this.showPopUp = true;
      this.$router.push("/create_workflow");
    },
    displayData(item) {
      this.showData = item;
      this.$router.push("/show_workflow");
    },
    close_workflow(){
      this.showData = null;
      this.$router.push("/");
    },
    editWorkflow(){
      this.$router.push("/edit_workflow")
    },
    launch() {
      this.$router.push("/create_workflow/launch_workflow");
    },
    cancel() {
      this.showPopUp = !this.showPopUp;
      this.$router.push("/");
    },
  },
};
</script>

<style>
.container {
  background: whitesmoke;
  padding: 10px;
  margin: 10px;
  border: 2px solid whitesmoke;
  border-radius: 5px;
  height: 100vh;
}

.title {
  color: black;
  font-size: 24px;
}

.table-main {
  border-radius: 8px;
}

.table {
  width: 100%;
  height: 100%;
  background-color: rgb(249, 249, 148);
  padding: 10px;
  border-radius: 5px;
}

.thead {
  font-weight: bold;
}

.th {
  text-align: left;
  font-weight: bold;
  color: black;
  background: skyblue;
  padding: 5px;
  text-align: center;
}

.tr:hover {
  background: rgb(184, 215, 234);
  cursor: pointer;
}

.td {
  border-bottom: 1px solid grey;
  color: black;
  padding: 10px;
  text-align: center;
}

.btn {
  background: blue;
  color: white;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background: darkblue;
  font-size: medium;
}

.select-container {
  position: fixed;
  top: 20%;
  left: 15%;
  width: 70%;
  height: auto;
  background: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
}

.show {
  background: whitesmoke;
  padding: 20px;
  border-radius: 5px;
  width: 100%;
}

.show h2 {
  color: black;
  background: darkblue;
  padding: 10px;
  border-radius: 10px;
}

.show-label {
  display: block;
  font-weight: bold;
  margin-top: 10px;
  color: black;
}

.show-input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border-radius: 5px;
}

.show-buttons {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.cancel-btn {
  background: blue;
  color: white;
  padding: 6px 12px;
  border: 1px;
  border-radius: 5px;
  font-weight: 600;
}

.cancel-btn:hover {
  cursor: pointer;
}

.launch-btn:disabled {
  background: grey;
  cursor: not-allowed;
  color: black;
  padding: 6px 12px;
  border: 1px;
  border-radius: 5px;
}

.launch-btn:enabled {
  background: blue;
  color: white;
  font-weight: 600;
  padding: 6px 12px;
  border: 1px;
  border-radius: 5px;
  cursor: pointer;
}

.show-data {
  position: fixed;
  top: 20%;
  left: 15%;
  width: 70%;
  height:auto;
  background: white;
  padding: 5px;
  border-radius: 5px;
}

.data{
  text-align:justify;
  background: whitesmoke;
  margin:5px;
  border:none;
}

.data h2{
  background: blue;
  padding:5px;
  border-radius: 4px;
}

.data p{
  margin-left:10px
}

.close{
  background: blue;
  color: white;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin: 20px auto 0;
}

.close:hover{
  background: red;
  cursor: pointer;
  font-size: medium;
}

</style>
