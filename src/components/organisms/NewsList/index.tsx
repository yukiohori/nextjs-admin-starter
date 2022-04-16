import { lightFormat } from 'date-fns';

import Spinner from '@/components/atoms/Spinner';
import type { NewsType } from '@/types/NewsType';

type NewsListPros = {
  newsList?: NewsType[];
};

const NewsList = ({ newsList }: NewsListPros) => {
  return newsList ? (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>CREATED</th>
            <th>TITLE</th>
            <th>CONTENT</th>
          </tr>
        </thead>
        <tbody>
          {newsList.map((news) => (
            <tr key={news.id}>
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
