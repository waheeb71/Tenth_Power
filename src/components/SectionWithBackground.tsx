// src/components/SectionWithBackground.tsx
import { useState } from "react";

interface SectionSettings {
  bg_type: "gradient" | "image" | "video";
  bg_value: string;
}

interface Props {
  section: "hero" | "services" | "projects" | "about" | "contact";
  t: (key: string) => string;
  children: React.ReactNode;
}

const defaultGradients: Record<string, string> = {
  hero: "linear-gradient(to bottom right, #15f6c5, #398dee)",
  services: "linear-gradient(to bottom right, #6853e2, #b8e9ed)",
  projects: "linear-gradient(to bottom right, #6ffab5, #1f2937)",
  about: "linear-gradient(to bottom right, #111827, #1bddcd)",
  contact: "linear-gradient(to bottom right, #4d82f6, #1f2937)",
};

// ملفات محلية (صور/فيديو)
const mediaFiles: Record<string, { type: "image" | "video"; src: string }[]> = {
  hero: [
    { type: "image", src: "/media/2.jpg" },
    { type: "image", src: "/media/3.jpg" },
    { type: "video", src: "" },
  ],
  services: [{ type: "image", src: "/media/image.png" }],
  projects: [{ type: "image", src: "/media/6.jpg" }],
  about: [{ type: "image", src: "/media/5.jpg" }],
  contact: [{ type: "image", src: "/media/4.jpg" }],
};

export default function SectionWithBackground({ section, children }: Props) {
  const [settings] = useState<SectionSettings>(() => {
    const files = mediaFiles[section];
    if (files && files.length > 0) {
      const selected = files[Math.floor(Math.random() * files.length)];
      return {
        bg_type: selected.type,
        bg_value: selected.src,
      };
    }
    // fallback gradient
    return {
      bg_type: "gradient",
      bg_value: defaultGradients[section] || "linear-gradient(to bottom right, #1e56ceff, #1f2937)",
    };
  });

  return (
    <section className="relative text-white py-20 overflow-hidden">
      {/* الخلفية */}
      {settings.bg_type === "gradient" && (
        <div className="absolute inset-0" style={{ background: settings.bg_value }} />
      )}

      {settings.bg_type === "image" && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${settings.bg_value})` }}
        />
      )}

      {/*settings.bg_type === "video" && (
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src={settings.bg_value} type="video/mp4" />
        </video>
      )*/ }

      {/* Overlay فقط للصور والفيديو */}
      {/*(settings.bg_type === "image" || settings.bg_type === "video") && (
        <div className="absolute inset-0 bg-black/40" />
      )*/}

      {/* المحتوى */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {children}
      </div>
    </section>
  );
}
