// src/components/PostFooterHome.jsx

import {
  AboutCapabilities,
  TechStack,
  CareerTimeline,
  FeaturedWork,
  KeepExploring,
  SectionDivider,
} from './PostFooterComponents';
import { sectionDividers } from '../data/home';

// The home post-footer, split into three numbered acts by SectionDivider
// banners: 01 About (who I am + what I do + the toolkit), 02 Experience (career
// timeline + selected projects), 03 Contact (where to go next).
const PostFooterHome = () => (
  <div className="mt-10">
    {/* 01 — About */}
    <SectionDivider {...sectionDividers.about} />
    <AboutCapabilities />
    <TechStack />

    {/* 02 — Experience */}
    <SectionDivider {...sectionDividers.experience} />
    <CareerTimeline />
    <FeaturedWork />

    {/* 03 — Contact */}
    <SectionDivider {...sectionDividers.contact} />
    <KeepExploring />
  </div>
);

export default PostFooterHome;
