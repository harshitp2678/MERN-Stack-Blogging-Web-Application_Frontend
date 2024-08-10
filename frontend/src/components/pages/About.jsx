import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
          Welcome to ZETA BLOG, your go-to platform for sharing ideas,
          discovering new perspectives, and connecting with a community of
          like-minded individuals. Whether you’re a seasoned writer or just
          starting out, our website offers a seamless experience to create,
          share, and engage with content that matters.
        </p>
        <h2> Our Mission</h2>
        <p>
          At ZETA BLOG, we believe that everyone has a story to tell. Our
          mission is to empower individuals to express themselves freely and
          connect with others through their words. We aim to provide a platform
          that is not only user-friendly but also rich in features that cater to
          both readers and writers.
        </p>
        
        <h2>Key Features</h2>
        <p>
          Our platform offers a user-friendly editor, customizable profiles, and
          powerful search functionality. and track performance with
          analytics.Enjoy a seamless experience across devices with responsive
          design, social media integration, and strong privacy and security
          measures to protect your content.
        </p>
        <h2>1. Easy-to-Use Editor</h2>
        <p>
          Our intuitive, user-friendly editor allows you to write and format
          your blog posts effortlessly. Whether you’re drafting a quick update
          or composing a detailed article, our editor supports rich text,
          images, videos, and code snippets, ensuring that your content looks
          exactly how you want it.
        </p>
        <h2>2. Categories and Tags</h2>
        <p>
          Organize your posts with categories and tags to make it easier for
          readers to find the content they’re interested in. This feature helps
          enhance the discoverability of your posts within the community.
        </p>
        <h2>3. Analytics Dashboard</h2>
        <p>
          Track the performance of your blog posts with our built-in analytics
          dashboard. Get insights into page views, user engagement, and more to
          help you understand your audience better and refine your content
          strategy.
        </p>
        <h2>4. Responsive Design</h2>
        <p>
          Enjoy a seamless experience across all devices. Our website is fully
          responsive, ensuring that your blog looks great whether accessed on a
          desktop, tablet, or mobile phone.
        </p>
        <h2>5. Privacy and Security</h2>
        <p>
          Your privacy and security are our top priorities. We’ve implemented
          robust security measures to protect your data and ensure a safe
          blogging environment
        </p>
      </div>
    </article>
  );
};

export default About;
