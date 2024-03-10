import MainLayout from "../layouts/mainLayout";

function Home() {
  return (
    <>
      <MainLayout>
        <div className=" bg-rose-200 h-80 flex items-center p-4">
          <p className=" text-2xl font-medium">
            Selamat Datang.
            <br /> Jutaan film, acara TV, dan orang-orang untuk dijelajahi.
            Jelajahi sekarang.
          </p>
        </div>
      </MainLayout>
    </>
  );
}

export default Home;
