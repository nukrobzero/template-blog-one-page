export default function AboutSection() {
  return (
    <>
      <section className="bg-orange-500 h-screen" id="about">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col items-center h-full md:flex-row">
            <div className="container mx-auto text-center md:text-center">
              <h1 className="text-4xl md:text-6xl text-center">About</h1>
              <p className="text-lg text-zinc-200 text-center mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
                iaculis odio. Nullam euismod, sem eu interdum aliquam, nulla
                nisi vulputate ex, vel pellentesque metus mi vel nisl. Vivamus
                sagittis lorem velit, vel vestibulum eros convallis sed.
                Phasellus fringilla augue at mauris dignissim, et ultrices metus
                euismod. Sed pretium eleifend lorem, at bibendum sapien mollis
                ut. Nunc id ipsum sit amet ex aliquam ullamcorper. Aenean sed
                rutrum magna. Donec fringilla tellus non ante vestibulum
                bibendum. Nullam ac hendrerit orci.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
