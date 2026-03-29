import Image from "next/image";
export default function LocationGuide() {
  return (
    <>
      <div className="text-gold-dark font-chenla text-center">
        <div className="flex items-center justify-center gap-3">
          <Image
            src="/images/icon4.png"
            alt="Icon Image"
            width={100}
            height={70}
            className="mx-auto rotate-180"
          />
          <p className="text-lg lg:text-2xl font-bold leading-relaxed">ទីតាំងកម្មវិធី</p>
          <Image
            src="/images/icon4.png"
            alt="Icon Image"
            width={100}
            height={70}
            className="mx-auto"
          />
        </div>
        <p className="text-base lg:text-lg mt-3">
          ស្ថិតនៅគេហដ្ឋានខាងកូនស្រី​ ភូមទំពូងផ្ទះវីងវេរលុយ ឃុំល្វេ ស្រុកកោះសូទិន
          ខេត្តកំពង់ចាម
        </p>
        <Image
          src="/images/locationQr.jpg"
          alt="QR Code Image"
          width={400}
          height={400}
          className="mx-auto my-8"
        />
        <button
          className="bg-gold-dark text-white py-2 px-4 rounded hover:bg-gold"
          onClick={() =>
            window.open(
              "https://maps.app.goo.gl/zGBnxt8Ex3fiDnDv9?g_st=atmp",
              "_blank",
            )
          }
        >
          បង្ហាញទីតាំង
        </button>
      </div>
    </>
  );
}
