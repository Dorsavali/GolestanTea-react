const SocialMediaBar = () => {
  const data = [
    {
      name: "golestan",
      gray: "../../../public/images/social-media/gl.png",
      color: "../../../public/images/social-media/gl-color.png",
    },
    {
      name: "aparat",
      gray: "../../../public/images/social-media/aparat.png",
      color: "../../../public/images/social-media/aparat-color.png",
    },
    {
      name: "telegram",
      gray: "../../../public/images/social-media/tele.png",
      color: "../../../public/images/social-media/tele-color.png",
    },
    {
      name: "instagram",
      gray: "../../../public/images/social-media/insta.png",
      color: "../../../public/images/social-media/insta-color.png",
    },
    {
      name: "linkedin",
      gray: "../../../public/images/social-media/linkdin.png",
      color: "../../../public/images/social-media/linkdin-colorful.png",
    },
    {
      name: "facebook",
      gray: "../../../public/images/social-media/fb.png",
      color: "../../../public/images/social-media/fb-color.png",
    },
  ];
  return (
    <div className="w-full h-[15vh] bg-[#eeefef] flex justify-center items-center gap-[2px] border-b-[24px] border-[#ed1c24]">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-[53px] h-[55px] relative group cursor-pointer"
        >
          <img
            src={item.gray}
            alt={item.name}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <img
            src={item.color}
            alt={item.name}
            className="w-full h-full object-cover absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
};
export default SocialMediaBar;
