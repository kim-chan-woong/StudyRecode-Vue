import Vue from 'vue'
import Vuex from 'vuex'
// 스토어 속성 모듈화
// import * as getters from './getters.js'
// import * as mutations from './mutations.js'
// 스토어 자체 모듈화
import todoApp from './modules/todoApp.js'

// use(): vue의 플러그인 (전역으로 뷰의 기능을 추가하고 싶을 때)
// TOdo.vue -> this.$store으로 접근 가능
// 기본으로 지원하지 않는 플러그인들은 설정해줘야한다.
Vue.use(Vuex);

// 첫 로드 시 로컬 스토리지의 데이터를 todoItem에 담음
// // 처음 App.vue에서 created()에 있던 로직과 같음
// const storage = {
//     fetch() {
//         const arr = [];
//         if (localStorage.length > 0) {
//             for (let i = 0; i < localStorage.length; i++) {
//                 if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
//                     const value = JSON.parse(localStorage.getItem(localStorage.key(i)));
//                     arr.push(value);
//                     // this.todoItems.push(localStorage.key(i));
//                 }
//             }
//         }
//         return arr;
//     },
// };

// 밖에서 사용 가능하도록
// 쓰는 곳에서는 import해주기
// export const store = new Vuex.Store({
//     state: {
//         // headerText: 'Todo It!',
//         todoItems: storage.fetch(),
//         price: 100
//     },
//     getters,
//     // {
//     //     storedTodoItems(state) {
//     //         return state.todoItems;
//     //     },
//     //     originalPrice(state) {
//     //         return state.price;
//     //     },
//     //     doublePrice(state) {
//     //         return state.price * 2;
//     //     },
//     //     triplePrice(state) {
//     //         return state.price * 3;
//     //     }
//     // },
//     mutations,
//     // {
//     //     addOneItem(state, todoItem) {
//     //         const obj = {completed: false, item: todoItem};
//     //         localStorage.setItem(todoItem, JSON.stringify(obj));
//     //         // 인자로 넘어온 state 값만 수정 가능 하기 때문에 this 뺌
//     //         state.todoItems.push(obj)
//     //     },
        
//     //     removeOneItem(state, payload) {
//     //         // 삭제 로직
//     //         localStorage.removeItem(payload.todoItem.item);
//     //         // 화면에 바로 반영되게 data 수정
//     //         state.todoItems.splice(payload.index, 1);
//     //     },

//     //     toggleOneItem(state, payload) {
//     //         // props로 내린 데이터를 변경하고 다시 올리는 것 보단 전체 공유하는 데이터를 변경하는 것이 더 효율적
//     //         // todoItem.completed = !todoItem.completed;
//     //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
//     //         // 로컬스토리지 데이터 갱신
//     //         localStorage.removeItem(payload.todoItem.item);
//     //         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
//     //     },

//     //     clearAllItems(state) {
//     //         localStorage.clear();
//     //         state.todoItems=[];
//     //     }
//     // }
// });

export const store = new Vuex.Store({
    modules: {
        todoApp: todoApp
    }
});