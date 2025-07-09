import React from "react";
import { LoaderCircle } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <LoaderCircle className="animate-spin text-blue-500" size={48} />
      <h1 className="text-2xl font-bold mt-4">Loading...</h1>
      <p className="text-lg">Please wait while we load the content.</p>
    </div>
  );
};

export default Loading;