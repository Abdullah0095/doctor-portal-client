import { format } from "date-fns";

export const AvailableAppoinment = ({ selectedDate }) => {
  return (
    <>
      <section className="mt-16">
        <p className="text-center text-xl py-3 text-teal-900 font-bold">
          Your selected date is : {format(selectedDate, "PP")}
        </p>
      </section>
    </>
  );
};
