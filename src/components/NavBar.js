import Link from "next/link";

export default function NavBar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="./trigonometry">Trigonometry</Link>
      <Link href="./quadratics">Quadratics</Link>
    </div>
  );
}
