import { observer } from "mobx-react";
import { Component } from "react";
import { Main } from "../components/main/main";

import { JobsViewModel } from "./jobs-view.model";

class JobsView extends Component {
  viewModel = new JobsViewModel();

  componentDidMount() {
    this.viewModel.loadData();
  }
  render() {
    const { getFilterJobs, filteringJobs } = this.viewModel;
    console.log(filteringJobs);

    return <Main jobs={filteringJobs} getFilterJobs={getFilterJobs} />;
  }
}

export default observer(JobsView);
