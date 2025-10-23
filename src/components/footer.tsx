import Link from "next/link";
import Image from "next/image";

const productLinks = [
  { label: "Fitur", href: "#features" },
  { label: "Harga", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const infoLinks = [
  { label: "Syarat Layanan", href: "https://hemat.ai/terms" },
  { label: "Kebijakan Privasi", href: "https://hemat.ai/privacy" },
  { label: "Blog", href: "https://hemat.ai/blog" },
];

const contactLinks = [
  { label: "Hubungi Kami", href: "https://hemat.ai/contact-us" },
  { label: "Instagram: @jadihemat.id", href: "https://instagram.com/jadihemat.id" },
  { label: "Email: halo@hemat.ai", href: "mailto:halo@hemat.ai" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-100 bg-white py-16">
      <div className="container">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/hemat/logo.png"
                  alt="hemat.ai"
                  fill
                  className="object-contain"
                  sizes="48px"
                />
              </div>
              <span className="text-lg font-semibold text-slate-900">hemat.ai</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              2025 hemat.ai. Seluruh hak cipta dilindungi.
            </p>
          </div>
          <FooterColumn title="Produk" links={productLinks} />
          <FooterColumn title="Informasi" links={infoLinks} />
          <FooterColumn title="Kontak" links={contactLinks} />
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-slate-600">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="transition hover:text-brand-dark"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
