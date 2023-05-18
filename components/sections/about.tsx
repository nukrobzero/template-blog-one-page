export default function AboutSection() {
  return (
    <>
      <section className="my-36" id="about">
        <div className="max-w-7xl mx-auto p-4 ">
          <div className="flex flex-col justify-center items-center">
            <div className="container mx-auto text-center md:text-center">
              <h1 className="text-4xl font-bold md:text-6xl text-center bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text">
                About Me
              </h1>
              <h1 className="text-2xl md:text-4xl text-center text-zinc-200 mt-10 mb-10">
                Hi I'm Peeradon, Welcome to my portfolio profile 👋
              </h1>
              <p className="text-lg text-zinc-200 text-center">
                🙋 สวัสดีครับ ผม พีระดนย์ ชัยรัตนคำโรจน์ หรือนักรบ
                เป็นคนที่ชอบและหลงไหลในการเขียนโปรแกรม
              </p>
              <p className="text-lg text-zinc-200 text-center">
                🌱 I’m currently learning Front-End, Back-End, DevOps & more 😍
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
