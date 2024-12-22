const Upload = ({
  name,
  accept = "*",
  margin = "my-2",
  textSize = "text-base",
  ...props
}) => {
  return (
    <div className={`w-full ${margin}`}>
      <input
        type="file"
        name={name}
        id={name}
        accept={accept}
        className={`p-2 rounded-md w-full text-white bg-white/10
      backdrop-blur-lg
      border border-white/40`}
        {...props}
      />
    </div>
  );
};

export default Upload;
