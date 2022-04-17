import { lightFormat } from 'date-fns';
import { useForm } from 'react-hook-form';
import { useEffectOnce } from 'react-use';

import Modal from '@/components/atoms/Modal';
import Spinner from '@/components/atoms/Spinner';
import useNews from '@/hooks/useNews';

const NewsList = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const {
    newsList,
    selectedList,
    selectDeleteNews,
    fetchNewsList,
    deleteNews,
    upsertNews,
  } = useNews();

  const onSubmit = (data: any) => {
    upsertNews(data);
    document.getElementById('modal')?.click();
    reset();
  };

  useEffectOnce(() => {
    fetchNewsList();
  });

  return newsList ? (
    <div className="overflow-x-auto">
      <div className="flex w-full">
        <button onClick={deleteNews}>DELETE</button>
        <button>
          <label htmlFor="modal" className="modal-button btn">
            open modal
          </label>
        </button>
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
      <Modal>
        <h3 className="mb-4">ADD NEWS</h3>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <label className="label">
            <span className="label-text">Title*</span>
          </label>
          {errors.title && <span>This field is required</span>}
          <input
            type="text"
            placeholder="Type here"
            className="input-bordered input mb-2 w-full"
            {...register('title', { required: true })}
          />
          <label className="label">
            <span className="label-text">Content*</span>
          </label>
          {errors.content && <span>This field is required</span>}
          <textarea
            className="textarea-bordered textarea mb-6 w-full"
            placeholder=""
            {...register('content', { required: true })}
          ></textarea>
          <button type="submit" className="btn w-full">
            Button
          </button>
        </form>
      </Modal>
    </div>
  ) : (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner />
    </div>
  );
};

export default NewsList;
