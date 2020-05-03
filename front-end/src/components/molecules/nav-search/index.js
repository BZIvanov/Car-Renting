import React from 'react';
import { useForm } from 'react-hook-form';
import { SearchIcon, InputBase, IconButton } from '../../atoms';
import { useStyles } from './styles';

const NavSearch = () => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={classes.search} onSubmit={handleSubmit(onSubmit)}>
      <IconButton className={classes.searchIcon} type="submit">
        <SearchIcon />
      </IconButton>
      <InputBase
        name="search"
        inputRef={register}
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
    </form>
  );
};

export default NavSearch;
