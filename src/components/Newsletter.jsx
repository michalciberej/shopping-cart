const Newsletter = () => {
  return (
    <div className="mb-24 shadow-md text-textD bg-accent dark:bg-accentD p-8 rounded-xl relative z-10">
      <form
        action="#"
        method="#"
        className="justify-between items-center flex flex-col lg:flex-row"
      >
        <span className="text-xl text-center sm-text-left">
          Sign to our newsletter to be notified when we have something new.
        </span>
        <section className="flex justify-between items-center gap-8">
          <input
            type="email"
            placeholder="john.doe@email.com"
            className="py-2 px-8 rounded-xl"
          />
          <button
            type="submit"
            className="px-8 py-1 text-xl bg-secondaryD rounded-md border-2 border-secondaryD hover:bg-accentD hover:text-text transition-colors"
          >
            Sign up
          </button>
        </section>
      </form>
    </div>
  );
};

export default Newsletter;
