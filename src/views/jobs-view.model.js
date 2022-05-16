import { makeAutoObservable, runInAction } from "mobx";
import { JobsModel } from "../model/jobs-model";

export class JobsViewModel {
  jobs = [];
  filteringJobs = [];
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  async loadData() {
    try {
      const data = await JobsModel.getJobs();

      runInAction(() => {
        this.jobs = data;
        this.filteringJobs = data;
      });
    } catch (error) {
      console.log(error);
    }
  }

  getFilterJobs(filter, data) {
    this.filteringJobs = this.jobs.filter((el) =>
      filter.every(
        (item) =>
          el.languages.includes(item) ||
          el.tools.includes(item) ||
          item === el.role ||
          item === el.level
      )
    );

    console.log(this.filteringJobs);
  }
}
