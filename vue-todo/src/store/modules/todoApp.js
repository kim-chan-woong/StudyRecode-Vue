// 처음 App.vue에서 created()에 있던 로직과 같음
const storage = {
    fetch() {
        const arr = [];
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
                    const value = JSON.parse(localStorage.getItem(localStorage.key(i)));
                    arr.push(value);
                    // this.todoItems.push(localStorage.key(i));
                }
            }
        }
        return arr;
    },
};
const state = {
    todoItems: storage.fetch(),
};

const getters = {
    storedTodoItems(state) {
        return state.todoItems;
}
};

const mutations = {
    addOneItem(state, todoItem) {
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        // 인자로 넘어온 state 값만 수정 가능 하기 때문에 this 뺌
        state.todoItems.push(obj)
    },
    removeOneItem(state, payload) {
            // 삭제 로직
            localStorage.removeItem(payload.todoItem.item);
            // 화면에 바로 반영되게 data 수정
            state.todoItems.splice(payload.index, 1);
    },
    toggleOneItem(state, payload) {
            // props로 내린 데이터를 변경하고 다시 올리는 것 보단 전체 공유하는 데이터를 변경하는 것이 더 효율적
            // todoItem.completed = !todoItem.completed;
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
            // 로컬스토리지 데이터 갱신
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems(state) {
            localStorage.clear();
            state.todoItems=[];
    }
}

export default {
    storage,
    state,
    getters,
    mutations
}