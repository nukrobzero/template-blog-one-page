import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <div className="flex items-center">
            <Link href="/" className="text-white font-bold text-xl">
              <Image
                src={`https://img.lovepik.com/element/40120/1491.png_860.png`}
                width={300}
                height={300}
                alt="logo"
                layout="responsive"
                style={{ objectFit: "cover" }}
                className="!w-[120px] rounded-full"
              />
            </Link>
          </div>
        </div>
        <div className="text-sm mt-4 sm:mt-0">
          &copy; 2023 Created By Nukrobzero. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
