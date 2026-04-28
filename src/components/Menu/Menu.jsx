const Menu = () => {
  return (
    <header
      className="w-full h-[100px] box-border bg-[#262626] fixed z-50 " >
      <nav className="w-full h-full flex flex-row-reverse box-border justify-end relative ">
        <img src="../../../public/images/logo.png" alt="logo" className="absolute top-5/12 left-[71%]"/>
        <ul className="w-[70%] h-full pt-5 box-border list-none flex gap-7 items-center flex-row-reverse">
          <li className="w-fit h-5    box-border flex justify-center items-center">
            <a href="#"  className=" font-[iranSans] border-l-[0.9px] border-solid border-[#4d4d52] box-border text-white text-base font-normal hover:text-white pl-2.5 flex flex-row-reverse">
              صفحه اصلی
              
            </a>
          </li>
          <li className="w-fit h-5 flex justify-center items-center group
          ">
            <a href="#" className="font-[iranSans] border-l-[0.9px] border-solid border-[#4d4d52] box-border text-base font-normal hover:text-white pl-2.5 flex flex-row-reverse text-[#afb2b4] ">شرکت گلستان
            <img src="../../../public/images/arrow.svg" alt="arrowdown" />
            </a>
            <div  className="w-fit bg-[#2d2d2d] py-5 absolute top-[75%] duration-500 box-border p-3.5 invisible  
      group-hover:visible 
       duration-300">
              <ul className="w-fit list-none flex flex-col items-start justify-start gap-5" >
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">معرفی شرکت</a>
                </li>
                <li className="w-full relative pr-2.5 ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans]">تاریخچه گلستان</a>
                </li>
                <li className="w-full relative pr-2.5 ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans]">اخبار و اطلاعیه ها</a>
                </li>
                <li className="w-full relative pr-2.5 ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans]">مسوئیلت های اجتماعی</a>
                </li>
                <li className="w-full relative pr-2.5 ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans]">سازمان فروش</a>
                </li>
                <li className="w-full relative pr-2.5 ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans]">سازمان توزیع</a>
                </li>
                <li className="w-full relative pr-2.5 ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans]">برندها</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-fit h-5 flex justify-center items-center group
          ">
            <a href="#" className="font-[iranSans] border-l-[0.9px] border-solid border-[#4d4d52] box-border text-base font-normal hover:text-white pl-2.5 flex flex-row-reverse text-[#afb2b4]"> محصولات
            <img src="../../../public/images/arrow.svg" alt="arrowdown" />
            </a>
            <div  className="invisible  
      group-hover:visible 
       duration-300 w-fit bg-[#2d2d2d] py-5 absolute top-[75%] duration-500 box-border p-3.5 " >
              <ul className="w-fit list-none flex flex-col items-start justify-start gap-5">
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">چای</a>
                </li>
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4]transition-all duration-300 hover:text-white font-[iranSans] ">ناتس</a>
                </li>
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">ادویه و چاشنی</a>
                </li>
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">برنج</a>
                </li>
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">زعفران و زرشک</a>
                </li>
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">دمنوش</a>
                </li>
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">حبوبات و غلات</a>
                </li>
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">عصاره های گیاهی</a>
                </li>
                <li className="w-full relative ">
                  <a href="#"className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">قند و شکر</a>
                </li>
                <li className="w-full relative ">
                  <a href="#"className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">هاتی نودل</a>
                </li>
                <li className="w-full relative ">
                  <a href="#"className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">سایر محصولات</a>
                </li>
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 transition-all duration-300 hover:text-white font-[iranSans] ">گل کیس</a>
                </li>
              </ul>
            </div>
          </li >
          <li className="w-fit h-5 flex justify-center items-center group 
          ">
            <a href="#"className="font-[iranSans] border-l-[0.9px] border-solid border-[#4d4d52] box-border text-base transition-all duration-300 font-normal hover:text-white pl-2.5 flex flex-row-reverse text-[#afb2b4] "> وبلاگ
            <img src="../../../public/images/arrow.svg" alt="arrowdown" />
            </a>
            <div className="invisible  
      group-hover:visible  w-fit bg-[#2d2d2d] py-5 absolute top-[75%] duration-500 box-border p-3.5 ">
              <ul className="w-fit list-none flex flex-col items-start justify-start gap-5">
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">مجله گلستان</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="w-fit h-5 flex justify-center items-center 
          ">
            <a href="#" className="font-[iranSans] border-l-[0.9px] border-solid border-[#4d4d52] box-border text-base font-normal hover:text-white pl-4 flex flex-row-reverse text-[#afb2b4]"> قرعه‌ کشی</a>
          </li>
          <li className="w-fit h-5 flex justify-center items-center 
          ">
            <a href="#" className="font-[iranSans] border-l-[0.9px] border-solid border-[#4d4d52] box-border text-base font-normal hover:text-white pl-4 flex flex-row-reverse text-[#afb2b4]"> استخدام</a>
          </li>
          <li className="w-fit h-5 flex justify-center items-center group
          ">
            <a href="#" className="font-[iranSans] border-l-[0.9px] border-solid border-[#4d4d52] box-border text-base font-normal hover:text-white pl-2.5 flex flex-row-reverse text-[#afb2b4]"> تماس با ما
            <img src="../../../public/images/arrow.svg" alt="arrowdown" />
            </a>
            <div className="invisible  
      group-hover:visible 
       duration-300 w-fit bg-[#2d2d2d] py-5 absolute top-[75%] duration-500 box-border p-3.5 ">
              <ul className="w-fit list-none flex flex-col items-start justify-start gap-5">
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">دفتر مرکزی</a>
                </li>
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">صدای مصرف کنندگان</a>
                </li>
                <li className="w-full relative ">
                  <a href="#" className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans] ">ارتباط با مشترکین</a>
                </li>
              </ul>
            </div>
          </li>
          <li  className="w-fit h-5 flex justify-center items-center 
          ">
            <a href="#" className="font-sans text-[#afb2b4] transition-all duration-300 hover:text-white">
              {" "}
              EN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
