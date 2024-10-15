import { Suspense } from 'react';
import { Nina } from './models/Nina';
export const Experience = ({ client }) => {
  return (
    <>
      <Suspense>
        <Nina client={client} />
      </Suspense>
    </>
  );
};
