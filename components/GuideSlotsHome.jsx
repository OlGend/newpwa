"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Img from "@/public/mobile_blue.png";
import Link from "next/link";
import guidepostDataEn from "@/components/posts/en.json";
import guidepostDataPl from "@/components/posts/pl.json";
import guidepostDataNo from "@/components/posts/no.json"; 
import guidepostDataDe from "@/components/posts/de.json"; 

const GuideSlotsHome = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  // Используйте просто объект с данными для каждого языка
  const guidepostData = {
    pl: guidepostDataPl,
    en: guidepostDataEn,
    no: guidepostDataNo,
    de: guidepostDataDe,
  };

  const guideposts = guidepostData[currentLanguage]?.guideposts || [];

  const [loading, setLoading] = useState(guideposts.length === 0);

  useEffect(() => {
    setLoading(guideposts.length === 0);
  }, [guideposts]);

  const lastThreePosts = guideposts.slice(-3);

  return (
    <div className="guides">
      <div className="main__container flex">
        <div className="flex flex-col">
          <h2 className="mb-5">Online Gambling Guides</h2>
          <div className="flex justify-between guide-wrapper">
            <div className="left basis-5/12">
              <p>Enjoy the entertainment of gambling while ensuring it remains enjoyable by being mindful of your emotions during play. If you detect feelings of heightened anger, frustration, or difficulty making rational decisions, it is essential to cease playing.</p>
            </div>
            <div className="right basis-5/12">
              <Image
                src={Img}
                alt={"Guide"}
                width={350}
                height={350}
                loading="lazy"
              />
            </div>
          </div>
          <div className="guide-cards flex-wrap flex justify-start pt-12 pb-12">
            {lastThreePosts.map((item) => (
              <div className="guide-card relative mb-6" key={item.id}>
                <div className="avatar absolute"></div>
                <Image
                  src={`/${item.image}`}
                  alt={item.title}
                  width={600}
                  height={300}
                  loading="lazy"
                />
                <span>{item.author}</span>

                <Link href={`/guides/${item.id}`}>
                  <h4>{item.title}</h4>
                </Link>
              </div>
            ))}
          </div>
          <Link className="btn btn-primary text-center" href={"/guides"}>
          View All Guides
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GuideSlotsHome;
