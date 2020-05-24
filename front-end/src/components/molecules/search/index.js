import React from 'react';
import { useForm } from 'react-hook-form';
import { SearchIcon, InputBase, IconButton } from '../../atoms';
import { useStyles } from './styles';

const Search = ({ onFetchCars }) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ model }) => {
    onFetchCars(undefined, model);
  };

  return (
    <div className={classes.search}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <IconButton className={classes.searchIcon} type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase
          name="model"
          inputRef={register}
          placeholder="Search by name"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
        />
      </form>
    </div>
  );
};

export default Search;
