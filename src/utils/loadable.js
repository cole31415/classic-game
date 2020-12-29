import React from "react";
import Loadable from "react-loadable";

export const lazyLoad = (loader, config) => {
  return Loadable({
    loader: loader,
    loading: EmptyLoading,
    ...config,
  });
};

const EmptyLoading = ({ error }) => {
  if (error) {
    console.log(error);
  }
  return null;
};
