import { useCallback, useState } from 'react';

import { supabase } from '@/lib//supabaseClient';
import type { NewsType } from '@/types/NewsType';

const useUser = () => {
  const [newsList, setNewsList] = useState<NewsType[]>();
  const [selectedList, setSelectedList] = useState<number[]>([]);

  const fetchNewsList = useCallback(async () => {
    const { data: news, error } = await supabase.from('news').select('*');
    // eslint-disable-next-line no-console
    if (error) console.log('error', error);
    else setNewsList(news);
  }, []);

  const deleteNews = useCallback(async () => {
    const { data: news, error } = await supabase.from('news').select('*');
    // eslint-disable-next-line no-console
    if (error) console.log('error', error);
    else setNewsList(news);
  }, []);

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
