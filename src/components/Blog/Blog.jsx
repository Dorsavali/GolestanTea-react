const Blog = () => {
  const data = [
    {
      imgSrc: "../../../public/images/recepie/food.jpg",
      titleRecepie: "چیلاکیله",
      descriptionRecepie:
        "احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از فهرست",
    },
    {
      imgSrc: "../../../public/images/recepie/food2.jpg",
      titleRecepie: "سوپ مکزیکی",
      descriptionRecepie:
        "گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع آن بیرون آورده…",
    },
    {
      imgSrc: "../../../public/images/recepie/food3.jpg",
      titleRecepie: "ماکارونی با سبزیجات",
      descriptionRecepie:
        "ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌ می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌ روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…",
    },
  ];
  return (
    <div>
      <div className="w-full h-[115vh] flex justify-center items-center pt-10 box-border">
        <div className="w-full h-full flex flex-col">
          <div className="w-[82%] font-[iranSans] text-xl font-bold text-right pb-10 box-border text-[#ed1c24]">
            مجله گلستان
          </div>
          <div className="w-full h-full bg-[#cde4b0] flex justify-center items-center">
            <div className="w-fit grid grid-cols-3 grid-rows-1 gap-x-[10px] gap-y-0">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-[320px] bg-white flex flex-col justify-between  items-center shadow-[-3px_3px_7px_rgba(0,0,0,0.2)] box-border"
                  >
                    <div className="w-full h-[320px] pb-5 box-border">
                      <img
                        src={item.imgSrc}
                        alt="food"
                        className="w-full h-full object-cover hover:opacity-[0.8]"
                      />
                    </div>
                    <div className="w-full text-right px-5 pb-5 box-border font-[iranSans] text-xl font-extralight text-[#ed1c24]">
                      {item.titleRecepie}
                    </div>
                    <div
                      dir="rtl"
                      className="w-full text-right px-5 box-border font-[iranSans] pb-5 text-sm leading-8 font-extralight text-[#7c7d7e]"
                    >
                      {item.descriptionRecepie}
                    </div>
                    <div className="w-full flex justify-end px-[22px] pb-[20px] pt-0 box-border">
                      <button className="flex justify-center items-center border border-[#c8c8c8] border-[0.8px] text-[#7c7d7e] rounded-lg py-2 px-[14px] box-border no-underline font-[iranSans] hover:bg-[#ed1c24] hover:text-white">
                        ادامه مطالب
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
