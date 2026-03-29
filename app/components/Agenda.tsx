import Image from "next/image";
export default function Agenda() {
  return (
    <>
      <div className="font-chenla text-gold-dark flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <Image
            src="/images/icon4.png"
            alt="Icon Image"
            width={100}
            height={70}
            className="mx-auto rotate-180"
          />
          <p className="text-lg lg:text-2xl font-bold text-center leading-relaxed">
            កម្មវិធីសិរីមង្គលអាពាហ៍ពិពាហ៍
          </p>
          <Image
            src="/images/icon4.png"
            alt="Icon Image"
            width={100}
            height={70}
            className="mx-auto"
          />
        </div>
        <p className="mt-3 text-base lg:text-lg">
          <span className="font-bold">ថ្ងៃទី១៖​ </span>ថ្ងៃអង្គារ ខែមេសា​
          ឆ្នាំ២០២៦
        </p>
        <div className="justify-self-start py-6 text-[14px] lg:text-base">
          <p className="">ម៉ោង​ ២ៈ០០ រសៀល ៖ ពិធីក្រុងពាលី</p>
          <p className="mt-4">
            ម៉ោង​ ៣ៈ០០ រសៀល ៖ ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត
          </p>
          <p className="mt-4">ម៉ោង​​ ៥ៈ០០ ល្ងាច ៖ ពិធីជាវខាន់ស្លា</p>
          <p className="mt-4">
            ម៉ោង​ ៦ៈ០០ ល្ងាច ៖ អញ្ជើញភ្ញៀវកត្តិយសពិសាអាហារពេលល្ងាច
          </p>
        </div>
        <Image
          src="/images/arrow.png"
          alt="Icon Image"
          width={50}
          height={50}
          className="mx-auto my-8"
        />
        <p className="mt-3 text-base lg:text-lg">
          <span className="font-bold">ថ្ងៃទី២៖​ </span>ថ្ងៃពុធ ខែមេសា​ ឆ្នាំ២០២៦
        </p>
        <div className="justify-self-start py-6 text-[14px] lg:text-base">
          <p>
            ម៉ោង​ ៦ៈ០០ ព្រឹក ៖ ជួបជុំភ្ញៀវកត្តិយសរៀបចំពិធីហែជំនូន
          </p>
          <p className="mt-4">
            ម៉ោង​ ៧ៈ០០ ព្រឹក ៖ ពិធីហែជំនូន (ហែកំណត់) ចូលរោងជ័យ
          </p>
          <p className="mt-4">
            ម៉ោង​ ៧ៈ៣០ ព្រឹក ៖ អញ្ជើញភ្ញៀវកត្តិយសពិសាអាហារពេលព្រឹក
          </p>
          <p className="mt-4">ម៉ោង​ ៨ៈ០០ ព្រឹក ៖ រៀបចំផ្លែឈើសែនព្រេន</p>
          <p className="mt-4">
            ម៉ោង​ ៩ៈ០០ ព្រឹក ៖ ពិធីកាត់សក់បង្កក់សិរីកូនប្រុសកូនស្រី
          </p>
          <p className="mt-4">
            ម៉ោង​ ១១ៈ០០ ព្រឹក ៖ ពិធីសំពះផ្ទឹម ពិធីបង្វិលពពិល ពិធីសែនចងដៃ
          </p>
          <p className="mt-4">
            ម៉ោង​ ១២ៈ០០ ថ្ងៃត្រង់ ៖ អញ្ជើញភ្ញៀវកត្តិយសពិសាអាហារថ្ងៃត្រង់
          </p>
          <p className="mt-4">
            ម៉ោង​ ៤ៈ០០ ល្ងាច ៖ អញ្ជើញភ្ញៀវកត្តិយសពិសាភោជនាហារ
          </p>
        </div>
        <Image
          src="/images/icon1.png"
          alt="Icon Image"
          width={100}
          height={70}
          className="mx-auto my-8"
        />
      </div>
    </>
  );
}
