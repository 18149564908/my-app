interface Todos {
    name: string,
    done?: boolean,
}

export interface TodoStore {
    dataSource: Todos[];
    fetchData: () => void;
    add: (todo: Todos) => Todos;
    remove: (index: number) => void;
}
const store: TodoStore = {
    dataSource: [],
    async fetchData() {
        this.dataSource = await new Promise(resolve =>
            setTimeout(() => {
                resolve([
                    {
                        name: 'react'
                    },
                    {
                        name: 'vue',
                        done: true
                    },
                    {
                        name: 'angular'
                    }
                ]);
            }, 1000)
        );
    },

    add(todo) {
        this.dataSource.push(todo);
        return todo;
    },

    remove(index) {
        this.dataSource.splice(index, 1);
    },
}
export default store;
