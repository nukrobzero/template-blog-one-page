import Image from "next/image";
import Link from "next/link";

export default function Skill() {
  return (
    <>
      <section id="skill">
        <div className="max-w-7xl mx-auto p-4 my-12">
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-4xl md:text-6xl text-center mb-16 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text font-bold">
              Skill
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-20 justify-center items-center">
              <Link
                href="https://getbootstrap.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://www.w3schools.com/cpp/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                  alt="cplusplus"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://www.docker.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                  alt="docker"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://expressjs.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://git-scm.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://graphql.org"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
                  alt="graphql"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://www.microsoft.com/en-us/sql-server"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg"
                  alt="mssql"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://www.mysql.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                  alt="mysql"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                  alt="nextjs"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://nodejs.org"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>

              <Link
                href="https://www.php.net"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg"
                  alt="php"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://www.postgresql.org"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                  alt="postgresql"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://postman.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://www.python.org"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="python"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://reactjs.org/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://sass-lang.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                  alt="sass"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                  alt="tailwind"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://www.typescriptlang.org/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                  alt="typescript"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
              <Link
                href="https://vuejs.org/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center"
              >
                <Image
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg"
                  alt="vuejs"
                  width="120"
                  height="120"
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  className="!w-32"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
