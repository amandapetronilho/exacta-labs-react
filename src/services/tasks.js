import axios from "axios";

export class Tasks {
  static async getTasks() {
      const { data } = await axios.get('http://localhost:3001/tasks');

      return data;
  }

  static async createTask(task) {
    const { data } = await axios.post('http://localhost:3001/tasks', task);

    return data;
  }

  static async deleteTask(id) {
    const { data } = await axios.delete('http://localhost:3001/tasks/' + id);

    return data;
  }
}