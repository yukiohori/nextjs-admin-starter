import clsx from 'clsx';
import { lightFormat } from 'date-fns';
import { useForm } from 'react-hook-form';
import { useEffectOnce } from 'react-use';

import AddIcon from '@/components/atoms/Icon/AddIcon';
import EditIcon from '@/components/atoms/Icon/EditIcon';
import TrashIcon from '@/components/atoms/Icon/TrashIcon';
import Modal from '@/components/atoms/Modal';
import Spinner from '@/components/atoms/Spinner';
import ConfirmModal from '@/components/molecules/ConfirmModal';
import useNews from '@/hooks/useNews';
import { NewsFormType } from '@/types/NewsType';

const NewsList = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    resetField,
  } = useForm<NewsFormType>();
  const {
    newsList,
    selectedList,
    pagination,
    paginationPage,
    selectDeleteNews,
    fetchNewsList,
    deleteNews,
    upsertNews,
    onChangePagination,
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
      <p className="text-center text-2xl">News List</p>
      <div className="flex w-full items-center space-x-4 pl-4">
        <button
          onClick={() => {
            setValue('id', undefined);
            resetField('title');
            resetField('content');
            document.getElementById('modal')?.click();
          }}
        >
          <AddIcon />
        </button>
      </div>
      <table className="mt-6 table w-full">
        <thead>
          <tr>
            <th className={clsx(selectedList.length && 'flex justify-center')}>
              {selectedList.length > 0 && (
                <button
                  onClick={() =>
                    document.getElementById('confirmModal')?.click()
                  }
                >
                  <TrashIcon />
                </button>
              )}
            </th>
            <th>EDIT</th>
            <th>CREATED</th>
            <th>TITLE</th>
            <th>CONTENT</th>
          </tr>
        </thead>
        <tbody>
          {newsList.map((news) => (
            <tr key={news.id}>
              <td className="w-10 text-center">
                <input
                  type="checkbox"
                  checked={selectedList.includes(news.id)}
                  className="checkbox"
                  onChange={() => selectDeleteNews(news.id)}
                />
              </td>
              <td className="w-10 text-center">
                <button
                  onClick={() => {
                    setValue('id', news.id);
                    setValue('title', news.title);
                    setValue('content', news.content);
                    document.getElementById('modal')?.click();
                  }}
                >
                  <EditIcon />
                </button>
              </td>
              <td className="w-10">
                {lightFormat(new Date(news.created_at), 'yyyy-MM-dd')}
              </td>
              <td>{news.title}</td>
              <td className="whitespace-pre-wrap">{news.content}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {paginationPage > 0 && (
        <div className="mt-6 flex items-center justify-center">
          <div className="btn-group">
            {Array.from(Array(paginationPage).keys()).map((index) => (
              <button
                key={index}
                onClick={() => onChangePagination(index)}
                className={clsx(
                  'btn btn-sm',
                  pagination === index && 'btn-active'
                )}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      <Modal modalId="modal">
        <h3 className="mb-4">ADD NOTIFICATION</h3>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register('id')} />
          <label className="label">
            <span className="label-text">Title*</span>
            {errors.title && (
              <span className="label-text-alt text-sm text-red-500">
                This field is required
              </span>
            )}
          </label>
          <input
            type="text"
            placeholder="Title"
            className="input-bordered input mb-2 w-full"
            {...register('title', { required: true })}
          />
          <label className="label">
            <span className="label-text">Content*</span>
            {errors.content && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </label>
          <textarea
            className="textarea-bordered textarea mb-6 w-full"
            placeholder="Content"
            {...register('content', { required: true })}
          ></textarea>
          <button type="submit" className="btn w-full">
            Save
          </button>
        </form>
      </Modal>

      <ConfirmModal
        modalId="confirmModal"
        option={
          <div className="flex w-full flex-col items-center justify-between space-y-4">
            <button
              onClick={() => document.getElementById('confirmModal')?.click()}
              className="btn w-full"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                document.getElementById('confirmModal')?.click();
                deleteNews();
              }}
              className="btn w-full"
            >
              Yes
            </button>
          </div>
        }
      >
        <p>Are you sure to delete?</p>
      </ConfirmModal>
    </div>
  ) : (
    <div className="flex h-full w-full items-center justify-center">
      <Spinner />
    </div>
  );
};

export default NewsList;
