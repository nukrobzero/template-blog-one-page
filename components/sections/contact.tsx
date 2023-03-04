import { useState } from "react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      tel,
    };

    if (!name || !email || !tel) {
      alert("Input fields cannot be empty!");
      return;
    }

    console.log(formData);
  };

  return (
    <>
      <section className="bg-lime-400 h-screen" id="contact">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-screen">
            <h1 className="text-4xl text-center mb-8 md:mb-12">Contacts</h1>
            <form className="mx-auto max-w-md w-96" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="block w-full bg-gray-100 border-transparent rounded-lg py-3 px-4 placeholder-gray-400 text-gray-900 focus:outline-none focus:bg-white focus:ring-0"
                  placeholder="Your name"
                  value={name}
                  onChange={({ target }) => setName(target?.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full bg-gray-100 border-transparent rounded-lg py-3 px-4 placeholder-gray-400 text-gray-900 focus:outline-none focus:bg-white focus:ring-0"
                  placeholder="Your email address"
                  value={email}
                  onChange={({ target }) => setEmail(target?.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="block w-full bg-gray-100 border-transparent rounded-lg py-3 px-4 placeholder-gray-400 text-gray-900 focus:outline-none focus:bg-white focus:ring-0"
                  placeholder="Your phone number"
                  value={tel}
                  onChange={({ target }) => setTel(target?.value)}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
