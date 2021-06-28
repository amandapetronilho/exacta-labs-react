import { api } from "./api";

export class Tasks {
  static async getTasks(page, limit) {
      const { data, headers } = await api.get(`tasks?_page=${page}&_limit=${limit}`);

      return {
        data,
        total: headers['x-total-count'],
      };
  }

  static async createTask(task) {
    const { data } = await api.post('tasks', task);

    return data;
  }

  static async deleteTask(id) {
    const { data } = await api.delete('tasks/' + id);

    return data;
  }
}