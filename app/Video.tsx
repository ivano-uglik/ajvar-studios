import { FaPlay } from "react-icons/fa";

export default function Video({ className }: { className?: string }) {
  return (
    <section className={`content-container mx-auto pt-8 pb-16 ${className}`}>
      <div className="bg-video h-[30vh] lg:h-[55vh] mx-auto">
        <div className="flex justify-center items-center h-full">
          <button className="p-8 lg:p-12 bg-white rounded-3xl spin">
            <FaPlay size={60} />
          </button>
        </div>
      </div>
    </section>
  );
}
