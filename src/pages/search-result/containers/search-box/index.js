import View from '../../components/search-box';

import { connect } from 'react-redux';

import { currentSearchKeyword } from '@/store/modules/search';

const mapStateToProps = (state) => {
  return {
    txt: currentSearchKeyword(state)
  };
};

export default connect(mapStateToProps, null)(View);
