import { observer } from "mobx-react";
import { Component } from "react";
// @ts-ignore
import { Main } from "../components/main/main.tsx";
// @ts-ignore
import { JobsViewModel } from "./jobs-view.model.ts";

class JobsView extends Component {
  viewModel: JobsViewModel = new JobsViewModel();

  componentDidMount() {
    this.viewModel.loadData();
  }
  render() {
    const { getFilterJobs, filteringJobs } = this.viewModel;

    return <Main jobs={filteringJobs} getFilterJobs={getFilterJobs} />;
  }
}

export default observer(JobsView);
