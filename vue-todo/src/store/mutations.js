const addOneItem = (state, todoItem) => {
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        // 인자로 넘어온 state 값만 수정 가능 하기 때문에 this 뺌
        state.todoItems.push(obj)
}
const removeOneItem = (state, payload) => {
            // 삭제 로직
            localStorage.removeItem(payload.todoItem.item);
            // 화면에 바로 반영되게 data 수정
            state.todoItems.splice(payload.index, 1);
}
const toggleOneItem = (state, payload) => {
            // props로 내린 데이터를 변경하고 다시 올리는 것 보단 전체 공유하는 데이터를 변경하는 것이 더 효율적
            // todoItem.completed = !todoItem.completed;
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
            // 로컬스토리지 데이터 갱신
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
}
const clearAllItems = (state) => {
            localStorage.clear();
            state.todoItems=[];
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };