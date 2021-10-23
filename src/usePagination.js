import { useCallback, useState } from "react";

export default function usePagination(allReviews, perPage) {
  const [page, setPage] = useState(1);

  const maxPage = Math.ceil(allReviews.length / perPage);

  function pageData() {
    const start = (page - 1) * perPage;
    const end = start + perPage;

    return allReviews.slice(start, end);
  }

  function nextPage() {
    setPage((page) => Math.min(page + 1, maxPage));
  }

  function prevPage() {
    setPage((page) => Math.max(page - 1, 1));
  }

  const jumpPage = useCallback(
    (page) => {
      const pageNumber = Math.max(1, page);
      setPage(Math.min(pageNumber, maxPage));
    },
    [maxPage]
  );

  return { nextPage, prevPage, jumpPage, pageData, page, maxPage };
}
