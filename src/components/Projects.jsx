const Projects = () => {
  return (
    <div>
      <div className="pt-20">
        <h1 className="font-titleFont font-bold text-4xl text-center ">
          Our Projects
        </h1>
        <p className="font-bodyFont text-gray-600 text-center mt-6 mb-16">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using &#39;Content here, content here&#39;.
          Lorem Ipsum has been the industry&#39;s standard dummy text ever
          since.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-10 mb-20">
        <div className="w-full p-6 bg-white shadow-lg rounded-lg cursor-pointer">
          <img
            className="rounded-md "
            src="https://2.bp.blogspot.com/-OM2dgj5zux8/Utev9owPluI/AAAAAAAABOA/Q4wJayfTV-s/w363-h220-p-k-no-nu/08_blog.jpg"
            alt="Blog Image"
          />
          <h1 className="font-titleFont text-3xl mt-8 mb-6 ">
            Lyric Hearing Aid Problems
          </h1>
        </div>
        <div className="w-full p-6 bg-white shadow-lg rounded-lg cursor-pointer">
          <img
            className="rounded-md "
            src="https://4.bp.blogspot.com/-vTx2-7hvWkw/UteveCcRSiI/AAAAAAAABNw/vkNUH3LJlZE/w363-h220-p-k-no-nu/06_blog.jpg"
            alt="Blog Image"
          />
          <h1 className="font-titleFont text-3xl mt-8 mb-6 ">
            Lyric Hearing Aid Problems
          </h1>
        </div>
        <div className="w-full p-6 bg-white shadow-lg rounded-lg cursor-pointer">
          <img
            className="rounded-md "
            src="https://2.bp.blogspot.com/-mDI-77OdwYY/UtewKebsbaI/AAAAAAAABOI/BdmQBdzehrc/w363-h220-p-k-no-nu/09_blog.jpg"
            alt="Blog Image"
          />
          <h1 className="font-titleFont text-3xl mt-8 mb-6 ">
            Lyric Hearing Aid Problems
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
