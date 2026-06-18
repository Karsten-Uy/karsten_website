// src/components/PostFooterHome.jsx

import { AboutCapabilities, TechStack, CareerTimeline, FeaturedWork } from './PostFooterComponents';

const PostFooterHome = () => (
  <div className="mt-10">
    <AboutCapabilities />

    <CareerTimeline />

    <FeaturedWork />

    <TechStack />
  </div>
);

export default PostFooterHome;
