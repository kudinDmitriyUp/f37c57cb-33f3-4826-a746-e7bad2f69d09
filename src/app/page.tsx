"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqBase from '@/components/sections/faq/FaqBase';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="mediumLarge"
        sizing="mediumSizeLargeTitles"
        background="fluid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Flowers",
          id: "catalog",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Diki Flowers"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplit
      background={{
        variant: "radial-gradient",
      }}
      title="Bring Life into Every Space"
      description="At Diki, we craft bespoke floral arrangements that turn ordinary moments into extraordinary memories."
      buttons={[
        {
          text: "Shop Collections",
          href: "#catalog",
        },
      ]}
      imageSrc="https://pixabay.com/get/g94a7d1c4bde1436db6625c62f268fc1cdfd24ed6910e1cd460a3c8e8a826b2ef0181cc3e42d465ee211913b9731942599bef4933f274d5eda332cccd0fc3a8a1_1280.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={true}
      title="The Art of Floral Design"
      description="Diki was founded on a passion for nature's delicate beauty. Our studio specializes in custom arrangements for weddings, corporate events, and thoughtful personal gifts, ensuring every petal tells a story."
      imageSrc="https://pixabay.com/get/gc17349851ba285e7a80aea52999fa439a597bc1a0e3bfbca2bc30d4fa20c764bd95c08372cc8b6d7baf735b01b7668aa3572731aa71c83518df56c024ac08d21_1280.jpg"
    />
  </div>

  <div id="catalog" data-section="catalog">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Midnight Roses",
          price: "$85",
          variant: "Bouquet",
          imageSrc: "https://pixabay.com/get/g087b801b8bdef9db9b277f35370f2ca5b338d761dd19bdd4f8e48ea1118a27c07b0d6c5793773d284b5189f93aaca020a18ccae6b8f3a34757906d9485e0db8a_1280.jpg",
        },
        {
          id: "p2",
          name: "Spring Joy",
          price: "$65",
          variant: "Bouquet",
          imageSrc: "https://pixabay.com/get/g53d83afa1d8ffb9586dc3920cd4856e220e455411fe70c4edf1a54d390822f6775a4158d9ce3b96811da2bcb7809ee41_1280.jpg",
        },
        {
          id: "p3",
          name: "Pure Elegance",
          price: "$95",
          variant: "Arrangement",
          imageSrc: "https://pixabay.com/get/g92e88a7a35a1c7ce0845c2f80e3951ac66d0c0bf894507907a216f906eb26dfb4c3dc8dd26aabc72ec78303f7c2b5a23ae71eac8e8a387061bdb0c0ef0950eba_1280.jpg",
        },
      ]}
      title="Signature Arrangements"
      description="Explore our curated selection of seasonal blooms, perfect for any occasion or just because."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          title: "Perfect Wedding",
          quote: "Diki made our wedding day look absolutely stunning. The bouquets were breathtaking!",
          name: "Emma R.",
          role: "Bride",
          imageSrc: "https://pixabay.com/get/g55b6cd70e683af852879f8dc9896934f465e5438502af522b5c92e90362631c9c8551e718c06c43e0948cc6b849bc9e3f4d24cf20499fad6dd8492e5024a5cae_1280.jpg",
        },
        {
          id: "t2",
          title: "Stunning Service",
          quote: "The freshest flowers I've ever received in the city. Truly artistic work.",
          name: "Mark D.",
          role: "Local Resident",
          imageSrc: "https://pixabay.com/get/g47883835f991e7f29443460998a18ee643837fc28786476e2970121f23164055a2db9a61cfd64a5891a72fb6ed99cacd7344d676d2002b58fbdb107a14223227_1280.jpg",
        },
        {
          id: "t3",
          title: "Reliable Quality",
          quote: "Diki is my go-to for corporate gifts. Always prompt and elegantly packaged.",
          name: "Sarah P.",
          role: "Marketing Dir",
          imageSrc: "https://pixabay.com/get/g4357056b988e25d94faa651d04b7cbc835bb010c14172ae73b905e71917bc9dd6a23ac9c1f787a222c5a3b627de1f26cc9cc10c7c21ba694280f1de1b42c9f9e_1280.jpg",
        },
        {
          id: "t4",
          title: "Beautiful Blooms",
          quote: "The colors were vibrant and lasted much longer than any store-bought flowers.",
          name: "Tom G.",
          role: "Customer",
          imageSrc: "https://pixabay.com/get/g9b9ecca62c85ee1fb2ab19d8ef3ee6d8f732295f0114c0632fa769c3445e9520a0a562cf62d9bba61a4f1340e3eb703629c1247e1f22d69a7feedfffb9b4defc_1280.jpg",
        },
      ]}
      title="Words from Our Garden"
      description="We are proud to serve our community and bring joy through our floral creations."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How long will my flowers last?",
          content: "With proper care, most of our arrangements last 5-7 days.",
        },
        {
          id: "f2",
          title: "Do you offer delivery?",
          content: "Yes, we provide same-day local delivery across the metro area.",
        },
        {
          id: "f3",
          title: "Can I request custom colors?",
          content: "We love working on custom designs! Please contact us 48 hours in advance.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about caring for our blooms."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "downward-rays-static",
      }}
      text="Ready to bring some beauty into your world? Let's talk flowers."
      buttons={[
        {
          text: "Contact Us",
          href: "mailto:hello@diki.com",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Studio",
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Portfolio",
              href: "#catalog",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Diki Flowers"
      copyrightText="© 2025 Diki Flowers Studio."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
