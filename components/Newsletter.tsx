import React, { useState } from "react";

const Newsletter = () => {
  const [state, setState] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  // 0 - initial , 1 - loading, 2 - success, 3 - error

  const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState(1);
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: email,
      });

      const data = await res.json();
      if (data.error !== null) {
        throw data.error;
      }
      setState(2);
    } catch (err: any) {
      setErrorMsg(err?.message || "Something went wrong");
      setState(3);
    }
  };

  return (
    <section className="text-primary bg-[#F4F4F4] px-4 py-10 flex flex-col justify-center items-center">
      <div className="max-w-7xl flex justify-between w-full md:items-center flex-col md:flex-row space-y-5 px-4">
        <div>
          <h1 className="text-[33px]">Subscribe to newsletter</h1>
          <p className="text-[16px] md:text-[20px]">Get the latest news and offers</p>
        </div>
        <div>
          {state === 2 ? (
            <p className="font-medium mt-4 text-xl text-green-800">Thanks for subscribing!</p>
          ) : (
            <form
              className="md:flex md:flex-row md:items-center md:space-x-2 space-y-3 md:space-y-0"
              onSubmit={subscribe}
            >
              <input
                type="email"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full px-4 py-3"
                placeholder="Your e-mail address"
                onChange={(event) => setEmail(event.target.value)}
                required
                value={email}
              />
              <button
                className="bg-secondary hover:bg-[#9c9260] text-white px-4 py-3 rounded-md md:w-1/3 w-full md:px-4"
                type="submit"
              >
                Subscribe
              </button>
              {state === 3 && (
                <p className="text-red-500 mt-3">{errorMsg}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
