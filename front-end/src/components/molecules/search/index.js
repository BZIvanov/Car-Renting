import React from 'react';
import { useForm } from 'react-hook-form';
import { SearchIcon, InputBase, IconButton } from '../../atoms';
import { useStyles } from './styles';

const Search = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={classes.search}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <IconButton className={classes.searchIcon} type="submit">
          <SearchIcon />
        </IconButton>
        <InputBase
          name="search"
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
