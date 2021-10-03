<template>
  <div id="app">
    <!-- store를 쓰냐 안쓰냐 -->
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:addTodoItem="addOneItem"></TodoInput> -->
    <TodoInput></TodoInput>
    <!-- <TodoList
    v-on:removeItem="removeOneItem"
    v-on:toggleItem="toggleOneItem"
    ></TodoList> -->
    <TodoList></TodoList>
    <!-- <TodoFooter v-on:clearAll="clearAllItems"></TodoFooter> -->
    <TodoFooter></TodoFooter>
    <!-- <Demo></Demo> -->
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import TodoFooter from './components/TodoFooter.vue'
// import Demo from './components/Demo.vue'

export default {
  // == store.js state
  // data() {
  //   return {
  //     todoItems: []
  //   }
  // },
  // == store.Mutations
  // methods: {
  //   ES6 함수 선언 축약
  //   addOneItem(todoItem) {
  //     const obj = {completed: false, item: todoItem};
  //     localStorage.setItem(todoItem, JSON.stringify(obj));
  //     this.todoItems.push(obj)
  //   },
  //   removeOneItem(todoItem, index) {
  //     // 삭제 로직
  //     localStorage.removeItem(todoItem.item);
  //     // 화면에 바로 반영되게 data 수정
  //     this.todoItems.splice(index, 1);
  //   },
  //   toggleOneItem(todoItem, index) {
  //     // props로 내린 데이터를 변경하고 다시 올리는 것 보단 전체 공유하는 데이터를 변경하는 것이 더 효율적
  //     // todoItem.completed = !todoItem.completed;
  //     this.todoItems[index].completed = !this.todoItems[index].completed
  //     // 로컬스토리지 데이터 갱신
  //     localStorage.removeItem(todoItem.item);
  //     localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
  //   },
  //   clearAllItems() {
  //     localStorage.clear();
  //     this.todoItems=[];
  //   }
  // },
  components: {
    // ES6 객체의 키와 속성이 같을 때 하나만 적어도 됨
    TodoHeader,
    TodoList,
    TodoInput,
    TodoFooter,
    // Demo
  },
  // ==store.js storage
  // computed() {
  //   if (localStorage.length > 0) {
  //     for (let i = 0; i < localStorage.length; i++) {
  //       if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
  //         const value = JSON.parse(localStorage.getItem(localStorage.key(i)));
  //         this.todoItems.push(value);
  //         // this.todoItems.push(localStorage.key(i));
  //       }
  //     }
  //   }
  // }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>