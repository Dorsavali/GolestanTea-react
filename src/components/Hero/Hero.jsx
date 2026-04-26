const Hero = () => {
  return (
    <div className="w-full h-[600px] bg-[linear-gradient(180deg,_#fbfbfb,_#d2d2d2)] flex justify-start ">
      <div className="w-2/5 h-full pt-7 flex justify-end items-center pr-2.5 box-border overflow-hidden z-10 animate-[slide-in 1s ease 0.5ms 1 normal forward">
        <img
          src="../../../public/images/banner.png"
          alt="banner"
          className="w-87.5 h-100"
        />
      </div>
      <div className="w-[41%] h-full flex justify-center box-border items-end flex-col gap-5 animate-[slide-in 1s ease 0.5ms 1 normal forwards]">
        <div className="w-[70%] flex flex-col justify-end items-start pt-17.5 box-border">
          <div className="w-full font-[iranSans] text-red-500 text-[30px] font-normal text-right mb-2.5 box-border pb-3">
            قرعه‌کشی مصرف‌کنندگان گلستان
          </div>
          <div className="w-full font-[iranSans] text-[#002021] text-[20px]  font-normal text-right">
            قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان
          </div>
        </div>
        <div
          dir="rtl"
          className=" w-[71%] font-[iranSans] text-[#898989] text-[16px] font-extralight text-right pt-5 pl-5 box-border leading-8"
        >
          ههر یک از مصرف‌کنندگان محصولات چای و چای کیسه‌ای گلستان می‌توانند با
          ارسال کد قرعه‌کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای
          گلستان شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی
          است.
        </div>
        <div className="w-full flex justify-end">
          <button className="flex justify-center items-center border-[0.8px] border-solid border-[#c8c8c8] rounded-lg py-3 px-6 box-border font-[iranSans] bg-white text-[#7c7d7e] text-[15px] font-normal cursor-pointer duration-500 hover:bg-red-500 hover:text-white">
            اطلاعات بیشتر
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
