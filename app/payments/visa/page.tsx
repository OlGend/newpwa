import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredPayments from "@/components/payments//FilteredPayments";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Visa from "@/components/payments/Visa";

export const metadata: Metadata = {
  title: "Payments | New Brand",
  description: "Generated by create next app",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Visa />
      {/* <TopBrands /> */}
      <FilteredPayments />
      <GuideSlotsPage />
    </div>
  );
}
