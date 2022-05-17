import { makeAutoObservable, runInAction } from "mobx";
import { Jobs } from "../model/jobs-model";
// @ts-ignore
import { JobsModel } from "../model/jobs-model.ts";

export class JobsViewModel {
  jobs: Jobs[] = [];
  filteringJobs: Jobs[] = [];
  constructor() {
    makeAutoObservable(this, undefined, { autoBind: true });
  }

  async loadData(): Promise<void> {
    try {
      const data: Jobs[] = await JobsModel.getJobs();

      runInAction(() => {
        this.jobs = data;
        this.filteringJobs = data;
      });
    } catch (error) {
      console.log(error);
    }
  }

  getFilterJobs(filter: string[]): void {
    this.filteringJobs = this.jobs.filter((el) =>
      filter.every(
        (item) =>
          el.languages.includes(item) ||
          el.tools.includes(item) ||
          item === el.role ||
          item === el.level
      )
    );
  }
}
