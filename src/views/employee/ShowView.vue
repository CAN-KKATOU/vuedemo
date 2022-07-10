<template>
  <div id="container">
    <div class="form-horizontal">
      <form class="form-group" @submit.prevent="search()">
        <div class="form-floating mb-4">
          <textarea
            class="form-control"
            placeholder="Leave a number here"
            id="floatingTextarea"
            v-model="form.number"
          ></textarea>
          <label for="floatingTextarea">编号</label>
        </div>
        <div class="form-floating mb-4">
          <textarea
            class="form-control"
            placeholder="Leave a name here"
            id="floatingTextarea"
            v-model="form.name"
          ></textarea>
          <label for="floatingTextarea">姓名</label>
        </div>
        <div class="row mb-4">
          <div class="col-md">
            <div class="form-floating">
              <select
                class="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                v-model="form.gender"
              >
                <option selected>选择性别</option>
                <option value="">None</option>
                <option value="男">男</option>
                <option value="女">女</option>
              </select>
              <label for="floatingSelect">性别</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a name here"
                id="floatingTextarea"
                v-model="form.age"
              ></textarea>
              <label for="floatingTextarea">年龄</label>
            </div>
          </div>
        </div>
        <div class="form-floating mb-4">
          <select
            class="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            v-model="form['dep.id']"
          >
            <option value="">部门</option>
            <option
              v-for="dep in depList"
              v-text="dep.name"
              v-bind:key="dep.id"
              v-bind:value="dep.id"
            ></option>
          </select>
          <label for="floatingSelect">部门</label>
        </div>
        <div class="mb-4 row justify-content-end">
          <button
            id="searchBtn"
            type="button"
            class="btn btn-primary btn-lg"
            @click="search"
          >
            搜索
          </button>
        </div>
      </form>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>编号</th>
          <th>名字</th>
          <th>性别</th>
          <th>年龄</th>
          <th>部门</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="data"
          v-for="emp in list"
          v-bind:key="emp.id"
          v-bind:class="{ selected: emp.id === selectedId }"
          @click="selectTr(emp.id)"
        >
          <td v-text="emp.number"></td>
          <td v-text="emp.name"></td>
          <td v-text="emp.gender"></td>
          <td v-text="emp.age"></td>
          <td v-text="emp.dep != null ? emp.dep.name : ''"></td>
        </tr>
      </tbody>
    </table>
    <div id="buttons">
      <button type="button" class="btn btn-primary" @click="showAdd">
        新增
      </button>
      <button type="button" class="btn btn-primary" @click="showUpdate">
        修改
      </button>
      <button type="button" class="btn btn-danger" @click="deleteData">
        删除
      </button>
    </div>
  </div>
</template>

<script>
import API from "@/plugins/axiosInstance";
export default {
  name: "EmpShow",
  data() {
    return {
      selectedId: -1,
      form: {
        number: null,
        name: null,
        gender: "",
        age: null,
        "dep.id": "",
      },
      list: [],
      depList: [],
    };
  },
  methods: {
    search: function () {
      API.get("/emp", { params: this.form }).then((res) => {
        this.list = res;
      });
    },
    searchDep: function () {
      API.get("/dep").then((res) => {
        this.depList = res;
      });
    },
    selectTr: function (id) {
      this.selectedId = id;
    },
    showAdd: function () {
      this.$router.push({ name: "EmpAdd" });
    },
    showUpdate: function () {
      if (this.selectedId > -1) {
        this.$router.push({
          name: "EmpUpdate",
          params: { id: this.selectedId },
        });
      } else {
        alert("请选中数据");
      }
    },
    deleteData: function () {
      if (this.selectedId > -1) {
        API.delete("/emp/" + this.selectedId).then((res) => {
          console.log(res);
          if (res === true) {
            this.search();
          } else {
            alert("系统错误");
          }
        });
      } else {
        alert("请选中数据");
      }
    },
  },
  created() {
    this.search();
    this.searchDep();
  },
};
</script>

<style scoped>
#container {
  width: 1100px;
  margin: 20px auto;
}

#container .selected {
  background: #6191c9;
}

#buttons button {
  margin-right: 5px;
  width: 100px;
}

#searchBtn {
  width: 150px;
}
</style>
