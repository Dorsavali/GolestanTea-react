const Footer = () => {
  const footerData = [
    {
      title: "حبوبات گلستان",
      image: "../../../public/images/footer/footer1.png",
      items: [
        "لوبیا قرمز ممتاز",
        "لوبیا چیتی گلستان",
        "عدس کانادایی",
        "نخود زودپز کرمانشاه",
        "لوبیا سفید گلستان",
      ],
    },
    {
      title: "ادویه گلستان",
      image: "../../../public/images/footer/footer2.png",
      items: [
        "زعفران ممتاز خراسان",
        "ادویه کاری",
        "ادویه ماست و خیار",
        "فلفل سیاه خالص",
        "زردچوبه ممتاز",
      ],
    },
    {
      title: "تی بگ گلستان",
      image: "../../../public/images/footer/footer3.png",
      items: [
        "تی بگ بلک لاین",
        "تی بگ ارل گری",
        "دمنوش نعنا",
        "دمنوش بابونه",
        "دمنوش چای سبز",
      ],
    },
    {
      title: "چای گلستان",
      image: "../../../public/images/footer/footer4.png",
      items: [
        "چای ممتاز هندوستان",
        "چای ممتاز ارل گری",
        "چای سیلان عطری",
        "چای ممتاز سیلان",
        "چای صبحانه گلستان",
      ],
    },
  ];

  return (
    <footer className="w-full h-[70vh] bg-fixed  bg-[url('../../../public/images/footer/footerBg.png')]">
      <div className="w-full h-full flex flex-col justify-evenly items-center">
        <div className="w-[43%] h-[75%] flex justify-between items-center">
          {footerData.map((section, index) => (
            <div
              key={index}
              className="w-[23%] h-full flex flex-col justify-end items-center gap-[15px]"
            >
              <div className="w-full flex justify-center items-center">
                <img src={section.image} alt="footer" />
              </div>
              <div className="w-full text-center font-[IranSans] text-[16px] font-light text-white py-[10px] border-t border-b border-[#b4b4b4]">
                {section.title}
              </div>

              <div className="w-full">
                <ul className="flex flex-col items-center" dir="rtl">
                  {section.items.map((item, index) => (
                    <li
                      key={index}
                      className="w-full mb-[8px] p-[5px] transition-all duration-500 hover:text-white"
                    >
                      <a
                        href="#"
                        className="text-[13px] text-[#bcbec0] font-[IranSans] no-underline hover:text-white"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[40%] h-[25%] flex flex-col justify-center items-center">
          <div className="text-[#9f9f9f] font-Lato text-[15px] font-normal">
            All Right Reserved Golestan Company 2022-2025
          </div>

          <div className="text-[#7b7b7b] font-Lato text-[14px] font-normal">
            Design By: Golestan Studio
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
