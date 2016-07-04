import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  fetchHomeData,
} from '../../actions/repository';

import RepoSection from '../../components/RepoSection/RepoSection';

@connect(
  state => ({ list: state.repository.list }),
  { fetchHomeData }
)
class Home extends Component {
  componentWillMount() {
    // hack
    // if (typeof document !== 'object') {
    this.props.fetchHomeData();
    // }
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        <h1>Home</h1>
        <p>This is home page.</p>
        {
          list.map(repo => (
            <RepoSection
              key={repo.id}
              id={repo.id}
              name={repo.name}
              iconCount={repo.iconCount}
              icons={repo.icons}
              user={repo.user}
            />
          ))
        }
      </div>
    );
  }
}

Home.propTypes = {
  list: PropTypes.array,
  fetchHomeData: PropTypes.func,
};

export default Home;
