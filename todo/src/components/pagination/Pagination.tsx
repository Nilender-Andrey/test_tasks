import React, { useEffect, useRef } from 'react';
import { taskSlice } from '../../store/reducers/tasks/task_slice';
import { useAppDispatch } from '../../store/store';

import './Pagination.css';

function Pagination() {
  const lastItem = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();
  const dispatch = useAppDispatch();

  const incrementPage = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) { dispatch(taskSlice.actions.incrementPage()); }
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(incrementPage);

    if (lastItem.current) observer.current.observe(lastItem.current);
  }, []);

  return (
    <div className='pagination' ref={lastItem} />
  );
}

export default Pagination;
