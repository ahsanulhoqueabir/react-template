import cn from "../utilities/cn";

const Button = ({ children, className, ...restProps }) => {
  return (
    <button
      className={cn(
        "text-xl w-fit py-2 px-5 bg-sky-500 text-white relative overflow-hidden group z-10 hover:text-white duration-1000 rounded",
        className,
        {
          // you can use conditional className here
        }
      )}
      {...restProps}
    >
      <span className="absolute bg-sky-600 w-36 h-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
      <span className="absolute bg-sky-800 w-36 h-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
      {children}
    </button>
  );
};

export default Button;
