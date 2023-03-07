export default function AboutSection() {
  return (
    <>
      <section className="bg-orange-500 h-screen" id="about">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-screen">
            <div className="container mx-auto text-center md:text-center">
              <h1 className="text-4xl md:text-6xl text-center">About Me</h1>
              <h1 className="text-2xl md:text-6xl text-center text-zinc-200 mt-10 mb-10">
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
