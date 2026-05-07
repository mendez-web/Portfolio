const Button = ({ className = "", size = "default", children, ...props }) => {
  const baseClasses =
    "relative overflow-hidden border-4 border-black cursor-pointer rounded-full uppercase  border-border shadow-[4px_4px_0px_0px_rgba(30,41,59,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(30,41,59,1)] transition-all ";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]}  ${className}`;
  return (
    <button className={classes} type="button" {...props}>
      <span className="relative flex items-center justify-center gap-2 font-bold hover:font-bold ">
        {children}
      </span>
    </button>
  );
};

export default Button;
