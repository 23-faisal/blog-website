const Services = () => {
  const services = [
    {
      id: "01",
      title: "App Design",
      body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
      imageURL:
        "https://blogger.googleusercontent.com/img/a/AVvXsEjGUVH8N8gNLdqPt1Q8UiG5-67bIkdOFl6c3aIQQCAYv1x1UxrHKkLXEOrPcW4T4Y9J0YiTv11Iv8_rCr26i_HG6k79al9N3BIHdU1R9S9VSsBKK8PzTrnXydnEeC2NHC_37ypUz7eENNl5Wy3D7CFrHm8AwcIgF2g_LzaGfQpK8Rynku0v_PVAL72zCg=s175",
    },
    {
      id: "02",
      title: "Web Design",
      body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
      imageURL:
        "https://blogger.googleusercontent.com/img/a/AVvXsEhjPDRqqxrrDFVqQlEpZcIeNT7UR4zP5v9vhWOkBxBl9sw5QGHZp8G60C6BtgoR4zPf7NQXLf4vbLWBzehG80OH8ZUDc4AstvEd9PZ2fjoSH0ovjQOW-X8nTqhICaEXXbpe-Aj1wadq7jUzIpQ43A8X8pLrq6wBTBMihTNRX825N1nBBtrHZPyvwkNwvA=s175",
    },
    {
      id: "03",
      title: "Web Development",
      body: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.",
      imageURL:
        "https://blogger.googleusercontent.com/img/a/AVvXsEhyzRx68Ows3PNpqPDyzYmtupb54Rw69IdR7hYY0KaA3vrhDIiojbJlbXrGJ9o_VNm4kRFn5mYBqeZnH8fDz83S3bg1sEa-zxtDznmvMJ1_aYrK3A2kxmEVYU1Q0wvg597KU27lbBFw41UYEvjH6KpULlKNYMYOr75LZJklSP569q8nIYU8CVpcZSWRdA=s175",
    },
  ];

  return (
    <div className=" pb-10">
      <div>
        <ul className="flex items-center py-10 gap-10 px-4">
          {services.map((service) => (
            <div
              className="bg-white  shadow-lg rounded-lg  py-12 relative"
              key={service.title}
            >
              <img
                className="h-20 w-20 mx-auto my-10 bg-gray-900 p-2 rounded-lg "
                src={service.imageURL}
                alt={service.title}
              />
              <h1 className="text-center font-titleFont  text-slate-700 text-2xl font-extrabold  ">
                {service.title}
              </h1>
              <p className="font-bodyFont text-center px-12 mt-6 leading-relaxed text-gray-500 mb-10">
                {service.body}
              </p>
              <h1 className="absolute font-bodyFont right-5 bottom-3 text-5xl text-gray-300  font-bold ">
                {" "}
                {service.id}{" "}
              </h1>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
