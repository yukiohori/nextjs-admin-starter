import clsx from 'clsx';
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
    setValue,
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
      <div className="flex w-full items-center space-x-4 pl-4">
        <p>News List</p>
        <button
          onClick={() => {
            setValue('id', undefined);
            document.getElementById('modal')?.click();
          }}
        >
          <svg
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            className="h-8 w-8"
            fill="currentColor"
          >
            <g>
              <path
                d="M359.244,224.004h-59.988c-6.217,0-11.258-5.043-11.258-11.258v-59.992c0-6.215-5.039-11.254-11.256-11.254
		h-41.486c-6.217,0-11.258,5.039-11.258,11.254v59.992c0,6.215-5.039,11.258-11.256,11.258h-59.988
		c-6.219,0-11.258,5.039-11.258,11.258v41.484c0,6.215,5.039,11.258,11.258,11.258h59.988c6.217,0,11.256,5.039,11.256,11.258
		v59.984c0,6.219,5.041,11.258,11.258,11.258h41.486c6.217,0,11.256-5.039,11.256-11.258v-59.984
		c0-6.219,5.041-11.258,11.258-11.258h59.988c6.217,0,11.258-5.043,11.258-11.258v-41.484
		C370.502,229.043,365.461,224.004,359.244,224.004z"
              ></path>
              <path
                d="M256,0C114.613,0,0,114.617,0,256c0,141.387,114.613,256,256,256c141.383,0,256-114.613,256-256
		C512,114.617,397.383,0,256,0z M256,448c-105.871,0-192-86.129-192-192c0-105.867,86.129-192,192-192c105.867,0,192,86.133,192,192
		C448,361.871,361.867,448,256,448z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      <table className="mt-6 table w-full">
        <thead>
          <tr>
            <th className={clsx(selectedList.length && 'flex justify-center')}>
              {selectedList.length > 0 && (
                <button onClick={deleteNews}>
                  <svg
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <g>
                      <path
                        d="M94.296,463.359C95.853,490.118,119.045,512,145.837,512h60.43c26.792,0,70.646,0,97.439,0h60.431
		c26.792,0,49.992-21.882,51.55-48.641l17.746-306.165H76.542L94.296,463.359z"
                      ></path>
                      <path
                        d="M433.696,80.591c-5.446-2.34-52.875-19.6-124.124-26.059c0.009-0.322,0.026-0.634,0.026-0.948
		C309.589,23.983,285.597,0,256.004,0c-29.602,0-53.592,23.983-53.6,53.584c0,0.313,0.017,0.626,0.024,0.948
		C131.18,60.991,83.734,78.251,78.297,80.591c-9.491,4.07-10.851,9.491-10.851,17.63c0,5.43,0,35.278,0,35.278h377.108
		c0,0,0-29.849,0-35.278C444.554,90.082,443.195,84.661,433.696,80.591z M255.996,52.102c-7.909,0-15.612,0.173-23.142,0.47
		c0.56-12.326,10.685-22.154,23.15-22.17c12.457,0.016,22.583,9.844,23.143,22.17C271.616,52.274,263.913,52.102,255.996,52.102z"
                      ></path>
                    </g>
                  </svg>
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
                  className="checkbox-primary checkbox"
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
                  <svg
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    className="h-4 w-4"
                    fill="currentColor"
                  >
                    <g>
                      <path
                        d="M165.628,461.127c0,0,0.827-0.828,1.838-1.839l194.742-194.742c1.012-1.011,1.92-1.92,2.019-2.019
		c0.099-0.099,1.008-1.008,2.019-2.019l103.182-103.182c0.018-0.018,0.018-0.048,0-0.067L354.259,42.092
		c-0.018-0.018-0.048-0.018-0.067,0L251.01,145.274c-1.011,1.011-1.92,1.92-2.019,2.019c-0.099,0.099-1.008,1.008-2.019,2.019
		L50.401,345.884c-0.006,0.006-0.01,0.012-0.012,0.02L0.002,511.459c-0.011,0.036,0.023,0.07,0.059,0.059l163.079-49.633
		C164.508,461.468,165.628,461.127,165.628,461.127z M36.734,474.727l25.159-82.666c0.01-0.034,0.053-0.045,0.078-0.02
		l57.507,57.507c0.025,0.025,0.014,0.068-0.02,0.078l-82.666,25.16C36.756,474.797,36.722,474.764,36.734,474.727z"
                      ></path>
                      <path
                        d="M502.398,104.432c12.803-12.804,12.803-33.754,0-46.558l-47.791-47.792c-12.804-12.803-33.754-12.803-46.558,0
		l-23.862,23.862c-0.018,0.018-0.018,0.048,0,0.067l94.282,94.282c0.018,0.018,0.048,0.018,0.067,0L502.398,104.432z"
                      ></path>
                    </g>
                  </svg>
                </button>
              </td>
              <td className="w-10">
                {lightFormat(new Date(news.created_at), 'yyyy-MM-dd')}
              </td>
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
          <input type="hidden" {...register('id')} />
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
