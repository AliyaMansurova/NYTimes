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
  getTitles(search,page) {
    dispatch(
        getTitles(search,page)
    );
  },
});

class PaginationContainer extends React.Component {

  handlePageClick (value){
    const search = queryString.parse(history.location.search).searchBar;
    history.push(`search?searchBar=${search}&page=${value.selected}`);
    this.props.getTitles(search, value.selected);
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
                       activeClassName={"active"} />
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer);
