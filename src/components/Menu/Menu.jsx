const Menu = () => {
  const menuItems = [
    {
      title: "صفحه اصلی",
      link: "#",
    },
    {
      title: "شرکت گلستان",
      link: "#",
      dropdown: [
        "معرفی شرکت",
        "تاریخچه گلستان",
        "اخبار و اطلاعیه ها",
        "مسوئیلت های اجتماعی",
        "سازمان فروش",
        "سازمان توزیع",
        "برندها",
      ],
    },
    {
      title: "محصولات",
      link: "#",
      dropdown: [
        "چای",
        "ناتس",
        "ادویه و چاشنی",
        "برنج",
        "زعفران و زرشک",
        "دمنوش",
        "حبوبات و غلات",
        "عصاره های گیاهی",
        "قند و شکر",
        "هاتی نودل",
        "سایر محصولات",
        "گل کیس",
      ],
    },
    {
      title: "وبلاگ",
      link: "#",
      dropdown: ["مجله گلستان"],
    },
    {
      title: "قرعه‌ کشی",
      link: "#",
    },
    {
      title: "استخدام",
      link: "#",
    },
    {
      title: "تماس با ما",
      link: "#",
      dropdown: ["دفتر مرکزی", "صدای مصرف کنندگان", "ارتباط با مشترکین"],
    },
  ];
  return (
    <header className="w-full h-[100px] box-border bg-[#262626] fixed z-50">
      <nav className="w-full h-full flex flex-row-reverse box-border justify-end relative">
        <img  src="../../../public/images/logo.png"  alt="logo"  className="absolute top-5/12 left-[71%]"/>
        <ul className="w-[70%] h-full pt-5 box-border list-none flex gap-7 items-center flex-row-reverse">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`w-fit h-5 flex justify-center items-center ${
                item.dropdown ? "group" : ""
              }`}
            >
              <a
                href={item.link}
                className="font-[iranSans] border-l-[0.9px] border-solid border-[#4d4d52] box-border text-base font-normal hover:text-white pl-2.5 flex flex-row-reverse text-[#afb2b4]"
              >
                {item.title}
                {item.dropdown && (
                  <img src="../../../public/images/arrow.svg" alt="arrowdown" />
                )}
              </a>
              {item.dropdown && (
                <div className="invisible group-hover:visible duration-300 w-fit bg-[#2d2d2d] py-5 absolute top-[75%] duration-500 box-border p-3.5">
                  <ul className="w-fit list-none flex flex-col items-start justify-start gap-5">
                    {item.dropdown.map((subItem, i) => (
                      <li key={i} className="w-full relative">
                        <a
                          href="#"
                          className="w-fit block w-full text-right text-[#afb2b4] transition-all duration-300 hover:text-white font-[iranSans]"
                        >
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
          <li className="w-fit h-5 flex justify-center items-center">
            <a className="font-sans text-[#afb2b4] transition-all duration-300 hover:text-white">
              EN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
