const Responsibility = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center pt-[100px]">
      <div className="w-[46%] flex flex-col justify-center p-[10px] box-border">
        <div className="font-[IranSans] text-[20px] font-bold text-red-600 text-right mb-[5px]">
          مسئوليت‌های اجتماعی گلستان
        </div>
        <div className="w-full h-full flex flex-col justify-start items-center  gap-8">
          <div className="font-[IranSans] font-normal text-[16px] leading-[2.5] text-justify  text-[#818588]" dir="rtl">
            آنچه که امروز با نام مجموعه كسب‌وكارها اجزای قدرتمند جامعه به شمار
            می‌آیند و موفق‌ترین، قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی
            هستند كه كاری فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا
            از تجربه و امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده
            كنند.
            <h3 className="inline-block font-semibold text-[16px] text-red-600 pl-[2px]">
               گلستان
            </h3>
            در فعالیت‌های‌ اجتماعی خود،‌ گسترده وسیعی از فعالیت‌های عام‌المنفعه
            را در دستوركار خود قرار داده است.
          </div>
          <div className="w-full flex justify-end px-[22px] pb-5">
            <button className="flex justify-center items-center border border-[#c8c8c8] rounded-lg py-2 px-[14px] bg-white text-[#7c7d7e] text-[15px] font-normal font-[IranSans] cursor-pointer transition-all duration-500 hover:bg-red-600 hover:text-white">
              اطلاعات بیشتر
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Responsibility;
