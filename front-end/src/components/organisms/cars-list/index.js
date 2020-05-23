import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { CarCard } from '../../molecules';
import { Loading, Pagination, NavLink, Typography } from '../../atoms';
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
    renderData = <Loading />;
  } else {
    renderData = cars.map((car) => (
      <NavLink key={car._id} to={`/car/${car._id}`}>
        <CarCard car={car} />
      </NavLink>
    ));
  }

  const handlePageChange = (event, value) => {
    onFetchCars(value);
  };

  return (
    <section className={classes.section}>
      {renderData.length > 0 ? (
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
      ) : (
        <div className={classes.empty}>
          <Typography variant="h3" color="primary">
            No results
          </Typography>
        </div>
      )}
    </section>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.cars.loading,
  cars: state.cars.cars,
  page: state.cars.page,
  allCount: state.cars.allCount,
});

const mapDispatchToProps = (dispatch) => ({
  onFetchCars: (page) => dispatch(actions.fetchCars(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CarsList);
