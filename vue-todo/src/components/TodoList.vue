<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.storedTodoItems"
        v-bind:key="todoItem.item"
        class="shadow">

        <i class="checkBtn fas fa-check"
          v-bind:class="{checkBtnCompleted: todoItem.completed}"
          v-on:click="toggleComplete({todoItem, index})">
        </i>

        <span v-bind:class="{textCompleted: todoItem.completed}">
            {{ todoItem.item }}
        </span>

        <span class="removeBtn"
          v-on:click="removeTodo({todoItem, index})">

          <i class="fa fa-trash-o">
          </i>

        </span>             
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    methods: {
      ...mapMutations({
        removeTodo: 'removeOneItem',
        toggleComplete: 'toggleOneItem',
      }),
        // removeTodo(todoItem, index){
            // this.$emit('removeItem', todoItem, index); == 기본 뷰
            // this.$store.commit('removeOneItem', {todoItem, index}); == 뷰 스토어
        // },
        // toggleComplete(todoItem, index) {
        //     // this.$emit('toggleOneItem', todoItem, index);
        //     this.$store.commit('toggleOneItem', {todoItem, index});
        // },
    },
    computed: {
      // todoItems() {
      //   return this.$store.getters.storedTodoItems;
      // }
      ...mapGetters(['storedTodoItems'])
    }
}
</script>

<style>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }
  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }
  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }
  .checkBtnCompleted {
      color: #b3adad;
  }
  .textCompleted {
      text-decoration: line-through;
      color: #b3adad;
  }
  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
  /* 리스트 아이템 트랜지션 효과 */
  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }
  .list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }
</style>