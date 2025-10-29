import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="shadow-md border-b bg-white p-4">
      <div className="container mx-auto flex justify-between">
        <h3 className="font-bold text-lg">Adebayo Aminat</h3>
        <div className="flex gap-4 text-black">
          <Link href={"/"}>Home</Link>
          <Link href={"/Skills"}>Skills</Link>
          <Link href={"/Projects"}>Projects</Link>
          <Link href={"/Contact"}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
