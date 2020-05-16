import {
  HomeIcon,
  DriveEtaIcon,
  ExitToAppIcon,
  AddCircleIcon,
  CreateTwoToneIcon,
  AssignmentIndTwoToneIcon,
} from '../../atoms';
import * as constants from '../../../constants';

export const commonLinks = [
  { value: 'HOME', path: constants.ROOT_PATH, icon: HomeIcon },
  {
    value: 'VIEW AVAILABLE CARS',
    path: constants.ALL_AVAILABLE_CARS_PATH,
    icon: DriveEtaIcon,
  },
];

export const authenticatedLinks = [
  {
    value: 'ADD NEW CAR',
    path: constants.ADD_NEW_CAR_PATH,
    icon: AddCircleIcon,
  },
  { value: 'LOGOUT', path: constants.LOGOUT_PATH, icon: ExitToAppIcon },
];

export const nonAuthenticatedLinks = [
  {
    value: 'SIGN UP',
    path: constants.SIGNUP_PATH,
    icon: CreateTwoToneIcon,
  },
  {
    value: 'LOG IN',
    path: constants.LOGIN_PATH,
    icon: AssignmentIndTwoToneIcon,
  },
];
