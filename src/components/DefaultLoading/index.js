import React from 'react';
import { Loading, Error } from './styles';

export default (props) => {
  if (props.error) {
    return <Error>Error! <button onClick={props.retry}>Retry</button></Error>;
  } else if (props.pastDelay) {
    return <Loading>Loading...</Loading>;
  } else {
    return null;
  }
}
