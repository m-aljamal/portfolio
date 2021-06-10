export default function Hero() {
  return (
    <div className=" hero mb-8 bg-yellow">
      <div className="container pt-40 pb-8 flex justify-between items-center">
        <div>
          <h2>Join us to build your product</h2>
          <p className="w-1/2">
            كن معنا وانضم إلى عالم الويب وابني موقعك لتكبر شهرتك وعلامتك
            التجارية عن طريق بناء موقع ويب متكامل بأحدث التقنيات الحديثة لبناء
            مواقع ويب احترافية.
          </p>
        </div>
        <p>Image</p>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-current text-white"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  );
}
