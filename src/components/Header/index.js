import Link from "next/link";

function Header() {
  return (
    <nav className="py-4 shadow-lg">
      <ul className="flex justify-between items-center container mx-auto">
        <li>
          <Link href={"/"}>
            <a className="font-bold">Redirect Checker</a>
          </Link>
        </li>

        <li className="border py-3 px-3 rounded bg-blue-300 cursor-pointer text-white">
          <Link href={"/buy-coffee"}>
            <a className="text-xs font-bold block">Buy me a Coffee</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
