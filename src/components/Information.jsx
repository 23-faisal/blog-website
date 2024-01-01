const Information = () => {
  const informationOfTheUser = [
    {
      id: 1,
      title: "Web Development For Clients And Market",
      imgURL:
        "https://1.bp.blogspot.com/-q5SpeAhVLM4/XyMqrMBh9nI/AAAAAAAACbg/3pPwkdtawSANMhsdUGcINwAX53pam5DVwCLcBGAsYHQ/s639/ify9.jpg",
    },
    {
      id: 2,
      title: "Brand Creation, Trend Analysis",
      imgURL:
        "https://1.bp.blogspot.com/-8eQ9qJXi9GM/XyMqeCnrHSI/AAAAAAAACbY/FHnfRxSju2AoqlXmK4Zk4uR2folu3gFPQCLcBGAsYHQ/s639/ify8.jpg",
    },
    {
      id: 3,
      title: "Product Promotion, Blog Advertising",
      imgURL:
        "https://1.bp.blogspot.com/-UN1RNmU4K1Q/XyMozreGyFI/AAAAAAAACas/auk7zvHyHt0JghO9XYVzhYdnZ3D2sUdrQCLcBGAsYHQ/s640/ify4.jpg",
    },
  ];
  return (
    <section className=" my-20">
      <div>
        <h1 className="font-titleFont text-4xl font-extrabold text-center my-10 text-gray-800">
          Find out more about what we do
        </h1>
        <p className="text-md text-center text-gray-500 font-bodyFont mb-10 ">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &#39;Content here, content here&#39;,
          making it look like readable English. Lorem Ipsum is simply dummy text
          of the printing and typesetting industry. Lorem Ipsum has been the
          industry&#39;s standard dummy text ever since. Lorem Ipsum is simply
          dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&#39;s standard dummy text ever since.
        </p>

        <div className="w-40 px-1 py-2   bg-teal-500 mx-auto text-white font-bodyFont text-center hover:bg-teal-600 transition duration-200 ease-in-out rounded-sm cursor-pointer">
          Learn Method
        </div>
      </div>

      <div className="my-24">
        <ul className="flex items-center gap-10">
          {informationOfTheUser.map((information) => (
            <div
              className="bg-white p-8 shadow-lg rounded-lg "
              key={information.id}
            >
              <div>
                <img className='rounded-sm' src={information.imgURL} alt="Phone" />
              </div>
              <div className="font-titleFont text-3xl h-[150px] font-semibold  mt-6">
                {information.title}
              </div>
              <button className=" mb-4 font-titleFont text-xl  px-4 py-2 bg-teal-400 font-semibold  text-white rounded-full hover:bg-teal-600">Contact</button>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Information;
