import { useState } from 'react';
import { supabase } from 'src/lib//supabaseClient';

import { NewsType } from '@/types/NewsType';

const useUser = () => {
  const [newsList, setNewsList] = useState<NewsType[]>();

  const fetchNewsList = async () => {
    const { data: news, error } = await supabase.from('news').select('*');
    if (error) console.log(error);
    else setNewsList(news);
  };

  return {
    newsList,
    fetchNewsList,
  };
};

export default useUser;
