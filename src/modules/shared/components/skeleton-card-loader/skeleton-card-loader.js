const SkeletonCardLoader = () => {
    return (
        <div className="border rounded-md p-4 max-w-xs w-full">
        <div className="animate-pulse flex flex-col">
          <div className="rounded bg-gray-300 w-full h-40 mb-4"></div>
          <div className="flex-1 space-y-6 ">
            <div className="h-2 bg-gray-300 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-gray-300 rounded col-span-2"></div>
                <div className="h-2 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div className="h-2 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>  
    );
};

export default SkeletonCardLoader;