import axios from "axios";

export class Tasks {
  static async getTasks() {
      const { data } = await axios.get('http://localhost:3001/tasks')

      return data;
  }
}