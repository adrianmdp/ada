import { api } from "utils"

const addTask = (title, date, description) => {

    api.post('/tasks.json', {title, date, description})

}

export { addTask }