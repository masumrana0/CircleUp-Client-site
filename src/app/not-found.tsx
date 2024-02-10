import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen justify-center items-center bg-black flex-col gap-3">
      <h2 className="text-gray-300 text-xl">
        Sorry we cannot serve you here!!!
      </h2>
      <Link href="/home" className="underline text-violet-500">
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
