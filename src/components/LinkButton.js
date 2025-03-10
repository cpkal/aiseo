import Link from "next/link"

export default function LinkButton({ type, href, children }) {
  const base = "p-2 md:px-6 md:py-3 rounded-full";
  const buttonStyle = type === "primary" ? `${base} bg-violet-500` : `${base} bg-zinc-800`;
  return (
    <Link href={href} className={buttonStyle}>{children}</Link>
  )
}