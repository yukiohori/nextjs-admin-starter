import { useEffect, useState } from 'react';
import { supabase } from 'src/lib/supabaseClient';
import type { NewsType } from 'src/types/NewsType';

const NewsList = () => {
  const [news, setNews] = useState<NewsType[]>([]);

  const fetchNews = async () => {
    const { data: newsList, error } = await supabase
      .from<NewsType>('news')
      .select('*');
    if (error) console.log('error', error);
    else setNews(newsList!);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            {item.title} - {item.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
