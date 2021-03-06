import ReactPaginate from 'react-paginate';
import React from 'react';
import { connect } from 'react-redux';
import './Pagination.less';
import { history } from '../../configs/configureStore';
import queryString from 'query-string';
import { getTitles } from '../../reducers/search';


export const mapStateToProps = (state) => ({
  pageSize: state.search.meta.hits,
  routeLocation: state.routing.location.search
});

export const mapDispatchToProps = (dispatch) => ({
  getTitles(search,page,sort) {
    dispatch(
        getTitles(search,page,sort)
    );
  },
});

class PaginationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: queryString.parse(history.location.search).page
    };
  }

  handlePageClick (value){
    const search = queryString.parse(history.location.search).searchBar;
    const sort = queryString.parse(history.location.search).sort;
    history.push(`search?searchBar=${search}&page=${value.selected}&sort=${sort}`);
    this.props.getTitles(search, value.selected,sort);
  }

  render() {
    const pageSize=Math.floor(parseInt(this.props.pageSize)/10);
    return (
        <div className="myPagination">
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a>...</a>}
                       breakClassName={"break-me"}
                       pageCount={ pageSize ? ( pageSize < 200 ? pageSize : 200) : 1 }
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={(value) => this.handlePageClick(value)}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"}
                       initialPage={0}
        />
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);
