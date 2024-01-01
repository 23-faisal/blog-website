const Review = () => {
  return (
    <div className="relative">
      <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
        <h3 className="mb-6 text-3xl font-bold text-gray-800 ">
          What Client Say
        </h3>
        <p className="mb-6 pb-2 font-bodyFont text-md  text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
      </div>

      {/* Testimonials */}
      <div className="grid gap-6 text-center md:grid-cols-3 lg:gap-12 my-20">
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>

          <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
            Web Developer
          </h6>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
        </div>
        {/* Second  */}

        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
            Web Developer
          </h6>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
        </div>

        {/* Four */}
        <div className="mb-12 md:mb-0">
          <div className="mb-6 flex justify-center">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).jpg"
              className="w-32 rounded-full shadow-lg dark:shadow-black/30"
            />
          </div>
          <h5 className="mb-4 text-xl font-semibold">Maria Smantha</h5>
          <h6 className="mb-4 font-semibold text-primary dark:text-primary-500">
            Web Developer
          </h6>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
            id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
          </p>
        </div>
        {/*  End*/}
      </div>
    </div>
  );
};

export default Review;
