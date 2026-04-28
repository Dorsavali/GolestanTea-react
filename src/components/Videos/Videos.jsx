const Videos = () => {
  const data = [
    {
      vidSrc: "../../../public/videos/products.mp4",
      title: "برنج گلستان",
      description:
        "عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان گلستان؛‌ لایق بهترین ها هستند.",
      btn: "مشاهده محصولات",
    },
    {
      vidSrc: "../../../public/Videos/hot-noodle.mp4",
      title: "اینستاگرام هاتی نودل",
      description:
        "نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای سالم و كاملی ساخته است.",
      btn: "ادامه مطلب",
    },
    {
      vidSrc: "../../../public/videos/noodle-salad.mp4",
      title: "سالاد نودل",
      description:
        "نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت ببرید.",
      btn: "ویدیوهای بیشتر",
    },
  ];
  return (
    <div className="w-full h-[69vh] flex justify-center items-center py-10">
      <div className="w-[65%] grid grid-cols-3 gap-x-[15px]">
        {data.map((item, index) => (
          <div
            className="w-full flex flex-col items-center gap-5 border-[0.6px] border-[#dadada] shadow-[-3px_3px_7px_rgba(0,0,0,0.2)]"
            key={index}
          >
            <div className="w-full h-[175px]">
              <video
                src={item.vidSrc}
                controls
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full px-5 text-right font-iran text-[17px] font-[iranSans] font-bold text-red-600">
              {item.title}
            </div>
            <div className="w-full px-5 text-justify text-right leading-8 text-[#7c7d7e] font-[iranSans] text-sm font-light">
              {item.description}
            </div>
            <div className="w-full flex justify-end px-[22px] pb-5">
              <button className="flex justify-center items-center border border-[#c8c8c8] font-[iranSans] rounded-lg py-2 px-[14px] bg-white text-[#7c7d7e] text-[15px] font-normal cursor-pointer transition-all duration-500 hover:bg-red-600 hover:text-white">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
