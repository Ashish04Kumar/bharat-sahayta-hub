import PageContent from "@/components/landing-page/PageContent";
import React, { Suspense } from "react";

const Page: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageContent />
  </Suspense>
);

export default Page;
