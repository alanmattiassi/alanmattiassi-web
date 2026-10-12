import React from "react";
import { Metadata } from "next";
import PressSection from "@/components/PressSection";

export const metadata: Metadata = {
  title: "Press & Media Review | Alan Mattiassi, PhD",
  description:
    "Press coverage, interviews, radio/podcast talks, and media articles featuring Alan Mattiassi, game psychologist and researcher.",
};

export default function EnglishPressPage() {
  return (
    <div className="py-8 sm:py-12 space-y-12">
      <PressSection variant="full" />
    </div>
  );
}
