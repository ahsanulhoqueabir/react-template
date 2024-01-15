
const LoadingPage = () => {
    return (
        <div className="flex justify-center h-[calc(100vh-72px)] items-center">
            <div className="flex text-2xl lg:text-8xl items-baseline gap-1 ">
                <p>L</p>
                <div className=" h-5 w-5 lg:h-16 lg:w-16 border-blue-500 animate-spin rounded-full border-2 lg:border-8 border-dashed"></div>
                <p>ading....</p>
            </div>
        </div>
    );
};

export default LoadingPage;