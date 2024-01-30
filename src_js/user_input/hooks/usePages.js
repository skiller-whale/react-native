import { useState } from "react";

const usePages = (pages) => {
  const [pageIndex, setPageIndex] = useState(0);
  const page = pages[pageIndex];

  const nextPage = () => {
    if (pageIndex < pages.length - 1) {
      setPageIndex(pageIndex + 1);
    }
  };

  const previousPage = () => {
    if (pageIndex > 0) {
      setPageIndex(pageIndex - 1);
    }
  };

  return [page, nextPage, previousPage];
};

export default usePages;
