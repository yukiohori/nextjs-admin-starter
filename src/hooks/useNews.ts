import { useState } from 'react';

import { supabase } from '@/lib//supabaseClient';
import type { NewsType } from '@/types/NewsType';

const useUser = () => {
  const [newsList, setNewsList] = useState<NewsType[]>();

  const fetchNewsList = async () => {
    const { data: news, error } = await supabase.from('news').select('*');
    // eslint-disable-next-line no-console
    if (error) console.log('error', error);
    else setNewsList(news);
  };

  return {
    newsList,
    fetchNewsList,
  };
};

export default useUser;
