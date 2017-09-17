import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import { getTitles } from '../../reducers/search'
import  './SearchForm.less';

export const mapStateToProps = (state) => ({
  routeLocation: state.routing.location
});

export const mapDispatchToProps = (dispatch) => ({
  getTitles(search,page) {
    dispatch(
        getTitles(search,page)
    );
  },
});

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(newValue) {
    this.setState({
      value: newValue
    });
  }

  render() {
    const page = queryString.parse(this.props.routeLocation.search).page;
    return (
        <div className="searchForm">
          <input className="input" type="search" id="search" onChange={(e) =>this.handleChange(e.target.value)} />
          <Link
              to={{
                pathname: '/search',
                search: `?searchBar=${this.state.value}&page=${page}`}}
              onClick={() => this.props.getTitles(this.state.value, page)}
              replace
          >
            <button type="submit">ok</button>
          </Link>
        </div>
    );
  }
}
SearchForm.propTypes = {

};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
