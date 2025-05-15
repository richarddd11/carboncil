import React from "react";
import { useTranslation } from "react-i18next";

const CharcoalInfoSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      title: t("charcoal_feature_1_title"),
      text: t("charcoal_feature_1_desc"),
      image: "Coal1.png",
      alt: "Charcoal and Venezuelan flag",
      showFlag: true,
      desktopTextFirst: true,
    },
    {
      title: t("charcoal_feature_2_title"),
      text: t("charcoal_feature_2_desc"),
      image: "Coal2.png",
      alt: "Clean charcoal",
      showFlag: false,
      desktopTextFirst: false,
    },
    {
      title: t("charcoal_feature_3_title"),
      text: t("charcoal_feature_3_desc"),
      image: "Coal3.png",
      alt: "Igniting charcoal",
      showFlag: false,
      desktopTextFirst: true,
    },
  ];

  return (
    <section className="productSec max-w-6xl mx-auto px-6 py-16 space-y-28">
      {features.map((item, index) => {
        const textOrder = item.desktopTextFirst
          ? "order-2 md:order-1"
          : "order-2 md:order-2";

        const imageOrder = item.desktopTextFirst
          ? "order-1 md:order-2"
          : "order-1 md:order-1";

        return (
          <div
            key={index}
            className="grid grid-cols-1 charcoal-pr md:grid-cols-2 gap-10  items-center"
          >
            {/* Image */}
            <div className={`relative flex justify-center ${imageOrder}`}>
              <img
                src={item.image}
                alt={item.alt}
                className="max-w-full h-auto object-contain"
              />
              {item.showFlag && (
                <img
                  src="Flag.png"
                  alt="Venezuelan flag"
                  className="absolute top-2 right-2 w-[85px] h-auto max-w-none"
                />
              )}
            </div>

            {/* Text */}
            <div className={`${textOrder}`}>
              <h2 className="text-3xl font-extrabold w-3/4 text-[#A40C0B] mx-auto mb-4">
                {item.title}
              </h2>
              <p className="text-[#696969] font-medium w-3/4 mx-auto text-lg leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CharcoalInfoSection;