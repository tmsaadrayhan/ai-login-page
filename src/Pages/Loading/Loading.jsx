import img1 from "../../assets/loading.svg";

const Loading = () => {
  return (
    <div>
      <div className="w-full">
        <img className="mx-auto" src={img1} alt="" />
      </div>

      <p className="text-center">Loading......</p>
    </div>
  );
};

export default Loading;
