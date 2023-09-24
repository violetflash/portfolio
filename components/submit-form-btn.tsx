// @flow
import { cn } from '@/utils/cn';
import * as React from 'react';
import { experimental_useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

type Props = {

};
export const SubmitFormBtn = (props: Props) => {
  const { pending } = experimental_useFormStatus();


  return (
    <button
      type="submit"
      className={cn(
        'group flex items-center justify-center gap-2 h-[3rem] w-[8rem]',
        'app-button bg-gray-900 text-white',
        'disabled:scale-100 disabled:bg-opacity-65',
        'app-button-primary'
      )}
      disabled={pending}
    >
      {pending
        ? <div className="h-5 w-5 rounded-full animate-spin border-b-2 border-white"></div>
        : (
          <>
            Submit
            <FaPaperPlane
              className={cn('text-xs opacity-70', 'group-hover:-translate-y-1 group-hover:translate-x-1' +
                ' transition'
              )} />
          </>
        )
      }

    </button>
  );
};