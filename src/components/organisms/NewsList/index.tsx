import { lightFormat } from 'date-fns';
import { useEffectOnce } from 'react-use';

import Spinner from '@/components/atoms/Spinner';
import useNews from '@/hooks/useNews';

const NewsList = () => {
  const {
    newsList,
    selectedList,
    selectDeleteNews,
    fetchNewsList,
    deleteNews,
  } = useNews();

  useEffectOnce(() => {
    fetchNewsList();
  });

  return newsList ? (
    <div className="overflow-x-auto">
      <div className="flex w-full">
        <button onClick={deleteNews}>DELETE</button>
      </div>
      <table className="mt-6 table w-full">
        <thead>
          <tr>
            <th></th>
            <th>CREATED</th>
            <th>TITLE</th>
            <th>CONTENT</th>
          </tr>
        </thead>
        <tbody>
          {newsList.map((news) => (
            <tr key={news.id}>
              <td className="text-center">
                <input
                  type="checkbox"
                  checked={selectedList.includes(news.id)}
                  className="checkbox-primary checkbox"
                  onChange={() => selectDeleteNews(news.id)}
                />
              </td>
              <td>{lightFormat(new Date(news.created_at), 'yyyy-MM-dd')}</td>
              <td>{news.title}</td>
              <td>{news.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner />
    </div>
  );
};

export default NewsList;
