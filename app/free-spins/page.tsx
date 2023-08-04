import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredHome from "@/components/FilteredHome";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";

export const metadata: Metadata = {
  title: "Free spins | New Brand",
  description: "Generated by create next app",
};

export default async function FreeSpins() {
  return (
    <>
      <div className="page-bonuses">
        <PreviewBonuses />
        <TopBrands />
        <FilteredHome />
        <GuideSlotsPage />
      </div>
    </>
  );
}
