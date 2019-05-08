import React from 'react';
import { connect } from 'react-redux';

import './area.scss';

const area = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const Area = () => {
  return (
    <div className="area">
      {area.map((item, index) => (
        <div className="area__item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Area);
