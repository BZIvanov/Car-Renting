import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CarCard } from '../../molecules';
import { Loading, Pagination } from '../../atoms';
import { useStyles } from './styles';
import * as actions from '../../../store/actions/cars';
import { PAGE_RESULTS } from '../../../constants';

const CarsList = (props) => {
  const { isLoading, cars, allCount, page, onFetchCars } = props;
  const classes = useStyles();

  useEffect(() => {
    onFetchCars();
  }, [onFetchCars]);

  let renderData = null;
  if (isLoading) {
    renderData = (
      <div className={classes.loading}>
        <Loading />
      </div>
    );
  } else {
    renderData = cars.map((car) => <CarCard key={car._id} car={car} />);
  }

  const handlePageChange = (event, value) => {
    onFetchCars(value);
  };

  return (
    <section className={classes.section}>
      <div className={classes.content}>
        <div className={classes.cars}>{renderData}</div>
        <div className={classes.pagination}>
          <Pagination
            count={Math.ceil(allCount / PAGE_RESULTS)}
            page={page}
            onChange={handlePageChange}
          />
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.cars.loading,
    cars: state.cars.cars,
    page: state.cars.page,
    allCount: state.cars.allCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCars: (page) => dispatch(actions.fetchCars(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
