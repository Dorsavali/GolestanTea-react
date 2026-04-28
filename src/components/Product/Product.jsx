const Product = () => {
  const data = [
    {
      imgSrc: "../../../public/images/products/product1.jpg",
      title: "برنج گلستان",
      description: "معرفی محصول",
      productTitle: "رکن اول غذای ایرانی",
      ProductText:
        "مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.",
      buttonText: {
        btn1: "آشپزخانه گلستان",
        btn2: "محصولات برنج",
      },
    },
    {
      imgSrc: "../../../public/images/products/product2.jpg",
      title: "چای گلستان",
      description: "معرفی محصول",
      productTitle: "سابقه‌ای به قدمت یک عمر",
      ProductText:
        "چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌ حس خوب آرامش را به همراه دارد.برای مردمان ایران زمین نام گلستان با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند، كیفیت، ‌عطر و طعم به یادماندنی آن است.",
      buttonText: {
        btn1: "محصولات چای",
      },
    },
    {
      imgSrc: "../../../public/images/products/product3.jpg",
      title: "پسته گلستان",
      description: "معرفی محصول",
      productTitle: "آجيل‌های خوش خنده",
      ProductText:
        "خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.پسته گلستان اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان می‌آورد.",
      buttonText: {
        btn1: " ناتس گلستان",
      },
    },
  ];
  return (
    <div>
      {data.map((item, index) => {
        return (
          <div key={index} className="w-full py-5 box-border">
            <div className=" w-full flex justify-center items-center flex-col pt-5 box-border">
              <div className="w-full relative">
                <img
                  src={item.imgSrc}
                  alt="product"
                  className="w-full h-[71vh] object-cover border-b-21 border-solid border-[#e9d69f]"
                />
                <div className="w-fit bg-[#ed1c24] flex flex-col justify-center items-end py-[16.5px] pr-8 pl-30 box-border absolute top-[81%] left-[60%] gap-1.5">
                  <div className="font-[iranSans] text-3xl font-extralight text-white">
                    {item.title}
                  </div>
                  <div className="font-[iranSans] text-base font-normal text-white">
                    {item.description}
                  </div>
                </div>
              </div>
              <div className="w-full border-solid border-b-[1px]  border-[#d2d2d2] p-2.5 box-border "></div>
              <div className="pt-7.5 box-border w-[46%] flex flex-col justify-center items-center gap-2.5 ">
                <div className="w-full font-[iranSans] font-bold text-[20px] leading-10 text-right text-[#ed1c24] mb-1.5">
                  {item.productTitle}
                </div>
                <div
                  className=" font-[iranSans] font-normal text-[15px] leading-10 text-justify text-[#818588]"
                  dir="rtl"
                >
                  {item.ProductText}
                </div>
                <div className="w-full pt-10 box-border flex justify-end gap-2.5 items-center">
                  {item.buttonText.btn1 && (
                    <button className="flex justify-center items-center border-[0.8px] border-solid border-[#c8c8c8] rounded-lg py-2 px-3.5 box-border font-[iranSans] bg-white text-[#7c7d7e] text-[15px] font-normal cursor-pointer transition-all duration-500 hover:bg-[#ed1c24] hover:text-white">
                      {item.buttonText.btn1}
                    </button>
                  )}

                  {item.buttonText.btn2 && (
                    <button className="flex justify-center items-center border-[0.8px] border-solid border-[#c8c8c8] rounded-lg py-2 px-3.5 box-border font-[iranSans] bg-white text-[#7c7d7e] text-[15px] font-normal cursor-pointer transition-all duration-500 hover:bg-[#ed1c24] hover:text-white">
                      {item.buttonText.btn2}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
