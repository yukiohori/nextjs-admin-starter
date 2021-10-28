import { supabase } from "src/lib/supabaseClient";
import { useEffect, useState } from "react";
import type { NewsType } from "src/types/NewsType";

const NewsList = () => {
  const [news, setNews] = useState<Array<NewsType>>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    const { data: news, error } = await supabase
      .from<NewsType>("news")
      .select("*");
    if (error) console.log("error", error);
    else setNews(news!);
  };

  return (
    <div>
      <ul>
        {news.map((news: NewsType) => (
          <li key={news.id}>
            {news.title} - {news.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
