import { useCallback, useContext, useState } from 'react';

import { supabase } from '@/lib//supabaseClient';
import Context from '@/lib/store/context';
import type { NewsType } from '@/types/NewsType';

const useUser = () => {
  const { dispatch } = useContext(Context);
  const [newsList, setNewsList] = useState<NewsType[]>();
  const [selectedList, setSelectedList] = useState<number[]>([]);

  const fetchNewsList = useCallback(async () => {
    const { data: news, error } = await supabase.from('news').select('*');
    // eslint-disable-next-line no-console
    if (error) console.log('error', error);
    else setNewsList(news);
  }, []);

  const deleteNews = useCallback(async () => {
    dispatch({ type: 'START_LOADING' });
    await Promise.all(
      selectedList.map(async (id) => {
        const { error } = await supabase.from('news').delete().eq('id', id);
        // eslint-disable-next-line no-console
        if (error) console.log('error', error);
      })
    );
    await fetchNewsList();
    dispatch({ type: 'STOP_LOADING' });
  }, [selectedList]);

  const selectDeleteNews = useCallback(
    (id: number) => {
      const list = selectedList.includes(id)
        ? selectedList.filter((selectedId) => selectedId !== id)
        : selectedList.concat(id);
      setSelectedList(list);
    },
    [selectedList]
  );

  return {
    newsList,
    selectedList,
    fetchNewsList,
    selectDeleteNews,
    deleteNews,
  };
};

export default useUser;
