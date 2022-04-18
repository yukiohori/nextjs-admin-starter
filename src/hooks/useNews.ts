import { useCallback, useContext, useMemo, useState } from 'react';
import { useErrorHandler } from 'react-error-boundary';

import { supabase } from '@/lib//supabaseClient';
import Context from '@/lib/store/context';
import type { NewsFormType, NewsType } from '@/types/NewsType';
import { NEWS_MAX_PAGE_SHOW } from '@/utils/constants';

const useUser = () => {
  const { dispatch, state } = useContext(Context);
  const handleError = useErrorHandler();
  const [newsList, setNewsList] = useState<NewsType[]>();
  const [selectedList, setSelectedList] = useState<number[]>([]);
  const [pagination, setPagination] = useState<number>(0);
  const [newsListCount, setNewsListCount] = useState<number>(0);

  const fetchNewsList = useCallback(async (pag: number = 0) => {
    if (state.isSilence) return;
    dispatch({ type: 'START_SILENCE' });
    const {
      data: news,
      count,
      error,
    } = await supabase
      .from('news')
      .select('*', { count: 'exact' })
      .range(pag * NEWS_MAX_PAGE_SHOW, (pag + 1) * NEWS_MAX_PAGE_SHOW)
      .order('id', { ascending: false });
    if (error) {
      handleError(error);
    } else {
      setNewsListCount(count || 0);
      setNewsList(news);
    }
    dispatch({ type: 'STOP_SILENCE' });
  }, []);

  const searchNews = useCallback(async (search: string) => {
    if (search.trim().length > 0) {
      const { data: news, error } = await supabase
        .from('news')
        .select('*', { count: 'exact' })
        .like('title', `%${search}%`)
        .order('id', { ascending: false });

      if (error) {
        handleError(error);
      } else {
        setNewsListCount(0);
        setNewsList(news);
      }
    } else {
      fetchNewsList();
    }
  }, []);

  const upsertNews = useCallback(
    async (data: NewsFormType) => {
      if (state.isLoading) return;
      dispatch({ type: 'START_LOADING' });
      const { error } = await supabase.from('news').upsert([data]);

      if (error) {
        handleError(error);
      } else {
        await fetchNewsList(data.id ? pagination : 0);
        if (!data.id) {
          setPagination(0);
        }
      }
      dispatch({ type: 'STOP_LOADING' });
    },
    [pagination]
  );

  const deleteNews = useCallback(async () => {
    if (!selectedList.length || state.isLoading) return;
    dispatch({ type: 'START_LOADING' });
    const { error } = await supabase
      .from('news')
      .delete()
      .in('id', selectedList);
    if (error) {
      handleError(error);
    }
    await fetchNewsList();
    setSelectedList([]);
    setPagination(0);
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

  const onChangePagination = useCallback(
    async (index) => {
      if (index === pagination && state.isSilence) return;
      setPagination(index);
      await fetchNewsList(index);
    },
    [pagination]
  );

  const paginationPage = useMemo(() => {
    return Math.ceil(newsListCount / NEWS_MAX_PAGE_SHOW);
  }, [newsListCount]);

  return {
    newsList,
    selectedList,
    pagination,
    paginationPage,
    fetchNewsList,
    selectDeleteNews,
    deleteNews,
    upsertNews,
    onChangePagination,
    searchNews,
  };
};

export default useUser;
