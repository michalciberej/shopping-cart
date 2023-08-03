import Navbar from "./Navbar";

const Error = () => {
  return (
    <div>
      <Navbar />
      <div className="container text-center ">
        <h1 className="text-4xl font-bold mb-8">Oops!</h1>
        <span className="block mb-12 text-xl">
          Sorry, an unexpected error has occoured.
        </span>
      </div>
    </div>
  );
};

export default Error;
